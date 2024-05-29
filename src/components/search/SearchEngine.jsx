import React, {useContext, useEffect, useState} from "react";
import PositionButton from "../position/PositionButton";
import SettingsButton from "../setting/SettingsButton";
import SearchButton from "./SearchButton";
import {map} from "react-bootstrap/ElementChildren";
import {useMap} from "../../views/MapView";



const SearchEngine = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [cafe, setCafe] = useState([]);
    const map = useMap();
    useEffect(() => {
        fetch("public/json/cafe.json").then((response) => response.json()).then((data) => {
            setCafe(data.features)
        })
    }, []);


    const handleSearchToggle = () => {
        setShowSearch(!showSearch);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);

        if(e.target.value){
            setSearchResults(
                cafe.filter((cafes) => cafes.properties.name.toLowerCase().includes(e.target.value.toLowerCase()))
            )
        } else {
            setSearchResults([])
        }


        /*simulator
        setSearchResults(['Result 1', 'Result 2', 'Result 3', 'Result 1', 'Result 2', 'Result 3'].filter(result =>
            result.toLowerCase().includes(e.target.value.toLowerCase())
        ));

         */
    };

    const handleSelect = (cafes) => {
        setSearchQuery(cafes.properties.name)
        setShowSearch(false)
        map.getView().animate({
            center: cafes.geometry.coordinates, zoom: 14,
        })
    }

    return (
        <div className="position-relative">
            <SearchButton onClick={handleSearchToggle} position={{ top: '20px', right: '20px'}}/>
            <PositionButton onClick={() => alert("Position button clicked!")} position={{ top: '80px', right: '20px'}}/>
            <SettingsButton onClick={() => alert("Settings button clicked!")} position={{ top: '140px', right: '20px'}}/>
            {showSearch && (
                <div
                    className="position-fixed"
                    style={{ top: '80px', right: '20px', width: '300px', zIndex: 1000}}>
                    <input
                        type="text"
                        className="form-control"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search..."
                    />
                    <div className="list-group">
                        {searchResults.map((cafes, index) => (
                            <div key={index} className="list-group-item"
                            onClick={() => handleSelect(cafes)}
                                 style={{cursor: "pointer"}}
                            >

                                {cafes.properties.name}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchEngine;