import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import HomeButton from "./HomeButton";
import Upload from "./UploadButton";

function Header() {
  return (
    <div className="Header">
      <div className="Left">
        <div className="HomeButton">
          <Link to="/">
            <HomeButton />
          </Link>
        </div>
        <div className="WebsiteTitle">
          <h1>Gunn Maths</h1>
        </div>
      </div>
      <div className="Right">
        <div className="Links">
          <p className="About" onClick={() => (window.location = "/about#top")}>
            About
          </p>
          <p
            className="Contact"
            onClick={() => (window.location = "/about#contact")}
          >
            Contact
          </p>
          <p className="Updates" onClick={() => (window.location = "/update")}>
            Updates
          </p>
        </div>
        <div className="Upload">
          <Upload />
        </div>
      </div>
    </div>
  );
}

export default Header;
