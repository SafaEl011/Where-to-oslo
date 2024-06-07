// src/views/Top5View.js
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Top5List from "../components/shared/Top5List";
import Top5InfoBox from "../components/shared/Top5InfoBox";
import "../css/BottomNavbar.css"

const Top5View = ({ show, handleClose }) => {
    const [showTop5Overlay, setShowTop5Overlay] = useState(show);
    const [showInfoBox, setShowInfoBox] = useState(false);
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        setShowTop5Overlay(show);
    }, [show]);

    const handleShowPlaces = (placesList) => {
        setPlaces(placesList);
        setShowTop5Overlay(false);
        setShowInfoBox(true);
    };

    const handleCloseInfoBox = () => {
        setShowInfoBox(false);
        setShowTop5Overlay(true);
    };

    const handleTop5ButtonClick = (placeType) => {
        switch (placeType) {
            case "Topp 5 spisesteder":
                handleShowPlaces(["Mamma pizza"]);
                break;
            case "Topp 5 skjulte perler":
                handleShowPlaces(["Svingen Cafe", "Smia galleri", "Stien ned fra Frognerparken"]);
                break;
            case "Topp 5 billigste øl":
                handleShowPlaces(["Mastermind", "Cuba Parken"]);
                break;
            case "Topp 5 bakst/kaker":
                handleShowPlaces(["Baker nordby Tøyen", "Åpent Bakeri", "Grains", "Svingen Kolonial og Kafe"]);
                break;
            case "Topp 5 sommersteder":
                handleShowPlaces(["Kafe Celsius", "Bygdøy", "Svingen- Kolonial og Kafe"]);
                break;
            default:
                handleShowPlaces([]);
                break;
        }
    };

    return (
        <>
            <div className={`fullscreen-overlay ${showTop5Overlay ? 'show' : 'hide'}`}>
                <button className="close-btn" onClick={handleClose}>&times;</button>
                <div className="content">
                    <h2>Top 5</h2>
                    <Top5List onButtonClick={handleTop5ButtonClick} />
                </div>
            </div>
            <Top5InfoBox
                show={showInfoBox}
                handleClose={handleCloseInfoBox}
                places={places}
            />
        </>
    );
};

export default Top5View;
