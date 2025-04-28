import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import HomePage from "./HomePage";
import Analysis from "./Analysis/Analysis";
import AtPS from "./Analysis/analysis-units/AtPS";
import Probability from "./Analysis/analysis-units/Probability";
import Polar from "./Analysis/analysis-units/Polar";
import Vectors from "./Analysis/analysis-units/Vectors";
import Growth from "./Analysis/analysis-units/Growth";
import Matrices from "./Analysis/analysis-units/Matrices";
import GAtM from "./Analysis/analysis-units/GAtM";
import Calculus from "./Analysis/analysis-units/Calculus";
import Midterms from "./Analysis/analysis-units/Midterms";
import About from "./Header/About";
import CalcBC from "./CalcBC/CalcBC";
import UpdateLog from "./Header/UpdateLog";
import CalcUnit1 from "./CalcBC/calc-units/unit1";
import CalcUnit2 from "./CalcBC/calc-units/unit2";
import CalcUnit3 from "./CalcBC/calc-units/unit3";
import CalcUnit4 from "./CalcBC/calc-units/unit4";
import CalcUnit5 from "./CalcBC/calc-units/unit5";
import CalcUnit6 from "./CalcBC/calc-units/unit6";
import CalcUnit7 from "./CalcBC/calc-units/unit7";
import CalcUnit8 from "./CalcBC/calc-units/unit8";
import CalcUnit9 from "./CalcBC/calc-units/unit9";
import CalcUnit10 from "./CalcBC/calc-units/unit10";
import CalcMidterm from "./CalcBC/calc-units/Midterm";
import CalcAPReview from "./CalcBC/calc-units/APReview";

// IMPORTANT: Update RouteConfig.js when creating new routes
//            or changing existing routes
const routeMap = {
  // Root Path
  "/": "HomePage",
  "/home": "HomePage",

  // First child path
  "/analysis": "Analysis",
  "/calc-bc": "CalcBC",
  "/about": "About",
  "/update": "UpdateLog",

  // Second child path
  "/analysis/atps": "AtPS",
  "/analysis/probability": "Probability",
  "/analysis/polar": "Polar",
  "/analysis/vectors": "Vectors",
  "/analysis/growth": "Growth",
  "/analysis/matrices": "Matrices",
  "/analysis/gatm": "GAtM",
  "/analysis/calculus": "Calculus",
  "/analysis/midterms": "Midterms",

  "/calc-bc/unit1": "CalcUnit1",
  "/calc-bc/unit2": "CalcUnit2",
  "/calc-bc/unit3": "CalcUnit3",
  "/calc-bc/unit4": "CalcUnit4",
  "/calc-bc/unit5": "CalcUnit5",
  "/calc-bc/unit6": "CalcUnit6",
  "/calc-bc/unit7": "CalcUnit7",
  "/calc-bc/unit8": "CalcUnit8",
  "/calc-bc/unit9": "CalcUnit9",
  "/calc-bc/unit10": "CalcUnit10",
  "/calc-bc/midterms": "CalcMidterm",
  "/calc-bc/apreview": "CalcAPReview",
};

const componentMap = {
  HomePage,
  Analysis,
  AtPS,
  Probability,
  Polar,
  Vectors,
  Growth,
  Matrices,
  GAtM,
  Calculus,
  Midterms,
  About,
  CalcBC,
  UpdateLog,
  CalcUnit1,
  CalcUnit2,
  CalcUnit3,
  CalcUnit4,
  CalcUnit5,
  CalcUnit6,
  CalcUnit7,
  CalcUnit8,
  CalcUnit9,
  CalcUnit10,
  CalcMidterm,
  CalcAPReview,
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        {Object.entries(routeMap).map(([path, component]) => (
          <Route
            key={path}
            path={path}
            element={React.createElement(componentMap[component])}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
