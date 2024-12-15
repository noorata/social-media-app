import React from "react";
import { usePostsStore } from "../posts-store";

const PostsFilters: React.FC = () => {
  const { setStatusFilter, setSearchFilter, statusFilter, searchFilter } =
    usePostsStore();

  return (
    <div className="mb-3 d-flex gap-3">
      {/*filter by status*/}
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="form-select w-25"
      >
        <option value="">All</option>
        <option value="draft">Draft</option>
        <option value="published">Published</option>
        <option value="deleted">Deleted</option>
      </select>

      {/*search field*/}
      <input
        type="text"
        value={searchFilter}
        placeholder="Search by title or tags"
        onChange={(e) => setSearchFilter(e.target.value)}
        className="form-control w-50"
      />
    </div>
  );
};

export default PostsFilters;
