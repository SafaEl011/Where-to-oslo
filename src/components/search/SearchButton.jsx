import React from "react";
import searchIcon from "/images/icons/search.svg";
import IconButton from "../IconButtons/IconButton";

const SearchButton = ({ onClick }) => {
  return (
    <IconButton className="search-button" onClick={onClick}>
      <img src={searchIcon} alt="Search Icon" className="icon" />
    </IconButton>
  );
};

export default SearchButton;
