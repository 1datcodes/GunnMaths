import React from 'react';

// import all images
import atps from './images/atps.png';
import probability from './images/probability.jpg';
import polar3d from './images/polar-3d.png';
import vector from './images/vector.png';
import growth from './images/growth.png';
import matrices from './images/matrices.png';
import gatm from './images/gatm.jpg';
import limit from './images/limit.png';
import calculus from './images/calculus.jpg';
import home from './images/home.png';

import './Analysis.css';

const baseUrl = "http://www.gunnmaths.org/analysis/";

const units = [
    {url: `${baseUrl}atps`, img: atps, alt: "AtPS", text: "AtPS"},
    {url: `${baseUrl}probability`, img: probability, alt: "Probability", text: "Probability"},
    {url: `${baseUrl}polar`, img: polar3d, alt: "Polar and 3D", text: "Polar and 3D"},
    {url: `${baseUrl}vectors`, img: vector, alt: "Vectors and Parametrics", text: "Vectors and Parametrics"},
    {url: `${baseUrl}growth`, img: growth, alt: "Growth", text: "Growth"},
    {url: `${baseUrl}matrices`, img: matrices, alt: "Matrices", text: "Matrices"},
    {url: `${baseUrl}gatm`, img: gatm, alt: "GaTM", text: "GaTM"},
    {url: `${baseUrl}limits`, img: limit, alt: "Limits", text: "Limits"},
    {url: `${baseUrl}calculus`, img: calculus, alt: "Calculus", text: "Calculus"}
  ];

function Analysis() {
    return (
        <div className="Content">
            <header className="App-header">
                <button className="Menu-button" onClick={() => window.location.href = "/"} alt="Home">
                    <img src={home} alt="Home"/>
                </button>
                <h1 className="Title">ANALYSIS</h1>
                <button className="Search-button">
                    <div className="magnifying-glass"></div>
                </button>
            </header>

            <div className="Units">
                <div className="icon-grid">
                    {units.map((unit, index) => (
                    <div className="units" key={index}>
                        <a className="unitLink" href={unit.url}>
                            <img src={unit.img} alt={unit.alt}/>
                        </a>
                        <button onClick={() => window.location.href=unit.url}>{unit.text}</button>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Analysis;