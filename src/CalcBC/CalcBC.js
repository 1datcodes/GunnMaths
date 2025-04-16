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
    text: "Unit 1: Limits and Continuity",
    url: "/calcBC/unit1",
    img: unit1,
  },
  {
    text: "Unit 2: Derivative",
    url: "/calcBC/unit2",
    img: unit2,
  },
  {
    text: "Unit 3: More Derivatives",
    url: "/calcBC/unit3",
    img: unit3,
  },
  {
    text: "Unit 4: Application of Derivatives",
    url: "/calcBC/unit4",
    img: unit4,
  },
  {
    text: "Unit 5: More Application",
    url: "/calcBC/unit5",
    img: unit5,
  },
  {
    text: "Unit 6: Integral",
    url: "/calcBC/unit6",
    img: unit6,
  },
  {
    text: "Differential Equations",
    url: "/calcBC/unit7",
    img: unit7,
  },
  {
    text: "Unit 8: Application of Integrals",
    url: "/calcBC/unit8",
    img: unit8,
  },
  {
    text: "Unit 9: Parametric and Polar",
    url: "/calcBC/unit9",
    img: unit9,
  },
  {
    text: "Unit 10: Sequences and Series",
    url: "/calcBC/unit10",
    img: unit10,
  },
  {
    text: "Midterms and Finals",
    url: "/calcBC/midterms",
    img: midterm,
  },
  {
    text: "AP Test Review",
    url: "/calcBC/apreview",
    img: apreview,
  }
];

function CalcBC() {
  return (
    <div className="Content">
      <Header headerTitle="CALCULUS BC" description="AP Calculus BC" />

      <div className="Units">
        <BackButton />
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
