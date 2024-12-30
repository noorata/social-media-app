import React from "react";
import RecentPosts from "./RecentPosts";
import Stories from "../../stories/components/Stories";
import Friends from "../../friends/components/Friends";
import "../../assets/styles/responsive.scss";
import { useTranslation } from "react-i18next";

const Homepage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="container-fluid py-4">
      <div className="row">
        {/*main content*/}
        <div className="col-lg-8 col-md-7 col-12">
          <div className="mb-4">
            <h5 className="mb-3">{t("homepage.stories")}</h5>
            <Stories />
          </div>
          <div className="posts">
            <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
              <h5 className="mb-0">{t("homepage.recentPosts")}</h5>
              <div className="feeds-nav d-flex gap-3 flex-wrap mt-2 mt-md-0">
                <a href="#" className="text-primary fw-bold">
                  {t("homepage.feeds")}
                </a>
                <a href="#" className="text-muted">
                  {t("homepage.all")}
                </a>
                <a href="#" className="text-muted">
                  {t("homepage.following")}
                </a>
                <a href="#" className="text-muted">
                  {t("homepage.latest")}
                </a>
                <a href="#" className="text-muted">
                  {t("homepage.popular")}
                </a>
              </div>
            </div>
            <RecentPosts />
          </div>
        </div>

        {/*friends section*/}
        <div
          className="col-lg-4 d-none d-lg-block"
          style={{
            maxWidth: "350px",
          }}
        >
          <div className="sticky-top" style={{ top: "70px" }}>
            <Friends />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
