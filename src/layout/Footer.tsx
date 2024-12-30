import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-light py-3 text-center">
      <p className="mb-0">{t("footer.copy")}</p>
      <Link to="/rate-my-project">
        <button className="btn btn-primary">{t("footer.rateProject")}</button>
      </Link>
    </footer>
  );
};

export default Footer;
