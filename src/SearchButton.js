import React from 'react';
import './SearchButton.css';
import magnifyingGlass from './images/SearchButton.png';

function SearchButton() {
    return (
        <button className="Search-button" onClick={() => console.log("Clicked")}>
            <div className="Search-button">
                <img className="Search-button-img" src={magnifyingGlass} alt="MagnifyingGlass"/>
            </div>
        </button>
    );
}

export default SearchButton;