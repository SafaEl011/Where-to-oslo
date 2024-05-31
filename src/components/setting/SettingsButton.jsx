import React, {useEffect, useState} from "react";
import settingsIcon from "/public/images/icons/settings.svg";
import "../../css/IconStyles.css"
import IconButton from "../IconButtons/IconButton";
import {toggleExpansion} from "../shared/ToggleExpansion";
import Toggle from 'react-bootstrap-toggle';



const SettingsButton = () => {
    const [isSettingsVisible, setSettingsVisible] = useState(false);
    const [lightDarkMode, setLightDarkMode] = useState(true);
    const [highContrastMode, setHighContrastMode] = useState(true);
    const [languageSelection, setLanguageSelection] = useState(true);

    const toggleSettings = () => {
        setSettingsVisible(!isSettingsVisible);
        toggleExpansion('settings-container');
    };

    const handleClick = () => {
        toggleSettings();
        toggleExpansion('settings-container');
    }


    return (
        <div className="settings-button-container">
            <IconButton className="settings-button" onClick={handleClick}>
                <img src={settingsIcon} alt="Settings Icon" className="icon"/>
            </IconButton>
            <div className={`settings-container ${isSettingsVisible ? "expanded" : ""}`}>
                {isSettingsVisible && (
                    <div className="settings-content">
                        <button className="close-button" onClick={toggleSettings}>x</button>
                        <div className="settings-row">
                            <h6 className="setting-text">Light/Dark mode</h6>
                            <Toggle
                                className="setting-checkbox custom"
                                onClick={() => setLightDarkMode(!lightDarkMode)}
                                checked={lightDarkMode}
                                onstyle="success"
                                offstyle="danger"
                                size="sm"
                            />
                        </div>
                        <div className="settings-row">
                            <h6 className="setting-text">High contrast mode</h6>
                            <Toggle
                                className="setting-checkbox custom"
                                onClick={() => setHighContrastMode(!highContrastMode)}
                                checked={highContrastMode}
                                onstyle="success"
                                offstyle="danger"
                                size="sm"
                            />
                        </div>
                        <div className="settings-row">
                            <h6 className="setting-text">Language selection</h6>
                            <Toggle
                                className="setting-checkbox custom"
                                onClick={() => setLanguageSelection(!languageSelection)}
                                checked={languageSelection}
                                onstyle="success"
                                offstyle="danger"
                                size="sm"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SettingsButton;