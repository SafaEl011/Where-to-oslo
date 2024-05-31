import React, {useState} from "react";
import settingsIcon from "/public/images/icons/settings.svg";
import "../../css/IconStyles.css"
import IconButton from "../IconButtons/IconButton";
import {toggleExpansion} from "../shared/ToggleExpansion";


const SettingsButton = () => {
    const [isSettingsVisible, setSettingsVisible] = useState(false);

    const toggleSettings = () => {
        console.log("Toggling settings");

        setSettingsVisible(!isSettingsVisible);
        toggleExpansion('settings-container');
    };
    console.log("Rendering SettingsButton");
    return (
        <div className="settings-button-container">
            <IconButton className="settings-button" onClick={toggleSettings}>
                <img src={settingsIcon} alt="Settings Icon" className="icon"/>
            </IconButton>
            <div className={`settings-container ${isSettingsVisible ? "expanded" : ""}`}>
                {isSettingsVisible && (
                    <div className="settings-content">
                        <button className="close-button" onClick={toggleSettings}>x</button>
                        <h6>Light/Dark mode <input type="checkbox"/></h6>
                        <h6>High contrast mode <input type="checkbox"/></h6>
                        <h6>Language selection</h6>
                    </div>
                )}
            </div>

        </div>

    )
}

export default SettingsButton;