// src/views/Top5InfoBox.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Top5InfoBox = ({ show, handleClose, places }) => {
    return (
        <div className={`fullscreen-overlay ${show ? 'show' : 'hide'}`}>
            <button className="close-btn" onClick={handleClose}>&times;</button>
            <div className="content">
                <ul className="list-group">
                    {places.map((place, index) => (
                        <li key={index} className="list-group-item">
                            {place}
                        </li>
                    ))}
                </ul>
                <button className="btn btn-success m-3" id="ShowInMapBtn">Show in map</button>
            </div>
        </div>
    );
};

export default Top5InfoBox;
