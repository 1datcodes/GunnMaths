import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import HomeButton from "./HomeButton";
import Upload from "./UploadButton";

function Header({ headerTitle, description }) {
  return (
    <header className="Header">
      <div className="Main-Header">
        <HomeButton />
        <div className="Texts">
          <h1 className="Title">{headerTitle}</h1>
          <p className="Description">{description}</p>
        </div>
        {/* Add an upload button */}
        <Upload />
      </div>
      <div className="Sub-Header">
        <div className="About-Page">
          <Link to="/about#top" className="About-Page">
            About Us
          </Link>
        </div>
        <div className="Contact-Page">
          <Link to="/about#contact" className="Contact-Page">
            Contact Us
          </Link>
        </div>
        <div className="Contact-Page">
          <Link to="/update" className="Update-Log">
            Update Log
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
