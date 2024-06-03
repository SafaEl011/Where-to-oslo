import React from "react";
import { Modal, Form } from "react-bootstrap";

const SettingsPopUp = ({ show, handleClose, handleToggleChange, settings }) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            style={{
                position: "fixed",
                top: "41%",
                left: "20%"
            }}
        >
            <Modal.Header closeButton>
                <Modal.Title>Settings</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3">
                    <Form.Check
                        type="switch"
                        id="light-dark-mode"
                        label="Light/Dark Mode"
                        checked={settings.lightDarkMode}
                        onChange={() => handleToggleChange('lightDarkMode')}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check
                        type="switch"
                        id="high-contrast-mode"
                        label="High Contrast Mode"
                        checked={settings.highContrastMode}
                        onChange={() => handleToggleChange('highContrastMode')}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check
                        type="switch"
                        id="language-selection"
                        label="Language Selection"
                        checked={settings.languageSelection}
                        onChange={() => handleToggleChange('languageSelection')}
                    />
                </Form.Group>
            </Modal.Body>
        </Modal>
    );
};

export default SettingsPopUp;
