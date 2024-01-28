import React from 'react';
import home from '../images/home.png';
import './AtPS.css';

const baseURL = 'https://gunnmaths.org/analysis/atps/';

const resources = [
    {url: `${baseURL}tests`, alt: "Tests", text: "Tests"},
    {url: `${baseURL}quizzes`, alt: "Quizzes", text: "Quizzes"},
]

function AtPS() {
    return (
        <div className="AtPS">
            <header className="AtPS-header">
                <button className="Home-button" onClick={() => window.location.href="/"}>
                    <img src={home} alt="Home"/>
                </button>
                <div className="Description">
                    <h1 className="Title">AtPS</h1>
                    <p className="Description">Algebra through Problem Solving</p>
                </div>
                <button className="Search">Search</button>
            </header>

            <div className="Resources">
                <div className="icon-grid">
                    {resources.map((resource, index) => (
                        <div className="icons" key={index}>
                            <a href={resource.url} key={index}>
                                {resource.text}
                            </a>
                            <button onClick={() => window.location.href=resource.url}>{resource.text}</button>
                        </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default AtPS;