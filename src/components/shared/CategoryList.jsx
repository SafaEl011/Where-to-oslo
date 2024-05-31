import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "/public/images/icons/kafePin_4.svg"


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
        <div className ="categoryContainer mt-5">
            <div className="d-flex flex-wrap justify-content-around">
                {categories.map((category, index) => (
                    <button key={index} className="btn btn-success m-2 col-4 ">
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
