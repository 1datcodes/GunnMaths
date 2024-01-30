import React from "react";
import "./HomeButton.css";

import home from "./images/home.png";

function HomeButton() {
    return (
        <div className="HomeButton">
        <button className="Home-button" onClick={() => window.location.href = "/"}>
            <img src={home} alt="Home" />
        </button>
        </div>
    );
}

export default HomeButton;