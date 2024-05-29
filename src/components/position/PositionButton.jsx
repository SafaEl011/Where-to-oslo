import React from "react";
import positionIcon from "/images/icons/position.png";
import IconButton from "../IconButtons/IconButton";

const PositionButton = ({ onClick }) => {

    return (
        <IconButton className="position-button" onClick={onClick}>
            <img src={positionIcon} alt="Position Icon" className="icon"/>
        </IconButton>
    );
};

export default PositionButton;