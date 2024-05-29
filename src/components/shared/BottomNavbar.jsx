import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryView from "../../views/CategoryView";
import Button from "react-bootstrap/Button";

const BottomNavbar = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            <nav className="navbar fixed-bottom navbar-light bg-light">
                <div className="container-fluid d-flex justify-content-around">
                    <Button variant="primary" onClick={handleShow}>
                        Category
                    </Button>
                    <Link to="/top5" className="btn btn-primary">Top 5</Link>
                </div>
            </nav>
            <CategoryView show={showModal} handleClose={handleClose} />
        </>
    );
};

export default BottomNavbar;
