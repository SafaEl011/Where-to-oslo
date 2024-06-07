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
      <div className="d-flex flex-wrap justify-content-around">
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
