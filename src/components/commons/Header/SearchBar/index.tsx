import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";

import "./styles.scss";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const handleSearch = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div className="searchBarContainer" data-testid="search">
      <input
        className="input"
        type="text"
        placeholder="Search any movies"
        value={search}
        onChange={handleSearch}
      />

      <div className="icon">
        <button type="submit" className="submitButton">
          <AiOutlineSearch size={28} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;