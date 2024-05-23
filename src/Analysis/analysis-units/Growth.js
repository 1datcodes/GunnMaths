import React from "react";
import Header from "../../Header/Header";
import Accordion from "../../Accordion";
import BackButton from "../../BackButton";
import './Units.css';

// Files
// Tests
// Quizzes
import blankQuiz_2018 from '../documents/Growth/2018_Quiz_Blank.pdf';

import rawQuiz_2013 from '../documents/Growth/2013_Quiz_Raw.pdf';
import rawQuiz_2016 from '../documents/Growth/2016_Quiz_Raw.pdf';
import rawQuiz_2018 from '../documents/Growth/2018_Quiz_Raw.pdf';
import rawQuiz_2019 from '../documents/Growth/2019_Quiz_Raw.pdf';
import rawQuiz_2023 from '../documents/Growth/2023_Quiz_Raw.pdf';

const resources = [
    {
        url: "/quizzes",
        text: "Quizzes",
        options: [
            {
                url: "/quizzes/blanked",
                text: "Blanked",
                options: [
                    {
                        text: "2018 Quiz (Blanked)",
                        url: blankQuiz_2018
                    }
                ]
            },
            {
                url: "/quizzes/raw",
                text: "Raw",
                options: [
                    {
                        text: "2013 Quiz (Raw)",
                        url: rawQuiz_2013
                    },
                    {
                        text: "2016 Quiz (Raw)",
                        url: rawQuiz_2016
                    },
                    {
                        text: "2018 Quiz (Raw)",
                        url: rawQuiz_2018
                    },
                    {
                        text: "2019 Quiz (Raw)",
                        url: rawQuiz_2019
                    },
                    {
                        text: "2023 Quiz (Raw)",
                        url: rawQuiz_2023
                    }
                ]
            }
        ]
    }
];

function Growth() {
    return (
        <div className="Growth">
            <Header headerTitle="GROWTH" description="Growth and Finance"/>

            <div className="Resources">
                <BackButton />
                <Accordion data={resources} />
            </div>
        </div>
    );
}

export default Growth;