import React from 'react';
import Accordion from '../Accordion';
import home from '../images/home.png';
import './AtPS.css';

// documents
import blankTest1 from '../documents/atps1_blank.pdf';

const baseURL = 'https://gunnmaths.org/analysis/atps/';

const resources = [
    {
        url: `${baseURL}tests`, 
        alt: "Tests", 
        text: "Tests",
        options: 
        [
            {
                url: `${baseURL}tests/blanked`,
                alt: "Blanked",
                text: "Blanked",
                options:
                [
                    {
                        text: "Blank Test 1",
                        url: blankTest1
                    },
                    {
                        text: "Blank Test 2",
                        
                    }
                ]
            },
            {
                url: `${baseURL}tests/raw`,
                alt: "Raw",
                text: "Raw",
                options:
                [
                    {
                        text: "Raw Test 1"
                    },
                    {
                        text: "Raw Test 2"
                    }
                ]
            }
        ]
    },
    {
        url: `${baseURL}quizzes`, 
        alt: "Quizzes", 
        text: "Quizzes",
        options: 
        [
            {
                url: `${baseURL}quizzes/blanked`,
                alt: "Blanked",
                text: "Blanked",
                options:
                [
                    {
                        text: "Blank Quiz 1"
                    },
                    {
                        text: "Blank Quiz 2"
                    }
                ]
            },
            {
                url: `${baseURL}quizzes/raw`,
                alt: "Raw",
                text: "Raw",
                options:
                [
                    {
                        text: "Raw Quiz 1"
                    },
                    {
                        text: "Raw Quiz 2"
                    }
                ]
            }
        ]
    },
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
                <Accordion data={resources} />
            </div>
        </div>
    );
}

export default AtPS;