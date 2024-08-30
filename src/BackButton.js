import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import RouteConfig from "./RouteConfig";
import "./BackButton.css";

function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    const currentPath = location.pathname;
    const parrentPath = RouteConfig[currentPath] || "/home";
    navigate(parrentPath);
  };

  return (
    <button className="back-button" onClick={handleClick}>
      {"< Back"}
    </button>
  );
}

export default BackButton;
