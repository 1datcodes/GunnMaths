import React from "react";
import "./Header.css";
import HomeButton from "./HomeButton";
import SearchButton from "./SearchButton";

function Header({ headerTitle, description }) {
  return (
    <header className="Header">
        <HomeButton />
        <div className="Texts">
            <h1 className="Title">{headerTitle}</h1>
            <p className="Description">{description}</p>
        </div>
        <SearchButton />
    </header>
  );
}

export default Header;