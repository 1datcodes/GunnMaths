import React from 'react';
import './AtPS.css';
import Header from '../Header';
import Accordion from '../Accordion';

// documents
import blankTest1 from '../documents/AtPS_Test1_Blank.pdf';
import rawTest1 from '../documents/AtPS_Test1_Raw.pdf';
import blankQuiz1 from '../documents/AtPS_Quiz1_Blank.pdf';
import blankQuiz2 from '../documents/AtPS_Quiz2_Blank.pdf';
import blankQuiz3 from '../documents/AtPS_Quiz3_Blank.pdf';
import blankQuiz4 from '../documents/AtPS_Quiz4_Blank.pdf';
import rawQuiz1 from '../documents/AtPS_Quiz1_Raw.pdf';
import rawQuiz2 from '../documents/AtPS_Quiz2_Raw.pdf';
import rawQuiz3 from '../documents/AtPS_Quiz3_Raw.pdf';
import rawQuiz4 from '../documents/AtPS_Quiz4_Raw.pdf';

const resources = [
    {
        url: "/tests", 
        alt: "Tests", 
        text: "Tests",
        options: 
        [
            {
                url: "/tests/blanked",
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
                url: "/tests/raw",
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
        url: "/quizzes", 
        alt: "Quizzes", 
        text: "Quizzes",
        options: 
        [
            {
                url: "/quizzes/blanked",
                alt: "Blanked",
                text: "Blanked",
                options:
                [
                    {
                        text: "2013 AtPS Quiz 1 (Blanked)",
                        url: blankQuiz1
                    },
                    {
                        text: "2013 AtPS Quiz 2 (Blanked)",
                        url: blankQuiz2
                    },
                    {
                        text: "2022 AtPS Quiz 1 (Blanked)",
                        url: blankQuiz3
                    },
                    {
                        text: "2022 AtPS Quiz 2 (Blanked)",
                        url: blankQuiz4
                    }
                ]
            },
            {
                url: "/quizzes/raw",
                alt: "Raw",
                text: "Raw",
                options:
                [
                    {
                        text: "2013 AtPS Quiz 1 (Raw)",
                        url: rawQuiz1
                    },
                    {
                        text: "2013 AtPS Quiz 2 (Raw)",
                        url: rawQuiz2
                    },
                    {
                        text: "2022 AtPS Quiz 1 (Raw)",
                        url: rawQuiz3
                    },
                    {
                        text: "2022 AtPS Quiz 2 (Raw)",
                        url: rawQuiz4
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