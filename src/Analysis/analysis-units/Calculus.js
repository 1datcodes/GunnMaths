import React from 'react';
import Header from '../../Header/Header';
import Accordion from '../../Accordion';
import BackButton from '../../BackButton';
import './Units.css';

// Files
// Tests
import rawTest1_2013 from '../documents/Calculus/2013_Test1_Raw.pdf';
import rawTest2_2013 from '../documents/Calculus/2013_Test2_Raw.pdf';

// Quizzes
import rawQuiz_2013 from '../documents/Calculus/Limits/2013_Quiz_Raw.pdf';
import rawQui1_2016 from '../documents/Calculus/Limits/2016_Quiz1_Raw.pdf';
import rawQuiz2_2016 from '../documents/Calculus/Limits/2016_Quiz2_Raw.pdf';
import rawQuiz3_2016 from '../documents/Calculus/Calc/2016_Quiz3_Raw.pdf';
import rawQuiz1_2018 from '../documents/Calculus/Limits/2018_Quiz1_Raw.pdf';
import rawQuiz2_2018 from '../documents/Calculus/Limits/2018_Quiz2_Raw.pdf';
import rawQuiz3_2018 from '../documents/Calculus/Limits/2018_Quiz3_Raw.pdf';
import rawQuiz4_2018 from '../documents/Calculus/Calc/2018_Quiz4_Raw.pdf';
import rawQuiz1_2021 from '../documents/Calculus/Limits/2021_Quiz1_Raw.pdf';
import rawQuiz2_2021 from '../documents/Calculus/Limits/2021_Quiz2_Raw.pdf';
import rawQuiz3_2021 from '../documents/Calculus/Calc/2021_Quiz3_Raw.pdf';
import rawQuiz1_2022 from '../documents/Calculus/Limits/2022_Quiz1_Raw.pdf';
import rawQuiz2_2022 from '../documents/Calculus/Limits/2022_Quiz2_Raw.pdf';
import rawQuiz3_2022 from '../documents/Calculus/Calc/2022_Quiz3_Raw.pdf';
import rawQuiz1_2023 from '../documents/Calculus/Limits/2023_Quiz1_Raw.pdf';
import rawQuiz2_2023 from '../documents/Calculus/Calc/2023_Quiz_Raw.pdf';

import blankQuiz1_2018 from '../documents/Calculus/Limits/2018_Quiz1_Blank.pdf';
import blankQuiz2_2018 from '../documents/Calculus/Limits/2018_Quiz2_Blank.pdf';
import blankQuiz3_2018 from '../documents/Calculus/Limits/2018_Quiz3_Blank.pdf';
import blankQuiz4_2018 from '../documents/Calculus/Calc/2018_Quiz4_Blank.pdf';
import blankQuiz1_2022 from '../documents/Calculus/Limits/2022_Quiz1_Blank.pdf';
import blankQuiz2_2022 from '../documents/Calculus/Limits/2022_Quiz2_Blank.pdf';
import blankQuiz3_2022 from '../documents/Calculus/Calc/2022_Quiz3_Blank.pdf';
import blankQuiz1_2023 from '../documents/Calculus/Limits/2023_Quiz1_Blank.pdf';
import blankQuiz2_2023 from '../documents/Calculus/Limits/2023_Quiz2_Blank.pdf';
import blankQuiz3_2023 from '../documents/Calculus/Calc/2023_Quiz_Blank.pdf';

const resources = [
    {
        url: "/tests",
        text: "Tests",
        options: [
            {
                url: "/tests/blanked",
                text: "Blanked",
                options: []
            },
            {
                url: "/tests/raw",
                text: "Raw",
                options: [
                    {
                        text: "2013 Test 1 (Raw)",
                        url: rawTest1_2013
                    },
                    {
                        text: "2013 Test 2 (Raw)",
                        url: rawTest2_2013
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
                        text: "2018 Limits Quiz 1 (Blank)",
                        url: blankQuiz1_2018
                    },
                    {
                        text: "2018 Limits Quiz 2 (Blank)",
                        url: blankQuiz2_2018
                    },
                    {
                        text: "2018 Limits Quiz 3 (Blank)",
                        url: blankQuiz3_2018
                    },
                    {
                        text: "2018 Calc Quiz 1 (Blank)",
                        url: blankQuiz4_2018
                    },
                    {
                        text: "2022 Limits Quiz 1 (Blank)",
                        url: blankQuiz1_2022
                    },
                    {
                        text: "2022 Limits Quiz 2 (Blank)",
                        url: blankQuiz2_2022
                    },
                    {
                        text: "2022 Calc Quiz 1 (Blank)",
                        url: blankQuiz3_2022
                    },
                    {
                        text: "2023 Limits Quiz 1 (Blank)",
                        url: blankQuiz1_2023
                    },
                    {
                        text: "2023 Limits Quiz 2 (Blank)",
                        url: blankQuiz2_2023
                    },
                    {
                        text: "2023 Calc Quiz 1 (Blank)",
                        url: blankQuiz3_2023
                    }
                ]
            },
            {
                url: "/quizzes/raw",
                text: "Raw",
                options: [
                    {
                        text: "2013 Limits Quiz (Raw)",
                        url: rawQuiz_2013
                    },
                    {
                        text: "2016 Limits Quiz 1 (Raw)",
                        url: rawQui1_2016
                    },
                    {
                        text: "2016 Limits Quiz 2 (Raw)",
                        url: rawQuiz2_2016
                    },
                    {
                        text: "2016 Calc Quiz 3 (Raw)",
                        url: rawQuiz3_2016
                    },
                    {
                        text: "2018 Limits Quiz 1 (Raw)",
                        url: rawQuiz1_2018
                    },
                    {
                        text: "2018 Limits Quiz 2 (Raw)",
                        url: rawQuiz2_2018
                    },
                    {
                        text: "2018 Limits Quiz 3 (Raw)",
                        url: rawQuiz3_2018
                    },
                    {
                        text: "2018 Calc Quiz 1 (Raw)",
                        url: rawQuiz4_2018
                    },
                    {
                        text: "2021 Limits Quiz 1 (Raw)",
                        url: rawQuiz1_2021
                    },
                    {
                        text: "2021 Limits Quiz 2 (Raw)",
                        url: rawQuiz2_2021
                    },
                    {
                        text: "2021 Calc Quiz 1 (Raw)",
                        url: rawQuiz3_2021
                    },
                    {
                        text: "2022 Limits Quiz 1 (Raw)",
                        url: rawQuiz1_2022
                    },
                    {
                        text: "2022 Limits Quiz 2 (Raw)",
                        url: rawQuiz2_2022
                    },
                    {
                        text: "2022 Calc Quiz 1 (Raw)",
                        url: rawQuiz3_2022
                    },
                    {
                        text: "2023 Limits Quiz 1 (Raw)",
                        url: rawQuiz1_2023
                    },
                    {
                        text: "2023 Calc Quiz (Raw)",
                        url: rawQuiz2_2023
                    }
                ]
            }
        ]
    }
];

function Calculus() {
    return (
        <div className="Calculus">
            <Header headerTitle="LIMITS + CALCULUS" description="Buchanan Book + Calculus Book Chapters 1~3"/>

            <div className="Resources">
                <BackButton />
                <Accordion data={resources} />
            </div>
        </div>
    );
}

export default Calculus;