import React from "react";

const PositionButton = ({ onClick}) => {
    return (
        <button
            className="btn btn-light rounded-circle position-fixed"
            style={{ top: '80px', right: '20px', zIndex: 1000}}
            onClick={onClick}
        >
            📍 {/* Temporary icon */}
        </button>
    );
};

export default PositionButton;