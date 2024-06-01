import React, { useState } from "react";
import settingsIcon from "/public/images/icons/settings.svg";
import "../../css/IconStyles.css";
import IconButton from "../IconButtons/IconButton";
import SettingsPopUp from "./SettingsPopUp";



const SettingsButton = () => {
    const [isSettingsVisible, setSettingsVisible] = useState(false);

    const toggleSettings = () => {
        setSettingsVisible(!isSettingsVisible);
    };

    const handleClick = () => {
        toggleSettings();
    }

    return (
        <div className="settings-button-container">
            <IconButton className="settings-button" onClick={handleClick}>
                <img src={settingsIcon} alt="Settings Icon" className="icon"/>
            </IconButton>
            {isSettingsVisible && (
                <div className="settings-pop-up">
                    <SettingsPopUp
                        show={true} // or pass the state variable controlling visibility
                        handleClose={toggleSettings} // pass the function to close the popup
                        handleToggleChange={(setting) => console.log("Toggle change:", setting)} // handle toggle change
                        settings={{ lightDarkMode: false, highContrastMode: false, languageSelection: false }} // initial settings
                    />
                </div>
            )}
        </div>
    );
};

export default SettingsButton;