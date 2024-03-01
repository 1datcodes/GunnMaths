import React from 'react';
import './Analysis.css';
import Header from '../Header/Header';
import BackButton from '../BackButton';

// import all images
import atps from './analysis-images/atps.png';
import probability from './analysis-images/probability.jpg';
import polar3d from './analysis-images/polar-3d.png';
import vector from './analysis-images/vector.png';
import growth from './analysis-images/growth.png';
import matrices from './analysis-images/matrices.png';
import gatm from './analysis-images/gatm.jpg';
import limit from './analysis-images/limit.png';
import calculus from './analysis-images/calculus.jpg';

const units = [
    {url: "analysis/atps", img: atps, alt: "AtPS", text: "AtPS"},
    {url: "analysis/probability", img: probability, alt: "Probability", text: "Probability"},
    {url: "analysis/polar", img: polar3d, alt: "Polar and 3D", text: "Polar and 3D"},
    {url: "analysis/vectors", img: vector, alt: "Vectors and Parametrics", text: "Vectors and Parametrics"},
    {url: "analysis/growth", img: growth, alt: "Growth", text: "Growth"},
    {url: "analysis/matrices", img: matrices, alt: "Matrices", text: "Matrices"},
    {url: "analysis/gatm", img: gatm, alt: "GAtM", text: "GAtM"},
    {url: "analysis/limits", img: limit, alt: "Limits", text: "Limits"},
    {url: "analysis/calculus", img: calculus, alt: "Calculus", text: "Calculus"}
  ];

function Analysis() {
    return (
        <div className="Content">
            <Header headerTitle="ANALYSIS" description="Analysis Honors"/>
            
            <div className="Units">
                <BackButton />
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