import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Analysis from './Analysis';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
