import React, { useState, useEffect, useRef } from "react";
import "../css/Top5.css";
import "../css/BottomNavbar.css";
import { ShowPinsButton } from "./showTop5Location";

interface Top5ListProps {
    show: boolean;
    handleClose: () => void;
}

export type Top5CategoryType = "store" | "bar" | "restaurant" | "cafe" | "activity" | "hike";

export type Top5Item = {
    name: string;
    description: string;
    coordinates: [number, number];
    type: Top5CategoryType;
};

export type Top5Category = {
    name: string;
    items: Top5Item[];
};

const top5Categories: Top5Category[] = [
    {
        name: "Top 5 pastries/cakes",
        items: [
            { name: "Baker Nordby Tøyen", description: "Great selection of pastries.", coordinates: [10.775941726871055, 59.91512299311516], type: "cafe" },
            { name: "Åpent Bakeri", description: "Delicious bread and cakes.", coordinates: [10.737271184657118, 59.914487411502705], type: "cafe" },
            { name: "Grains", description: "Healthy and tasty options.", coordinates: [10.715832654450786, 59.93024275618359], type: "cafe" },
            { name: "Svingen Kolonial og Kafe", description: "Charming cafe with homemade treats.", coordinates: [10.77666349677681, 59.90130046600219], type: "cafe" },
        ],
    },
    {
        name: "Top 5 places in summer",
        items: [
            { name: "Kafe Celsius", description: "This place is a 6/6!", coordinates: [10.740322354449022, 59.910406159638676], type: "cafe" },
            { name: "Bygdøy", description: "Perfect for summer outings.", coordinates: [10.679318305340871, 59.912086619429836], type: "activity" },
            { name: "Svingen- Kolonial og Kafe", description: "Lovely spot for a summer day.", coordinates: [10.77666349677681, 59.90130046600219], type: "cafe" },
        ],
    },
    {
        name: "Top 5 places to eat",
        items: [
            { name: "Mamma pizza", description: "Best pizza in town.", coordinates: [10.74652173182837, 59.911194234363165], type: "restaurant" },
        ],
    },
    {
        name: "Top 5 hidden gems",
        items: [
            { name: "Svingen Kolonial og Kafe", description: "A hidden gem.", coordinates: [10.77666349677681, 59.90130046600219], type: "cafe" },
            { name: "Smia Galleri", description: "Great atmosphere and art.", coordinates: [10.78569481857125, 59.91005868258227], type: "bar" },
            { name: "Stien ned fra Frognerparken", description: "Scenic walk with beautiful views.", coordinates: [10.703559227464755, 59.92670289745729], type: "activity" },
        ],
    },
    {
        name: "Top 5 cozy places with beer",
        items: [
            { name: "Schous Kjelleren", description: "Cozy and friendly.", coordinates: [10.760463728836356, 59.91838888824651], type: "bar" },
            { name: "Frognerseteren", description: "Amazing view with great beer.", coordinates: [10.67858636534918, 59.980599683237706], type: "bar" },
            { name: "Asylet", description: "Historic and charming.", coordinates: [10.761010590485542, 59.91445938035087], type: "bar" },
            { name: "Smia Galleri", description: "Art and beer together.", coordinates: [10.78569481857125, 59.91005868258227], type: "bar" },
        ],
    },
    {
        name: "Top 5 walks on a Sunday",
        items: [
            { name: "Kampen-Vålerenga", description: "Lovely Sunday walk.", coordinates: [10.77922453744859, 59.9140995579135], type: "hike" },
            { name: "Kvernerbyen-Svartdalsparken", description: "Beautiful nature trail.", coordinates: [10.798584496777053, 59.904053814495484], type: "hike" },
        ],
    },
];

const getIconForType = (type: Top5CategoryType) => {
    switch (type) {
        case "store": return "storePin_2.svg";
        case "bar": return "beerPin.svg";
        case "restaurant": return "restaurants_4.svg";
        case "cafe": return "kafePin_4.svg";
        case "activity": return "activityPin_4.svg";
        case "hike": return "tripPin.svg";
        default: return "";
    }
};

const Top5List: React.FC<Top5ListProps> = ({ show, handleClose }) => {
    const [isOverlayVisible, setOverlayVisible] = useState(show);
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [showPins, setShowPins] = useState(false);
    const [selectedPlaces, setSelectedPlaces] = useState<Top5Item[]>([]);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setSelectedPlaces(top5Categories.flatMap(category => category.items));
        setOverlayVisible(show);
    }, [show]);

    const handleCloseOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
        if (overlayRef.current && !overlayRef.current.contains(e.target as Node)) {
            setOverlayVisible(false);
            handleClose();
        }
    };

    const handleShowInMap = () => {
        setShowPins(true);
    };

    return (
        <>
            {isOverlayVisible && <div className="blur-background" onClick={handleCloseOverlay} />}
            <div className={isOverlayVisible ? "overlay show" : "overlay hide"} onClick={handleCloseOverlay}>
                <div className="overlay-content" id="top5Overlay" ref={overlayRef} onClick={(e) => e.stopPropagation()}>
                    {selectedCategory === null ? (
                        <>
                            <button className="btn btn-success close-button" onClick={handleCloseOverlay}>
                                x
                            </button>
                            <h2 className="top5-header">Top 5</h2>
                            <hr className="separator"></hr>
                            <div className="top5-list">
                                {top5Categories.map((category, index) => (
                                    <div key={index} className="top5-item">
                                        <button className="btn btn-primary" onClick={() => setSelectedCategory(index)}>
                                            {category.name}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="top5PlacesOverlay">
                            <button className="back-Button" onClick={() => setSelectedCategory(null)}>
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
                            <button className="seeInMapBtn" onClick={handleShowInMap}>Show in map</button>
                            {showPins && <ShowPinsButton places={top5Categories[selectedCategory].items} />}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Top5List;
