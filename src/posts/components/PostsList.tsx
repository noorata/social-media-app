import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import dayjs from "dayjs";
import { posts } from "../posts-data";
import { Post } from "../posts.types";
import clsx from "clsx";
import "../../assets/styles/responsive.scss";

import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

const PostsList: React.FC = () => {
  const [data] = useState<Post[]>(posts);

  //render status badge
  const statusTemplate = (rowData: Post) => {
    return (
      <span
        className={clsx(
          "badge p-2 text-uppercase",
          rowData.status === "published" && "bg-success",
          rowData.status === "draft" && "bg-warning text-dark",
          rowData.status === "deleted" && "bg-danger"
        )}
      >
        {rowData.status.toUpperCase()}
      </span>
    );
  };

  //render tags
  const tagsTemplate = (rowData: Post) => {
    return (
      <div className="d-flex flex-wrap">
        {rowData.tags.map((tag, index) => (
          <span key={index} className="badge bg-primary me-1 mb-1">
            {tag}
          </span>
        ))}
      </div>
    );
  };

  //render author image
  const authorTemplate = (rowData: Post) => {
    return (
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
  };

  //render formatted date
  const dateTemplate = (rowData: Post) => {
    return dayjs(rowData.dateCreated).format("YYYY-MM-DD HH:mm");
  };

  return (
    <div className="container-fluid mt-4">
      <h2 className="mb-4">Posts Management</h2>
      <div className="table-responsive">
        <DataTable
          value={data}
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
          <Column field="status" header="Status" body={statusTemplate}></Column>
          <Column field="tags" header="Tags" body={tagsTemplate}></Column>
          <Column field="author" header="Author" body={authorTemplate}></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default PostsList;
