import React from "react";
import "./CalcBC.css";
import Header from "../Header/Header";
import BackButton from "../BackButton";

// import all images
import unit1 from "./calc-images/limits.png";
import unit2 from "./calc-images/derivative.png";
import unit3 from "./calc-images/more-derivative.png";
import unit4 from "./calc-images/app-derivative.png";
import unit5 from "./calc-images/more-app-derivative.png";
import unit6 from "./calc-images/integral.png";
import unit7 from "./calc-images/diff-eq.png";
import unit8 from "./calc-images/app-int.png";
import unit9 from "./calc-images/param.png";
import unit10 from "./calc-images/series.png";
import midterm from "./calc-images/midterm.png";
import apreview from "./calc-images/apreview.png";

const units = [
  {
    text: "Limits and Continuity",
    url: "/calc-bc/unit1",
    img: unit1,
  },
  {
    text: "Derivative",
    url: "/calc-bc/unit2",
    img: unit2,
  },
  {
    text: "More Derivatives",
    url: "/calc-bc/unit3",
    img: unit3,
  },
  {
    text: "Application of Derivatives",
    url: "/calc-bc/unit4",
    img: unit4,
  },
  {
    text: "More Application",
    url: "/calc-bc/unit5",
    img: unit5,
  },
  {
    text: "Integral",
    url: "/calc-bc/unit6",
    img: unit6,
  },
  {
    text: "Differential Equations",
    url: "/calc-bc/unit7",
    img: unit7,
  },
  {
    text: "Application of Integrals",
    url: "/calc-bc/unit8",
    img: unit8,
  },
  {
    text: "Parametric and Polar",
    url: "/calc-bc/unit9",
    img: unit9,
  },
  {
    text: "Sequences and Series",
    url: "/calc-bc/unit10",
    img: unit10,
  },
  {
    text: "Midterms and Finals",
    url: "/calc-bc/midterms",
    img: midterm,
  },
  {
    text: "AP Test Review",
    url: "/calc-bc/apreview",
    img: apreview,
  },
];

function CalcBC() {
  return (
    <div className="Content">
      <Header headerTitle="CALCULUS BC" description="AP Calculus BC" />
      <div className="Units">
        <BackButton />
        <div className="quick-title">
          <h2>AP Calculus BC Resources</h2>
        </div>
        <div className="icon-grid">
          {units.map((unit, index) => (
            <div className="units" key={index}>
              <a className="unitLink" href={unit.url}>
                <div className="gradient-overlay">
                  <h1 className="unit-text">{unit.text}</h1>
                  <p className="unit-description">
                    {unit.text} Unit Resources
                  </p> 
                </div>
                <img className="coverimage" src={unit.img} alt={unit.alt} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CalcBC;
