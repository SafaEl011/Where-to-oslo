// src/components/shared/Top5List.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Top5List = ({ onButtonClick }) => {
    const top5Places = [
        "Topp 5 spisesteder",
        "Topp 5 skjulte perler",
        "Topp 5 billigste øl",
        "Topp 5 bakst/kaker",
        "Topp 5 sommersteder"
    ];

    return (
        <div className="container">
            <div className="row">
                {top5Places.map((place, index) => (
                    <div key={index} className="col-12 mb-3">
                        <button className="btn btn-success w-100" onClick={() => onButtonClick(place)}>
                            {place}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Top5List;
