import React, { useState, useEffect } from "react";
import "../css/Top5.css";
import "../css/BottomNavbar.css";

interface Top5ListProps {
    show: boolean;
    handleClose: () => void;
}

const top5Categories = [
    {
        name: "Top 5 bakst/kaker",
        items: [
            "Baker Nordby Tøyen",
            "Åpent Bakeri",
            "Grains",
            "Svingen Kolonial og Kafe",
        ],
    },
    {
        name: "Top 5 sommersteder",
        items: ["Kafe Celsius", "Bygdøy", "Svingen- Kolonial og Kafe"],
    },
    { name: "Top 5 spisesteder", items: ["Mamma pizza"] },
    {
        name: "Top 5 skjulte perler",
        items: ["Svingen Cafe", "Smia Galleri", "Stien ned fra Frognerparken"],
    },
    {
        name: "Top 5 koseligste øl",
        items: ["Schous Kjeller", "Frognerseteren", "Asylet", "Smia Galleri"],
    },
    {
        name: "Top 5 Søndagsturer",
        items: ["Kampen-Vålerenga", "Kvernerbyen-Svartdalsparken"],
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
                                        {category.name}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <button
                            className="btn btn-success"
                            onClick={() => setSelectedCategory(null)}
                        >
                            Back
                        </button>
                        <h2>{top5Categories[selectedCategory].name}</h2>
                        <ul>
                            {top5Categories[selectedCategory].items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
};