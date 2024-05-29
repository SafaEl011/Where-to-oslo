import React from "react";
import settingsIcon from "/images/icons/settings.png";
import "../../css/IconStyles.css"


const SettingsButton = ({ onClick, position }) => {


    return (
        <button
            className="icon-button position-fixed"
            style={{ ...position, zIndex: 1000}}
            onClick={onClick}
        >
            <img src={settingsIcon} alt="Settings Icon" className="icon"/>
        </button>
    )
}

export default SettingsButton;