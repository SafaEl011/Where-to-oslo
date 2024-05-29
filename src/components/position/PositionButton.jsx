import React from "react";
import positionIcon from "/images/icons/position.png";
import "../../css/IconStyles.css"

const PositionButton = ({ onClick, position }) => {

    return (
        <button
            className="icon-button position-fixed"
            style={{ ...position, zIndex: 1000}}
            onClick={onClick}
        >
            <img src={positionIcon} alt="Position Icon" className="icon"/>
        </button>
    );
};

export default PositionButton;