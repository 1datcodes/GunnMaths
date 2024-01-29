import React from 'react';
import Accordion from '../Accordion';
import home from '../images/home.png';
import './AtPS.css';

// documents
import rawTest1 from '../documents/AH1Test1-2013.pdf';
import blankQuiz1 from '../documents/atps1_blank.pdf';
import blankQuiz2 from '../documents/atps2_blank.pdf';
import rawQuiz1 from '../documents/atps1_raw.pdf';
import rawQuiz2 from '../documents/atps2_raw.pdf';

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
                    // {
                    //     text: "Blank Test 1",
                    // },
                    // {
                    //     text: "Blank Test 2",
                    // }
                ]
            },
            {
                url: `${baseURL}tests/raw`,
                alt: "Raw",
                text: "Raw",
                options:
                [
                    {
                        text: "2013 Test 1 (Raw)",
                        url: rawTest1
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
                        text: "2022 AtPS Quiz 1 (Blanked)",
                        url: blankQuiz1
                    },
                    {
                        text: "2022 AtPS Quiz 2 (Blanked)",
                        url: blankQuiz2
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
                        text: "2022 AtPS Quiz 1 (Raw)",
                        url: rawQuiz1
                    },
                    {
                        text: "2022 AtPS Quiz 2 (Raw)",
                        url: rawQuiz2
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