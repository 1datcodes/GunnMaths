import React from "react";
import Header from "../../Header/Header";
import Accordion from "../../Accordion";
import BackButton from "../../BackButton";
import "./Units.css";

// Files
// Tests
import rawTest_2013 from "../documents/Matrices/2013_Test_Raw.pdf";
import rawTest_2016 from "../documents/Matrices/2016_Test_Raw.pdf";
import rawTest_2018 from "../documents/Matrices/2018_Test_Raw.pdf";
import rawTest_2019 from "../documents/Matrices/2019_Test_Raw.pdf";
import rawTest_2021 from "../documents/Matrices/2021_Test_Raw.pdf";
import rawTest_2022 from "../documents/Matrices/2022_Test_Raw.pdf";
import rawTest_2023 from "../documents/Matrices/2023_Test_Raw.pdf";

import blankTest_2018 from "../documents/Matrices/2018_Test_Blank.pdf";
import blankTest_2022 from "../documents/Matrices/2022_Test_Blank.pdf";
import blankTest_2023 from "../documents/Matrices/2023_Test_Blank.pdf";

// Quizzes
import rawQuiz_2013 from "../documents/Matrices/2013_Quiz_Raw.pdf";
import rawQuiz_2016 from "../documents/Matrices/2016_Quiz_Raw.pdf";
import rawQuiz_2018 from "../documents/Matrices/2018_Quiz_Raw.pdf";
import rawQuiz_2019 from "../documents/Matrices/2019_Quiz_Raw.pdf";
import rawQuiz_2021 from "../documents/Matrices/2021_Quiz_Raw.pdf";
import rawQuiz_2022 from "../documents/Matrices/2022_Quiz_Raw.pdf";
import rawQuiz_2023 from "../documents/Matrices/2023_Quiz_Raw.pdf";

import blankQuiz_2018 from "../documents/Matrices/2018_Quiz_Blank.pdf";
import blankQuiz_2022 from "../documents/Matrices/2022_Quiz_Blank.pdf";
import blankQuiz_2023 from "../documents/Matrices/2023_Quiz_Blank.pdf";

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
            url: blankTest_2018,
          },
          {
            text: "2022 Test (Blank)",
            url: blankTest_2022,
          },
          {
            text: "2023 Test (Blank)",
            url: blankTest_2023,
          },
        ],
      },
      {
        url: "/tests/raw",
        text: "Raw",
        options: [
          {
            text: "2013 Test (Raw)",
            url: rawTest_2013,
          },
          {
            text: "2016 Test (Raw)",
            url: rawTest_2016,
          },
          {
            text: "2018 Test (Raw)",
            url: rawTest_2018,
          },
          {
            text: "2019 Test (Raw)",
            url: rawTest_2019,
          },
          {
            text: "2021 Test (Raw)",
            url: rawTest_2021,
          },
          {
            text: "2022 Test (Raw)",
            url: rawTest_2022,
          },
          {
            text: "2023 Test (Raw)",
            url: rawTest_2023,
          },
        ],
      },
    ],
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
            text: "2018 Quiz (Blank)",
            url: blankQuiz_2018,
          },
          {
            text: "2022 Quiz (Blank)",
            url: blankQuiz_2022,
          },
          {
            text: "2023 Quiz (Blank)",
            url: blankQuiz_2023,
          },
        ],
      },
      {
        url: "/quizzes/raw",
        text: "Raw",
        options: [
          {
            text: "2013 Quiz (Raw)",
            url: rawQuiz_2013,
          },
          {
            text: "2016 Quiz (Raw)",
            url: rawQuiz_2016,
          },
          {
            text: "2018 Quiz (Raw)",
            url: rawQuiz_2018,
          },
          {
            text: "2019 Quiz (Raw)",
            url: rawQuiz_2019,
          },
          {
            text: "2021 Quiz (Raw)",
            url: rawQuiz_2021,
          },
          {
            text: "2022 Quiz (Raw)",
            url: rawQuiz_2022,
          },
          {
            text: "2023 Quiz (Raw)",
            url: rawQuiz_2023,
          },
        ],
      },
    ],
  },
];

function Matrices() {
  return (
    <div className="Matrices">
      <Header headerTitle="MATRICES" description="Matrices and Markov Chains" />

      <div className="Resources">
        <BackButton />
        <Accordion data={resources} />
      </div>
    </div>
  );
}

export default Matrices;
