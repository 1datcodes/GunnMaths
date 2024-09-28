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
