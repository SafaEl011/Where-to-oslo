import React, { useState, useEffect } from "react";
import "../css/Top5.css";
import "../css/BottomNavbar.css";

interface Top5ListProps {
    show: boolean;
    handleClose: () => void;
}

const top5Categories = [
    {
        name: "Top 5 pasteries/cakes",
        icon: "storePin_2.svg",
        items: [
            { name: "Baker Nordby Tøyen", description: "Great selection of pastries." },
            { name: "Åpent Bakeri", description: "Delicious bread and cakes." },
            { name: "Grains", description: "Healthy and tasty options." },
            { name: "Svingen Kolonial og Kafe", description: "Charming cafe with homemade treats." },
        ],
    },
    {
        name: "Top 5 places in summer",
        icon: "activityPin_4.svg",
        items: [
            { name: "Kafe Celsius", description: "This place is a 6/6!" },
            { name: "Bygdøy", description: "Perfect for summer outings." },
            { name: "Svingen- Kolonial og Kafe", description: "Lovely spot for a summer day." },
        ],
    },
    {
        name: "Top 5 places to eat",
        icon: "restaurants_4.svg",
        items: [
            { name: "Mamma pizza", description: "Best pizza in town." },
        ],
    },
    {
        name: "Top 5 hidden gems",
        icon: "kafePin_4.svg",
        items: [
            { name: "Svingen Cafe", description: "A hidden gem." },
            { name: "Smia Galleri", description: "Great atmosphere and art." },
            { name: "Stien ned fra Frognerparken", description: "Scenic walk with beautiful views." },
        ],
    },
    {
        name: "Top 5 cozy places with beer",
        icon: "beerPin.svg",
        items: [
            { name: "Schous Kjelleren", description: "Cozy and friendly." },
            { name: "Frognerseteren", description: "Amazing view with great beer." },
            { name: "Asylet", description: "Historic and charming." },
            { name: "Smia Galleri", description: "Art and beer together." },
        ],
    },
    {
        name: "Top 5 walks on a sunday",
        icon: "tripPin.svg",
        items: [
            { name: "Kampen-Vålerenga", description: "Lovely Sunday walk." },
            { name: "Kvernerbyen-Svartdalsparken", description: "Beautiful nature trail." },
        ],
    },
];

export const Top5List: React.FC<Top5ListProps> = ({ show, handleClose }) => {
    const [isOverlayVisible, setOverlayVisible] = useState(show);
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

    useEffect(() => {
        setOverlayVisible(show);
    }, [show]);

    const handleCloseOverlay = () => {
        setOverlayVisible(false);
        handleClose();
    };

    return (
        <div
            className={isOverlayVisible ? "overlay show" : "overlay hide"}
            onClick={handleCloseOverlay}
        >
            <div className="overlay-content" id="top5Overlay" onClick={(e) => e.stopPropagation()}>
                {selectedCategory === null ? (
                    <>
                        <button
                            className="btn btn-success close-button"
                            onClick={handleCloseOverlay}
                        >
                            x
                        </button>
                        <h2 className="top5-header">Top 5</h2>
                        <hr className="separator"></hr>
                        <div className="top5-list">
                            {top5Categories.map((category, index) => (
                                <div key={index} className="top5-item">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => setSelectedCategory(index)}
                                    >
                                        <img src={(`../WhereToOslo/images//${category.icon}`)} alt={category.name} className="icon" />
                                        {category.name}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="top5PlacesOverlay">
                        <button
                            className="back-Button"
                            onClick={() => setSelectedCategory(null)}
                        >
                            ⬅
                        </button>
                        <h2 className="top5-header">{top5Categories[selectedCategory].name}</h2>
                        <ul>
                            {top5Categories[selectedCategory].items.map((item, idx) => (
                                <li className="top5Results" key={idx}>
                                    <strong>{item.name}</strong>
                                    <p>{item.description}</p>
                                </li>
                            ))}
                        </ul>
                        <button className="seeInMapBtn">Show in map</button>
                    </div>
                )}
            </div>
        </div>
    );
};
