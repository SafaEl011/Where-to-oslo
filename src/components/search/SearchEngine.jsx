import React, { useContext, useEffect, useState } from "react";
import PositionButton from "../position/PositionButton";
import SettingsButton from "../setting/SettingsButton";
import SearchButton from "./SearchButton";
import { map } from "react-bootstrap/ElementChildren";
import { useMap } from "../../views/MapView";

const SearchEngine = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // State to hold data from all JSON files
    const [allData, setAllData] = useState([]);

    const map = useMap();

    // Function to handle fetching data from multiple JSON files
    const fetchData = async (filePaths) => {
        const promises = filePaths.map(async (filePath) => {
            const response = await fetch(filePath);
            const data = await response.json();
            return data.features; // Assuming features holds cafe data in each file
        });

        const allFeatures = await Promise.all(promises);
        setAllData(allFeatures.flat()); // Combine features from all files
    };

    useEffect(() => {
        // Provide an array of file paths to the fetchData function
        fetchData(["/json/cafe.json", "/json/restaurants.json", "/json/drinks.json", "/json/store.json", "/json/activity.json"]);
    }, []);

    const handleSearchToggle = () => {
        setShowSearch(!showSearch);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);

        if (e.target.value) {
            setSearchResults(
                allData.filter((cafe) =>
                    cafe.properties.name.toLowerCase().includes(e.target.value.toLowerCase())
                )
            );
        } else {
            setSearchResults([]);
        }
    };

    const handleSelect = (cafe) => {
        setSearchQuery(cafe.properties.name);
        setShowSearch(false);
        map.getView().animate({
            center: cafe.geometry.coordinates,
            zoom: 18,
        });
    };

    return (
        <div className="position-relative">
            <SearchButton onClick={handleSearchToggle} position={{ top: '20px', right: '20px' }} />
            <PositionButton onClick={() => alert("Position button clicked!")} position={{ top: '80px', right: '20px' }} />
            <SettingsButton onClick={() => alert("Settings button clicked!")} position={{ top: '140px', right: '20px' }} />
            {showSearch && (
                <div
                    className="position-fixed"
                    style={{ top: '80px', right: '20px', width: '300px', zIndex: 1000 }}
                >
                    <input
                        type="text"
                        className="form-control"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search..."
                    />
                    <div className="list-group">
                        {searchResults.map((cafe, index) => (
                            <div key={index} className="list-group-item" onClick={() => handleSelect(cafe)} style={{ cursor: "pointer" }}>
                                {cafe.properties.name}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchEngine;
