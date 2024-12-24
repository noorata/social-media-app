import React from "react";
import { usePostsStore } from "../posts-store";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/primereact.css";

const PostsFilters: React.FC = () => {
  const { setStatusFilter, setSearchFilter, statusFilter, searchFilter } =
    usePostsStore();

  const statusOptions = [
    { label: "All", value: "" },
    { label: "Draft", value: "draft" },
    { label: "Published", value: "published" },
    { label: "Deleted", value: "deleted" },
  ];
  return (
    <div className="mb-3 d-flex gap-3 align-items-center">
      {/*filter by status*/}
      <Dropdown
        value={statusFilter}
        options={statusOptions}
        onChange={(e) => setStatusFilter(e.value)}
        placeholder="Filter by status"
        className="w-25"
        optionValue="value"
        optionLabel="label"
      />

      {/*search field*/}
      <InputText
        value={searchFilter}
        placeholder="Search by title or tags"
        onChange={(e) => setSearchFilter(e.target.value)}
        className="w-50"
      />
    </div>
  );
};

export default PostsFilters;
