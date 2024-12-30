import React from "react";
import { usePostsStore } from "../posts-store";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/primereact.css";
import { useTranslation } from "react-i18next";

const PostsFilters: React.FC = () => {
  const { t } = useTranslation();
  const { setStatusFilter, setSearchFilter, statusFilter, searchFilter } =
    usePostsStore();

  const statusOptions = [
    { label: t("postsFilters.all"), value: "" },
    { label: t("postsFilters.draft"), value: "draft" },
    { label: t("postsFilters.published"), value: "published" },
    { label: t("postsFilters.deleted"), value: "deleted" },
  ];
  return (
    <div className="mb-3 d-flex gap-3 align-items-center flex-wrap">
      {/*filter by status*/}
      <Dropdown
        value={statusFilter}
        options={statusOptions}
        onChange={(e) => setStatusFilter(e.value)}
        placeholder={t("postsFilters.placeholder.status")}
        className="w-25"
        optionValue="value"
        optionLabel="label"
      />

      {/*search field*/}
      <InputText
        value={searchFilter}
        placeholder={t("postsFilters.placeholder.search")}
        onChange={(e) => setSearchFilter(e.target.value)}
        className="w-50"
      />
    </div>
  );
};

export default PostsFilters;
