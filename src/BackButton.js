import React from "react";
import { useNavigate } from "react-router-dom";
import "./BackButton.css";

const back = "< Back";

function BackButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <button className="back-button" onClick={handleClick}>
      {back}
    </button>
  );
}

export default BackButton;
