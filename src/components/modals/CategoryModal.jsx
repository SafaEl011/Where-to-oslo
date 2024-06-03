import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CategoryList from "../CategoryList";
import "../../styles/IconStyles.css"

const CategoryModal = ({ show, handleClose }) => {
    return (
        <Modal
            className="categoryModal" // Add the custom class here
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Categories</Modal.Title>
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

export default CategoryModal;
