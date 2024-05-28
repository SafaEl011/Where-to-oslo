import React, {useState} from "react";
import './SearchButton.css';

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
        <div className="search-container">
            <button className="search-button" onClick={handleSearchToggle}>
                🔍 {/* Temporary icon */}
            </button>
            {showSearch && (
                <div className="search-box">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search..."
                    />
                    <div className="search-results">
                        {searchResults.map((result, index) => (
                            <div key={index} className="search-result">
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