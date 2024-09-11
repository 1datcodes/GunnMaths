import React from "react";
import Header from "../..//Header/Header";
import Accordion from "../../Accordion";
import BackButton from "../../BackButton";
import "./Units.css";

// Files
// Tests
import rawTest_2013 from "../documents/Vectors/2013_Test_Raw.pdf";

// Quizzes
import blankQuiz1_2022 from "../documents/Vectors/2022_Quiz1_Blank.pdf";
import blankQuiz2_2022 from "../documents/Vectors/2022_Quiz2_Blank.pdf";
import blankQuiz_2023 from "../documents/Vectors/2023_Quiz_Blank.pdf";

import rawQuiz1_2013 from "../documents/Vectors/2013_Quiz1_Raw.pdf";
import rawQuiz2_2013 from "../documents/Vectors/2013_Quiz2_Raw.pdf";
import rawQuiz1_2016 from "../documents/Vectors/2016_Quiz1_Raw.pdf";
import rawQuiz2_2016 from "../documents/Vectors/2016_Quiz2_Raw.pdf";
import rawQuiz1_2018 from "../documents/Vectors/2018_Quiz1_Raw.pdf";
import rawQuiz2_2018 from "../documents/Vectors/2018_Quiz2_Raw.pdf";
import rawQuiz_2019 from "../documents/Vectors/2019_Quiz_Raw.pdf";
import rawQuiz1_2021 from "../documents/Vectors/2021_Quiz1_Raw.pdf";
import rawQuiz2_2021 from "../documents/Vectors/2021_Quiz2_Raw.pdf";
import rawQuiz1_2022 from "../documents/Vectors/2022_Quiz1_Raw.pdf";
import rawQuiz2_2022 from "../documents/Vectors/2022_Quiz2_Raw.pdf";
import rawQuiz_2023 from "../documents/Vectors/2023_Quiz_Raw.pdf";

// AI generated questions
import Generator from "../../AIgen/Generator";

const resources = [
  {
    url: "/tests",
    text: "Tests",
    options: [
      {
        url: "/tests/blanked",
        text: "Blanked",
        options: [],
      },
      {
        url: "/tests/raw",
        text: "Raw",
        options: [
          {
            text: "2013 Test (Raw)",
            url: rawTest_2013,
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
            text: "2022 Quiz 1 (Blanked)",
            url: blankQuiz1_2022,
          },
          {
            text: "2022 Quiz 2 (Blanked)",
            url: blankQuiz2_2022,
          },
          {
            text: "2023 Quiz (Blanked)",
            url: blankQuiz_2023,
          },
        ],
      },
      {
        url: "/quizzes/raw",
        text: "Raw",
        options: [
          {
            text: "2013 Quiz 1 (Raw)",
            url: rawQuiz1_2013,
          },
          {
            text: "2013 Quiz 2 (Raw)",
            url: rawQuiz2_2013,
          },
          {
            text: "2016 Quiz 1 (Raw)",
            url: rawQuiz1_2016,
          },
          {
            text: "2016 Quiz 2 (Raw)",
            url: rawQuiz2_2016,
          },
          {
            text: "2018 Quiz 1 (Raw)",
            url: rawQuiz1_2018,
          },
          {
            text: "2018 Quiz 2 (Raw)",
            url: rawQuiz2_2018,
          },
          {
            text: "2019 Quiz (Raw)",
            url: rawQuiz_2019,
          },
          {
            text: "2021 Quiz 1 (Raw)",
            url: rawQuiz1_2021,
          },
          {
            text: "2021 Quiz 2 (Raw)",
            url: rawQuiz2_2021,
          },
          {
            text: "2022 Quiz 1 (Raw)",
            url: rawQuiz1_2022,
          },
          {
            text: "2022 Quiz 2 (Raw)",
            url: rawQuiz2_2022,
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

function Vectors() {
  return (
    <div className="Vectors">
      <Header
        headerTitle="VECTORS + PARAMETRICS"
        description="Vectors + Parametrics"
      />
      <div className="Resources">
        <BackButton />
        <Accordion data={resources} />
        <Generator course="analysis" unit="vector" />
      </div>
    </div>
  );
}

export default Vectors;
