import React from "react";
import { Modal } from "react-bootstrap";

const SettingsPopUp = ({ show, handleClose, popupClassName }) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            className={`slide-in-modal ${popupClassName} custom-settings-popup`}
            backdropClassName="custom-backdrop"
        >
            <Modal.Header closeButton>
                <Modal.Title className="w-100">Settings</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="about-section mb-3">
                    <h3 className="fw-bold text-center m-4">About</h3>
                    <h6 className="fw-light text-center p-4">
                        Welcome to Where To Oslo, When you need to know where to go!
                    </h6>
                    <h6 className="fw-light mb-4 text-center p-4">
                        This application helps you find the best cafes, restaurants,
                        and activities that you might not find elsewhere.
                        Our goal is to make your search for great places easy and enjoyable.
                    </h6>
                    <h6 className="mb-0 text-center mt-5"><strong>Version:</strong> 1.0.0</h6>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default SettingsPopUp;
