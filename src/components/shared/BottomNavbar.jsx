import React from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const BottomNavbar = () => {
    return (
        <nav className="navbar fixed-bottom navbar-light bg-light">
            <div className="container-fluid d-flex justify-content-around">
                <a href="http://localhost:5173/categories">
                    <img src="/Frame_11.png" alt="Clickable image"/>
                </a>
                <a href="http://localhost:5173/top5">
                    <img src="/Group_27.png" alt="Clickable image"/>
                </a>
            </div>
        </nav>
    )
}

export default BottomNavbar;