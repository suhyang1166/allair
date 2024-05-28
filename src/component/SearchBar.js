import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <form className="main_form">
      <label for="search_bar">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </label>
      <input type="search" id="search_bar" />
    </form>
  );
};

export default SearchBar;
