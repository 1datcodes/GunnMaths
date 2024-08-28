import React from 'react';
import './CalcBC.css';
import Header from '../Header/Header';

import DefAndApprox from './calc-units/Def-and-Approx';
import BackButton from '../BackButton';
import DefAndApproxjpg from './calc-images/DefandApprox.jpg';


const units = [
    {url: "calc/def-and-approx", img: DefAndApproxjpg, alt: "Definition and Approximation in Calculus", text: "Definition and Approximation in Calculus"}
  ];   

function CalcBC() {
    return (
        <div className="Content">
            <Header headerTitle="CALCULUS" description="AP Calc BC"/>
            
            <div className="Units">
                {/* <BackButton /> */}
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
}

export default CalcBC;