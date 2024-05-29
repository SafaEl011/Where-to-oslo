import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const CategoryList = () => {

    const categories = [
        "Restaurants",
        "Shopping",
        "Cafes",
        "Activities",
        "Bars",
        "Favorites"
    ];

    return (
        <div className ="container mt-5">
            <h2> Categories </h2>
            <div className="d-flex flex-wrap">
                {categories.map((category, index) => (
                    <button key={index} className="btn btn-primary m-2">
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
