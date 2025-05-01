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
    <div className="back-button" onClick={handleClick}>
      <svg fill="#000000" height="1rem" width="1rem" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 386.242 386.242" xmlSpace="preserve" stroke="#000000" stroke-width="1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path id="Arrow_Back" d="M374.212,182.3H39.432l100.152-99.767c4.704-4.704,4.704-12.319,0-17.011 c-4.704-4.704-12.319-4.704-17.011,0L3.474,184.61c-4.632,4.632-4.632,12.379,0,17.011l119.1,119.1 c4.704,4.704,12.319,4.704,17.011,0c4.704-4.704,4.704-12.319,0-17.011L39.432,206.36h334.779c6.641,0,12.03-5.39,12.03-12.03 S380.852,182.3,374.212,182.3z"></path> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
    </div>
  );
}

export default BackButton;
