import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryList from "../components/shared/CategoryList";
import "../css/BottomNavbar.css";

const CategoryView = ({ show, handleClose }) => {
    return (
        <div className={`fullscreen-overlay ${show ? 'show' : 'hide'}`}>
            <button className="close-btn" onClick={handleClose}>&times;</button>
            <div className="content">
                <h2>Categories</h2>
                <CategoryList />
            </div>
        </div>
    );
};

export default CategoryView;
