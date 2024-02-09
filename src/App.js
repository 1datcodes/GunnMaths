import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Analysis from './Analysis';
import AtPS from './units/AtPS';
import Probability from './units/Probability';
import Polar from './units/Polar';
import Vectors from './units/Vectors';
import Growth from './units/Growth';
import Matrices from './units/Matrices';
import GAtM from './units/gatm';
import Limits from './units/Limits';
import Calculus from './units/Calculus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/analysis/atps" element={<AtPS />} />
        <Route path="/analysis/probability" element={<Probability />} />
        <Route path="/analysis/polar" element={<Polar />} />
        <Route path="/analysis/vectors" element={<Vectors />} />
        <Route path="/analysis/growth" element={<Growth />} />
        <Route path="/analysis/matrices" element={<Matrices />} />
        <Route path="/analysis/gatm" element={<GAtM />} />
        <Route path="/analysis/limits" element={<Limits />} />
        <Route path="/analysis/calculus" element={<Calculus />} />
      </Routes>
    </Router>
  );
}

export default App;
