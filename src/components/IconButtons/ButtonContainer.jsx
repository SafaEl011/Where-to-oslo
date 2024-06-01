import React from "react";

export const ButtonContainer = ({ children }) => {
    return (
        <div className="button-container position-absolute top-50 end-0 p-4 d-flex flex-column gap-5">
            {children}
        </div>
    );
};
