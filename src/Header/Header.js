import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import HomeButton from "./HomeButton";
import Upload from "./UploadButton";

function Header({ headerTitle, description }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="Header">
      <div className={`Mobile-Menu ${menuOpen ? "Open" : "Close"}`}>
        <Link to="/" className="Mobile-Menu-Item">
          Home
        </Link>
        <Link to="" className="Mobile-Menu-Item">
          Upload Test
        </Link>
        <Link to="/about#top" className="Mobile-Menu-Item">
          About Us
        </Link>
        <Link to="/about#contact" className="Mobile-Menu-Item">
          Contact Us
        </Link>
        <Link to="/update" className="Mobile-Menu-Item">
          Update Log
        </Link>
      </div>
      
      <div className="Main-Header">
        <button className="Menu-Button" onClick={toggleMenu}>
          ☰
        </button>
        <HomeButton />
        <div className="Texts">
          <h1 className="Title">{headerTitle}</h1>
          <p className="Description">{description}</p>
        </div>
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
