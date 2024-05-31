import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Top5List from "../components/shared/Top5List";
import "../css/BottomNavbar.css"

const Top5View = ({ show, handleClose }) => {
    return (
        <Modal
            className="top5Modal" // Add the custom class here
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Top 5</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Top5List />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Top5View;
