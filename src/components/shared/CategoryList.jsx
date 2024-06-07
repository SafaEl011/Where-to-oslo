import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from "react-bootstrap";

//Icons for each category
import CafeIcon from "/public/images/icons/kafePin_4.svg"
import DrinkIcon from "/public/images/icons/drinkPin_4.svg"
import StoreIcon from "/public/images/icons/storePin_2.svg"
import ActivityIcon from "/public/images/icons/activityPin_4.svg"
import RestaurantIcon from "/public/images/icons/restaurants_4.svg"
import ToursIcon from "/public/images/icons/toursIcon.svg"

const CategoryList = () => {

    const categories = [
        { name: "Restaurants", icon: RestaurantIcon},
        { name: "Shopping", icon: StoreIcon },
        { name: "Cafes", icon: CafeIcon },
        { name: "Activities", icon: ActivityIcon },
        { name: "Bars", icon: DrinkIcon},
        { name: "Tours", icon: ToursIcon}
    ];

    const [switchStates, setSwitchStates] = useState(Array(categories.length).fill(false));

    const handleSwitchChange = (index) => {
        const newSwitchStates = [...switchStates];
        newSwitchStates[index] = !newSwitchStates[index];
        setSwitchStates(newSwitchStates);
    };


    return (
        <div className="categoryContainer mt-5">
            <div className="d-flex flex-wrap justify-content-center col-4">
                {categories.map((category, index) => (
                    <div key={index} className="btn btn-success m-2 ">
                        <img src={category.icon} alt={`${category.name} Icon`} className="categoryIcon" />
                        <span>{category.name}</span>
                        <Form.Check
                            type="switch"
                            id={`switch-${index}`}
                            className="ml-2"
                            checked={switchStates[index]}
                            onChange={() => handleSwitchChange(index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};


export default CategoryList;
