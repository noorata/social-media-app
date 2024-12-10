import React from "react";
import '../../assets/styles/Search.scss';

const Search: React.FC = () => {
  return (
    <div className="d-none d-md-flex align-items-center search-bar">
      <input
        className="form-control rounded-pill ps-5"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <i className="fas fa-search search-icon text-secondary"></i>
    </div>
  );
};

export default Search;
