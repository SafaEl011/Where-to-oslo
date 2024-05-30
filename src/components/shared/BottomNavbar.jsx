import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryView from "../../views/CategoryView";
import Top5View from "../../views/Top5View";
import Button from "react-bootstrap/Button";
import "../../css/BottomNavbar.css"



const BottomNavbar = () => {
    const [showCategoryModal, setShowCategoryModal] = useState(false);
    const [showTop5Modal, setShowTop5Modal] = useState(false);

    //Dette er for Category knappen
    const handleClose = () => setShowCategoryModal(false);
    const handleShow = () => setShowCategoryModal(true);

    //Dette er for Top5 knappen
    const handleShowTop5 = () => setShowTop5Modal(true);
    const handleCloseTop5 = () => setShowTop5Modal(false);

    return (
        <>
            <nav className="navbar fixed-bottom navbar-light bg-light">
                <div className="container-fluid d-flex justify-content-around">
                    <Button variant="primary" className="categoryBtn" onClick={handleShow}>
                        <img src="/images/icons/categories.svg" alt="Categories Icon" className="CategoryBtnIcon"/>
                    </Button>
                    <Button variant="primary" className="top5Btn" onClick={handleShowTop5}>
                        <img src="/images/icons/Top5.svg" alt="Categories Icon" className="Top5BtnIcon"/>
                    </Button>
                </div>
            </nav>
            <CategoryView show={showCategoryModal} handleClose={handleClose} />
            <Top5View show={showTop5Modal} handleClose={handleCloseTop5} />
        </>
    );
};

export default BottomNavbar;
