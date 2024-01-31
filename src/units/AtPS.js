import React from 'react';
import './AtPS.css';
import Header from '../Header';
import Accordion from '../Accordion';

// documents
import blankTest1 from '../documents/AtPS_Test1_Blank.pdf';
import rawTest1 from '../documents/AtPS_Test1_Raw.pdf';
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
                    {
                        text: "2013 Test 1 (Blanked)",
                        url: blankTest1
                    }
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
            <Header headerTitle="AtPS" description="Algebra through Problem Solving"/>

            <div className="Resources">
                <Accordion data={resources} />
            </div>
        </div>
    );
}

export default AtPS;