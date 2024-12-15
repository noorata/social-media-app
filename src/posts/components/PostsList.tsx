import React, { useEffect } from "react";
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

const PostsList: React.FC = () => {
  const { filteredTransactions, setPosts } = usePostsStore();

  //fetch posts on component mount
  const fetchPosts = async () => {
    try {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
    } catch (error) {
      toast.error("Failed to fetch posts, please try again");
      console.error("Error fetching posts:", error);
    }
  };

  //handle post deletion
  const handleDelete = async (id: number) => {
    try {
      await removePost(id);
      toast.success("Post deleted successfully!");
      fetchPosts();
    } catch (error) {
      toast.error("Failed to delete the post. Please try again.");
      console.error("Error deleting post:", error);
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
      {rowData.tags?.map((tag, index) => (
        <span key={index} className="badge bg-primary me-1 mb-1">
          {tag}
        </span>
      )) || <span>No Tags</span>}
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
    <button
      className="btn btn-danger btn-sm"
      onClick={() => handleDelete(rowData.id)}
    >
      Delete
    </button>
  );

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="container-fluid mt-4">
        <h2 className="mb-4">Posts Management</h2>
        <PostsFilters />
        <div className="table-responsive">
          <DataTable
            value={filteredTransactions} // Display filtered posts
            paginator
            rows={5}
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
          </DataTable>
        </div>
      </div>
    </>
  );
};

export default PostsList;
