import React, {useState} from "react";
import PositionButton from "../position/PositionButton";
import SettingsButton from "../setting/SettingsButton";
import SearchButton from "./SearchButton";

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