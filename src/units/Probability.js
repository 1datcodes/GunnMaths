import React from "react";
import Header from "../Header";
import Accordion from "../Accordion";
import BackButton from "../BackButton";
import './Probability.css';

// Files
// Tests
import blankTest1 from "../documents/Probability/Probability_Test1_Blank.pdf";
import rawTest1 from "../documents/Probability/Probability_Test1_Raw.pdf";
// Quizzes
import blankQuiz1 from "../documents/Probability/Probability_Quiz1_Blank.pdf";
import blankQuiz2 from "../documents/Probability/Probability_Quiz2_Blank.pdf";
import blankQuiz3 from "../documents/Probability/Probability_Quiz3_Blank.pdf";
import rawQuiz1 from "../documents/Probability/Probability_Quiz1_Raw.pdf";
import rawQuiz2 from "../documents/Probability/Probability_Quiz2_Raw.pdf";
import rawQuiz3 from "../documents/Probability/Probability_Quiz3_Raw.pdf";

const resources = [
    {
        url: "/tests",
        alt: "Tests",
        text: "Tests",
        options: [
            {
                url: "/tests/blanked",
                text: "Blanked",
                options: [
                    {
                        text: "2013 Test 1 (Blanked)",
                        url: blankTest1
                    }
                ]
            },
            {
                url: "/tests/raw",
                text: "Raw",
                options: [
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
        options: [
            {
                url: "/quizzes/blanked",
                text: "Blanked",
                options: [
                    {
                        text: "2013 Quiz 1 (Blanked)",
                        url: blankQuiz1
                    },
                    {
                        text: "2022 Quiz 1 (Blanked)",
                        url: blankQuiz2
                    },
                    {
                        text: "2022 Quiz 2 (Blanked)",
                        url: blankQuiz3
                    }
                ]
            },
            {
                url: "/quizzes/raw",
                text: "Raw",
                options: [
                    {
                        text: "2013 Quiz 1 (Raw)",
                        url: rawQuiz1
                    },
                    {
                        text: "2022 Quiz 1 (Raw)",
                        url: rawQuiz2
                    },
                    {
                        text: "2022 Quiz 2 (Raw)",
                        url: rawQuiz3
                    }
                ]
            }
        ]
    }
];

function Probability() {
    return (
        <div className="Probability">
            <Header headerTitle="PROBABILITY" description="Permutations and Combinations"/>
            <div className="Resources">
                <BackButton />
                <Accordion data={resources} />
            </div>
        </div>
    );
}

export default Probability;