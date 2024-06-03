import React from "react";
import searchIcon from "/images/icons/search.svg";
import IconButton from "../IconButtons/IconButton";
import {toggleExpansion} from "../ToggleExpansion";


const SearchButton = ({ onClick}) => {
    const handleClick = () => {
        onClick();
        toggleExpansion('search-container');
    }
    return (
        <IconButton className="search-button" onClick={handleClick}>
            <img src={searchIcon} alt="Search Icon" className="icon"/>
        </IconButton>
    );
};

export default SearchButton;