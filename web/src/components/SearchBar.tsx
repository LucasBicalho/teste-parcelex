import React from "react";
import "./SearchBar.css";

const SearchBar: React.FC = () => {
  return (
    <div className="searchbar">
      <input
        className="searchbar-input"
        type="text"
        placeholder="Pesquisar..."
      />
    </div>
  );
};

export default SearchBar;
