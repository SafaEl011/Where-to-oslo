import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const SearchPopUp = ({ show, handleClose, searchQuery, handleSearchChange, searchResults, handleSelect }) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            style={{
                position: "fixed",
                top: "15%",
                left: "20%"
            }}
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search"
                    />
                </Form.Group>
                <div className="list-group">
                    {searchResults.map((item, index) => (
                        <Button
                            key={index}
                            onClick={() => handleSelect(item)}
                            className="list-group-item list-group-item-action"
                        >
                            {item.properties.name}
                        </Button>
                    ))}
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default SearchPopUp;
