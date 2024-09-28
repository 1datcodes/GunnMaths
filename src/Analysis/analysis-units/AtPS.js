import React from "react";
import Header from "../../Header/Header";
import Accordion from "../../Accordion";
import BackButton from "../../BackButton";
import Generator from "../../AIgen/Generator";
import "./Units.css";

// Files
// Tests
import blankTest_2013 from "../documents/AtPS/2013_Test1_Blank.pdf";
import rawTest_2013 from "../documents/AtPS/2013_Test1_Raw.pdf";
// Quizzes
import blankQuiz1_2013 from "../documents/AtPS/2013_Quiz1_Blank.pdf";
import blankQuiz2_2013 from "../documents/AtPS/2013_Quiz2_Blank.pdf";
import blankQuiz1_2016 from "../documents/AtPS/2016_Quiz1_Blank.pdf";
import blankQuiz2_2016 from "../documents/AtPS/2016_Quiz2_Blank.pdf";
import blankQuiz1_2018 from "../documents/AtPS/2018_Quiz1_Blank.pdf";
import blankQuiz2_2018 from "../documents/AtPS/2018_Quiz2_Blank.pdf";
import blankQuiz1_2019 from "../documents/AtPS/2019_Quiz1_Blank.pdf";
import blankQuiz2_2019 from "../documents/AtPS/2019_Quiz2_Blank.pdf";
import blankQuiz1_2021 from "../documents/AtPS/2021_Quiz1_Blank.pdf";
import blankQuiz2_2021 from "../documents/AtPS/2021_Quiz2_Blank.pdf";
import blankQuiz1_2022 from "../documents/AtPS/2022_Quiz1_Blank.pdf";
import blankQuiz2_2022 from "../documents/AtPS/2022_Quiz2_Blank.pdf";
import blankQuiz1_2023 from "../documents/AtPS/2023_Quiz1_Blank.pdf";
import blankQuiz2_2023 from "../documents/AtPS/2023_Quiz2_Blank.pdf";

import rawQuiz1_2013 from "../documents/AtPS/2013_Quiz1_Raw.pdf";
import rawQuiz2_2013 from "../documents/AtPS/2013_Quiz2_Raw.pdf";
import rawQuiz1_2016 from "../documents/AtPS/2016_Quiz1_Raw.pdf";
import rawQuiz2_2016 from "../documents/AtPS/2016_Quiz2_Raw.pdf";
import rawQuiz1_2018 from "../documents/AtPS/2018_Quiz1_Raw.pdf";
import rawQuiz2_2018 from "../documents/AtPS/2018_Quiz2_Raw.pdf";
import rawQuiz1_2019 from "../documents/AtPS/2019_Quiz1_Raw.pdf";
import rawQuiz2_2019 from "../documents/AtPS/2019_Quiz2_Raw.pdf";
import rawQuiz1_2021 from "../documents/AtPS/2021_Quiz1_Raw.pdf";
import rawQuiz2_2021 from "../documents/AtPS/2021_Quiz2_Raw.pdf";
import rawQuiz1_2022 from "../documents/AtPS/2022_Quiz1_Raw.pdf";
import rawQuiz2_2022 from "../documents/AtPS/2022_Quiz2_Raw.pdf";
import rawQuiz1_2023 from "../documents/AtPS/2023_Quiz1_Raw.pdf";
import rawQuiz2_2023 from "../documents/AtPS/2023_Quiz2_Raw.pdf";

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
            text: "2013 Test 1 (Blanked)",
            url: blankTest_2013,
          },
        ],
      },
      {
        url: "/tests/raw",
        text: "Raw",
        options: [
          {
            text: "2013 Test 1 (Raw)",
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
            text: "2013 AtPS Quiz 1 (Blanked)",
            url: blankQuiz1_2013,
          },
          {
            text: "2013 AtPS Quiz 2 (Blanked)",
            url: blankQuiz2_2013,
          },
          {
            text: "2016 AtPS Quiz 1 (Blanked)",
            url: blankQuiz1_2016,
          },
          {
            text: "2016 AtPS Quiz 2 (Blanked)",
            url: blankQuiz2_2016,
          },
          {
            text: "2018 AtPS Quiz 1 (Blanked)",
            url: blankQuiz1_2018,
          },
          {
            text: "2018 AtPS Quiz 2 (Blanked)",
            url: blankQuiz2_2018,
          },
          {
            text: "2019 AtPS Quiz (Blanked)",
            url: blankQuiz1_2019,
          },
          {
            text: "2019 AtPS Quiz 2 (Blanked)",
            url: blankQuiz2_2019,
          },
          {
            text: "2021 AtPS Quiz 1 (Blanked)",
            url: blankQuiz1_2021,
          },
          {
            text: "2021 AtPS Quiz 2 (Blanked)",
            url: blankQuiz2_2021,
          },
          {
            text: "2022 AtPS Quiz 1 (Blanked)",
            url: blankQuiz1_2022,
          },
          {
            text: "2022 AtPS Quiz 2 (Blanked)",
            url: blankQuiz2_2022,
          },
          {
            text: "2023 AtPS Quiz 1 (Blanked)",
            url: blankQuiz1_2023,
          },
          {
            text: "2023 AtPS Quiz 2 (Blanked)",
            url: blankQuiz2_2023,
          },
        ],
      },
      {
        url: "/quizzes/raw",
        text: "Raw",
        options: [
          {
            text: "2013 AtPS Quiz 1 (Raw)",
            url: rawQuiz1_2013,
          },
          {
            text: "2013 AtPS Quiz 2 (Raw)",
            url: rawQuiz2_2013,
          },
          {
            text: "2016 AtPS Quiz 1 (Raw)",
            url: rawQuiz1_2016,
          },
          {
            text: "2016 AtPS Quiz 2 (Raw)",
            url: rawQuiz2_2016,
          },
          {
            text: "2018 AtPS Quiz 1 (Raw)",
            url: rawQuiz1_2018,
          },
          {
            text: "2018 AtPS Quiz 2 (Raw)",
            url: rawQuiz2_2018,
          },
          {
            text: "2019 AtPS Quiz 1 (Raw)",
            url: rawQuiz1_2019,
          },
          {
            text: "2019 AtPS Quiz 2 (Raw)",
            url: rawQuiz2_2019,
          },
          {
            text: "2021 AtPS Quiz 1 (Raw)",
            url: rawQuiz1_2021,
          },
          {
            text: "2021 AtPS Quiz 2 (Raw)",
            url: rawQuiz2_2021,
          },
          {
            text: "2022 AtPS Quiz 1 (Raw)",
            url: rawQuiz1_2022,
          },
          {
            text: "2022 AtPS Quiz 2 (Raw)",
            url: rawQuiz2_2022,
          },
          {
            text: "2023 AtPS Quiz 1 (Raw)",
            url: rawQuiz1_2023,
          },
          {
            text: "2023 AtPS Quiz 2 (Raw)",
            url: rawQuiz2_2023,
          },
        ],
      },
    ],
  },
];

function AtPS() {
  return (
    <div className="AtPS">
      <Header
        headerTitle="AtPS"
        description="Algebra through Problem Solving"
      />
      <div className="Resources">
        <BackButton />
        <Accordion data={resources} />
        <Generator course="pre-calculus" unit="Algebra Through Problem Solving: Pascal's triangle, binomial theorem, fibonacci numbers, etc." />
      </div>
    </div>
  );
}

export default AtPS;
