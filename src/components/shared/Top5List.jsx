import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Top5List = () => {

    const top5Places = [
        "Top 5 spisesteder",
        "Top 5 skjulte perler",
        "Top 5 billigste øl",
        "Top 5 bakst/kaker",
        "Top 5 Topp 5 sommersteder"
    ];

    return (
        <div className ="container">
            <div className="d-flex flex-column justify-content-between">
                {top5Places.map((Top5List, index) => (
                    <button key={index} className="btn btn-success m-2 pl-4 col-4">
                        {Top5List}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Top5List;