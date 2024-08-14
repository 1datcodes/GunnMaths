import React from 'react';
import Header from '../../Header/Header';
import Accordion from '../../Accordion';
import BackButton from '../../BackButton';
import './Units.css';

// Files
// Tests
import rawTest_2013 from '../documents/GAtM/2013_Test_Raw.pdf';
import rawTest_2016 from '../documents/GAtM/2016_Test_Raw.pdf';
import rawTest_2018 from '../documents/GAtM/2018_Test_Raw.pdf';
import rawTest_2019 from '../documents/GAtM/2019_Test_Raw.pdf';
import rawTest_2021 from '../documents/GAtM/2021_Test_Raw.pdf';
import rawTest_2022 from '../documents/GAtM/2022_Test_Raw.pdf';
import rawTest_2023 from '../documents/GAtM/2023_Test_Raw.pdf';

import blankTest_2018 from '../documents/GAtM/2018_Test_Blank.pdf';
import blankTest_2022 from '../documents/GAtM/2022_Test_Blank.pdf';
import blankTest_2023 from '../documents/GAtM/2023_Test_Blank.pdf';

// Quizzes
import rawQuiz1_2013 from '../documents/GAtM/2013_Quiz1_Raw.pdf';
import rawQuiz2_2013 from '../documents/GAtM/2013_Quiz2_Raw.pdf';
import rawQuiz1_2016 from '../documents/GAtM/2016_Quiz1_Raw.pdf';
import rawQuiz2_2016 from '../documents/GAtM/2016_Quiz2_Raw.pdf';
import rawQuiz3_2016 from '../documents/GAtM/2016_Quiz3_Raw.pdf';
import rawQuiz1_2018 from '../documents/GAtM/2018_Quiz1_Raw.pdf';
import rawQuiz2_2018 from '../documents/GAtM/2018_Quiz2_Raw.pdf';
import rawQuiz3_2018 from '../documents/GAtM/2018_Quiz3_Raw.pdf';
import rawQuiz_2019 from '../documents/GAtM/2019_Quiz_Raw.pdf';
import rawQuiz1_2021 from '../documents/GAtM/2021_Quiz1_Raw.pdf';
import rawQuiz2_2021 from '../documents/GAtM/2021_Quiz2_Raw.pdf';
import rawQuiz1_2022 from '../documents/GAtM/2022_Quiz1_Raw.pdf';
import rawQuiz2_2022 from '../documents/GAtM/2022_Quiz2_Raw.pdf';
import rawQuiz_2023 from '../documents/GAtM/2023_Quiz_Raw.pdf';

import blankQuiz1_2018 from '../documents/GAtM/2018_Quiz1_Blank.pdf';
import blankQuiz2_2018 from '../documents/GAtM/2018_Quiz2_Blank.pdf';
import blankQuiz3_2018 from '../documents/GAtM/2018_Quiz3_Blank.pdf';
import blankQuiz1_2022 from '../documents/GAtM/2022_Quiz1_Blank.pdf';
import blankQuiz2_2022 from '../documents/GAtM/2022_Quiz2_Blank.pdf';
import blankQuiz_2023 from '../documents/GAtM/2023_Quiz_Blank.pdf';

const gatmTextBook = "https://gunn-gatm.github.io/";
const snapTool = "https://gunn-gatm.github.io/interactives/snaps";

const resources = [
    {
        url: "/tests",
        text: "Tests",
        options: [
            {
                url: "/tests/blanked",
                text: "Blanked",
                options: [
                    {
                        text: "2018 Test (Blank)",
                        url: blankTest_2018
                    },
                    {
                        text: "2022 Test (Blank)",
                        url: blankTest_2022
                    },
                    {
                        text: "2023 Test (Blank)",
                        url: blankTest_2023
                    }
                ]
            },
            {
                url: "/tests/raw",
                text: "Raw",
                options: [
                    {
                        text: "2013 Test (Raw)",
                        url: rawTest_2013
                    },
                    {
                        text: "2016 Test (Raw)",
                        url: rawTest_2016
                    },
                    {
                        text: "2018 Test (Raw)",
                        url: rawTest_2018
                    },
                    {
                        text: "2019 Test (Raw)",
                        url: rawTest_2019
                    },
                    {
                        text: "2021 Test (Raw)",
                        url: rawTest_2021
                    },
                    {
                        text: "2022 Test (Raw)",
                        url: rawTest_2022
                    },
                    {
                        text: "2023 Test (Raw)",
                        url: rawTest_2023
                    }
                ]
            }
        ]
    },
    {
        url: "/quizzes",
        text: "Quizzes",
        options: [
            {
                url: "/quizzes/blanked",
                text: "Blanked",
                options: [
                    {
                        text: "2018 Quiz 1 (Blank)",
                        url: blankQuiz1_2018
                    },
                    {
                        text: "2018 Quiz 2 (Blank)",
                        url: blankQuiz2_2018
                    },
                    {
                        text: "2018 Quiz 3 (Blank)",
                        url: blankQuiz3_2018
                    },
                    {
                        text: "2022 Quiz 1 (Blank)",
                        url: blankQuiz1_2022
                    },
                    {
                        text: "2022 Quiz 2 (Blank)",
                        url: blankQuiz2_2022
                    },
                    {
                        text: "2023 Quiz (Blank)",
                        url: blankQuiz_2023
                    }
                ]
            },
            {
                url: "/quizzes/raw",
                text: "Raw",
                options: [
                    {
                        text: "2013 Quiz 1 (Raw)",
                        url: rawQuiz1_2013
                    },
                    {
                        text: "2013 Quiz 2 (Raw)",
                        url: rawQuiz2_2013
                    },
                    {
                        text: "2016 Quiz 1 (Raw)",
                        url: rawQuiz1_2016
                    },
                    {
                        text: "2016 Quiz 2 (Raw)",
                        url: rawQuiz2_2016
                    },
                    {
                        text: "2016 Quiz 3 (Raw)",
                        url: rawQuiz3_2016
                    },
                    {
                        text: "2018 Quiz 1 (Raw)",
                        url: rawQuiz1_2018
                    },
                    {
                        text: "2018 Quiz 2 (Raw)",
                        url: rawQuiz2_2018
                    },
                    {
                        text: "2018 Quiz 3 (Raw)",
                        url: rawQuiz3_2018
                    },
                    {
                        text: "2019 Quiz (Raw)",
                        url: rawQuiz_2019
                    },
                    {
                        text: "2021 Quiz 1 (Raw)",
                        url: rawQuiz1_2021
                    },
                    {
                        text: "2021 Quiz 2 (Raw)",
                        url: rawQuiz2_2021
                    },
                    {
                        text: "2022 Quiz 1 (Raw)",
                        url: rawQuiz1_2022
                    },
                    {
                        text: "2022 Quiz 2 (Raw)",
                        url: rawQuiz2_2022
                    },
                    {
                        text: "2023 Quiz (Raw)",
                        url: rawQuiz_2023
                    }
                ]
            }
        ]
    },
    {
        url: "/other",
        text: "Other",
        options: [
        {
            url: "/textbook",
            text: "Textbook",
            options: [
                {
                    text: "GAtM Textbook",
                    url: gatmTextBook
                }
            ]
        },
        {
            url: "/snap",
            text: "It's a Snap! tool",
            options: [
                {
                    text: "Snap tool",
                    url: snapTool
                }
            ]
        }
        ]
    }
];

function GAtM() {
    return (
        <div className="GAtM">
            <Header headerTitle="GAtM" description="Geometric Approach to Matrices"/>

            <div className="Resources">
                <BackButton />
                <Accordion data={resources} />
            </div>
        </div>
    );
}

export default GAtM;
