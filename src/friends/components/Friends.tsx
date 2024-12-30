import React from "react";
import { useTranslation } from "react-i18next";
import Friend from "./Friend";
import { friends, groups } from "../friends-data";

const Friends: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded shadow-sm p-3">
      {/*search bar*/}
      <div className="d-flex align-items-center mb-4">
        <input
          type="search"
          className="form-control rounded-pill"
          placeholder={t("friends.searchPlaceholder")}
          aria-label="Search"
        />
        <i className="fas fa-search ms-2 text-muted"></i>
      </div>

      {/*friends section*/}
      <h6 className="text-uppercase text-muted mb-3">
        {t("friends.friendsTitle")}
      </h6>
      <div className="mb-4">
        {friends.map((friend, index) => (
          <Friend key={index} {...friend} />
        ))}
      </div>

      {/*groups section*/}
      <h6 className="text-uppercase text-muted mb-3">
        {t("friends.groupsTitle")}
      </h6>
      <div>
        {groups.map((group, index) => (
          <Friend key={index} {...group} isOnline={false} />
        ))}
      </div>
    </div>
  );
};

export default Friends;
