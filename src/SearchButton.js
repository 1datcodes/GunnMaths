import React from 'react';
import './SearchButton.css';

function SearchButton() {
    return (
        <button className="Search-button" onClick={() => console.log("Clicked")}>
            <div className="Search-button">
                <div className="magnifying-glass"></div>
            </div>
        </button>
    );
}

export default SearchButton;