import React from "react";
import settingsIcon from "/images/icons/settings.png";
import "../../css/IconStyles.css"
import IconButton from "../IconButtons/IconButton";


const SettingsButton = ({ onClick }) => {


    return (
        <IconButton className="settings-button" onClick={onClick}>
            <img src={settingsIcon} alt="Settings Icon" className="icon"/>
        </IconButton>
    )
}

export default SettingsButton;