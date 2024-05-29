import React from "react";
import searchIcon from "/images/icons/search.png";
import "../../css/IconStyles.css"

const SearchButton = ({ onClick, position}) => {
    return (
        <button
        className="icon-button position-fixed"
        style={{ ...position, zIndex: 1000}}
        onClick={onClick}
        >
            <img src={searchIcon} alt="Search Icon" className="icon"/>
        </button>
    );
};

export default SearchButton;