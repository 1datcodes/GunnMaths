import React from "react";
import "./CalcBC.css";
import Header from "../Header/Header";
import BackButton from "../BackButton";

const units = [];

function CalcBC() {
  return (
    <div className="Content">
      <Header headerTitle="CALCULUS BC" description="AP Calculus BC" />

      <div className="Units">
        <BackButton />
        <h2>Coming soon...</h2>
        <p><small>(It's never coming...)</small></p>
        <div className="icon-grid">
          {units.map((unit, index) => (
            <div className="units" key={index}>
              <a className="unitLink" href={unit.url}>
                <img src={unit.img} alt={unit.alt} />
              </a>
              <button onClick={() => (window.location.href = unit.url)}>
                {unit.text}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CalcBC;
