import React from "react";
import "../../css/IconStyles.css"

const IconButton = ({onClick, children, className}) => {
    return (
        <button className={`icon-button ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default IconButton;