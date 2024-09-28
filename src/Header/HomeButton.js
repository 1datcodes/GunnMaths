import React from "react";
import "./HeaderButtons.css";
import home from "./header-images/home.png";

function HomeButton() {
  return (
    <div className="homeButton">
      <button onClick={() => (window.location.href = "/home")}>
        <img src={home} alt="Home" />
      </button>
    </div>
  );
}

export default HomeButton;
