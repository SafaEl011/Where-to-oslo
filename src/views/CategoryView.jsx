import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CategoryList from "../components/shared/CategoryList";
import "../css/BottomNavbar.css"

const CategoryView = ({ show, handleClose }) => {
    return (
        <Modal
            className="categoryModal" // Add the custom class here
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CategoryList />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CategoryView;
