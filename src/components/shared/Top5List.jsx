import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Top5List = () => {
  const top5Places = [
    "Schous Kjeller",
    "Frognerseteren",
    "Asylet",
    "Smia Galleri",
    "Favorites",
  ];

  return (
    <div className="container mt-5">
      <div className="d-flex flex-wrap">
        {top5Places.map((Top5List, index) => (
          <button key={index} className="btn btn-primary m-2">
            {Top5List}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Top5List;
