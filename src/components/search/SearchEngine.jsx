import React, {useState} from "react";
import PositionButton from "../position/PositionButton";

const SearchEngine = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchToggle = () => {
        setShowSearch(!showSearch);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);

        // simulator
        setSearchResults(['Result 1', 'Result 2', 'Result 3', 'Result 1', 'Result 2', 'Result 3'].filter(result =>
            result.toLowerCase().includes(e.target.value.toLowerCase())
        ));
    };

    const handlePositionClick = () => {
        alert("Position button clicked!");
    };

    return (
        <div className="position-relative">
            <button
                className="btn btn-light rounded-circle position-fixed"
                style={{ top: '20px', right: '20px', zIndex: 1000}}
                onClick={handleSearchToggle}>
                🔍 {/* Temporary icon */}
            </button>
            <PositionButton onClick={handlePositionClick}/>
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
                        {searchResults.map((result, index) => (
                            <div key={index} className="list-group-item">
                                {result}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchEngine;