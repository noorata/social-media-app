import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import dayjs from "dayjs";
import clsx from "clsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../assets/styles/responsive.scss";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Post } from "../posts.types";
import { getAllPosts, removePost } from "../posts-api";
import { usePostsStore } from "../posts-store";
import PostsFilters from "./PostsFilters";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Authorize from "../../auth/components/Authorize";
import NewPost from "./NewPost";

const PostsList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    posts,
    filteredPosts,
    statusFilter,
    searchFilter,
    setPosts,
    setfilteredPosts,
  } = usePostsStore();

  //fetch posts on component mount
  const fetchPosts = async () => {
    try {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
      filterPosts(allPosts, statusFilter, searchFilter);
    } catch (error) {
      toast.error("Failed to fetch posts, please try again");
      console.error("Error fetching posts:", error);
    }
  };

  const filterPosts = (posts: Post[], status: string, search: string) => {
    const searchLower = search.toLowerCase();
    const filtered = posts.filter(
      (post) =>
        (status ? post.status === status : true) &&
        (searchLower
          ? post.title.toLowerCase().includes(searchLower) ||
            post.tags.some((tag) => tag.toLowerCase().includes(searchLower))
          : true)
    );
    setfilteredPosts(filtered);
  };

  //handle post deletion
  const handleDelete = async (id: number) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This post will be marked as deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
    });
    if (result.isConfirmed) {
      try {
        await removePost(id);
        Swal.fire(
          "Deleted!",
          "The post has been deleted successfully.",
          "success"
        );
        fetchPosts();
      } catch (error) {
        Swal.fire(
          "Error",
          "Failed to delete the post. Please try again.",
          "error"
        );
        console.error("Error deleting post:", error);
      }
    }
  };

  //render status badge
  const statusTemplate = (rowData: Post) => (
    <span
      className={clsx("badge p-2 text-uppercase", {
        "bg-success": rowData.status === "published",
        "bg-warning text-dark": rowData.status === "draft",
        "bg-danger": rowData.status === "deleted",
      })}
    >
      {rowData.status.toUpperCase()}
    </span>
  );

  //render tags
  const tagsTemplate = (rowData: Post) => (
    <div className="d-flex flex-wrap">
      {rowData.tags?.length ? (
        rowData.tags.map((tag, index) => (
          <span key={index} className="badge bg-primary me-1 mb-1">
            {tag}
          </span>
        ))
      ) : (
        <span>No Tags</span>
      )}
    </div>
  );

  //render author image
  const authorTemplate = (rowData: Post) => (
    <div className="d-flex align-items-center">
      <img
        src={rowData.authorImg}
        alt={rowData.author}
        className="rounded-circle me-2 img-fluid"
        style={{ width: "30px", height: "30px" }}
      />
      <span className="text-truncate" style={{ maxWidth: "150px" }}>
        {rowData.author}
      </span>
    </div>
  );

  //render formatted date
  const dateTemplate = (rowData: Post) =>
    dayjs(rowData.dateCreated).format("YYYY-MM-DD HH:mm");

  //render delete button
  const deleteTemplate = (rowData: Post) => (
    <Authorize allowedRoles={["admin"]}>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => handleDelete(rowData.id)}
      >
        Delete
      </button>
    </Authorize>
  );

  const handlePostCreated = () => {
    fetchPosts();
    setIsModalOpen(false);
  };

  useEffect(() => {
    filterPosts(posts, statusFilter, searchFilter);
  }, [posts, statusFilter, searchFilter]);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="container-fluid mt-4">
        <h2 className="mb-4">Posts Management</h2>
        <button
          className="btn btn-success mb-3"
          onClick={() => setIsModalOpen(true)}
        >
          Create New Post
        </button>
        {isModalOpen && (
          <div
            className="modal fade show d-block"
            tabIndex={-1}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Create New Post</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setIsModalOpen(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <NewPost
                    onPostCreated={handlePostCreated}
                    onClose={() => setIsModalOpen(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        <PostsFilters />
        <div className="table-responsive">
          <DataTable
            value={filteredPosts}
            paginator
            rows={3}
            rowsPerPageOptions={[3, 5, 10]}
            responsiveLayout="stack"
            className="shadow"
          >
            <Column field="id" header="ID" style={{ width: "5%" }}></Column>
            <Column field="title" header="Title"></Column>
            <Column field="description" header="Description"></Column>
            <Column
              field="dateCreated"
              header="Created At"
              body={dateTemplate}
            ></Column>
            <Column
              field="status"
              header="Status"
              body={statusTemplate}
            ></Column>
            <Column field="tags" header="Tags" body={tagsTemplate}></Column>
            <Column
              field="author"
              header="Author"
              body={authorTemplate}
            ></Column>
            <Column body={deleteTemplate} header="Actions"></Column>

            <Column
              body={(rowData) => (
                <Link
                  to={`/posts/${rowData.id}`}
                  className="btn btn-info btn-sm text-secondary"
                >
                  View Details
                </Link>
              )}
              header="Details"
            />
          </DataTable>
        </div>
      </div>
    </>
  );
};

export default PostsList;
