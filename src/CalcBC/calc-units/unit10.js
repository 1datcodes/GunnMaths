import React from "react";
import Header from "../../Header/Header";
import BackButton from "../../BackButton";
import Accordion from "../../Accordion";
import Generator from "../../AIgen/Generator";

// import all files
import convergence_tests from "../documents/unit10/reviewsheets/blank/Convergence_Tests_MC_practice.pdf";
import FRQ_practice_1 from "../documents/unit10/reviewsheets/blank/FRQ Practice 1.pdf";
import FRQ_practice_2 from "../documents/unit10/reviewsheets/blank/FRQ Practice 2.pdf";

import convergence_tests_answer from "../documents/unit10/reviewsheets/key/Convergence_Tests_MC_practice key.pdf";
import FRQ_practice_1_answer from "../documents/unit10/reviewsheets/key/FRQ Practice 1 key.pdf";
import FRQ_practice_2_answer from "../documents/unit10/reviewsheets/key/FRQ Practice 2 Scoring.pdf";

const resources = [
  {
    url: "/tests",
    text: "Tests",
    options: [],
  },
  {
    url: "/reviewsheets",
    text: "Review Sheets",
    options: [
      {
        url: "/reviewsheets/blanked",
        text: "Blanked",
        options: [
          {
            url: convergence_tests,
            text: "Convergence Tests MC Practice",
          },
          {
            url: FRQ_practice_1,
            text: "FRQ Practice 1",
          },
          {
            url: FRQ_practice_2,
            text: "FRQ Practice 2",
          },
        ],
      },
      {
        url: "/reviewsheets/answers",
        text: "Answers",
        options: [
          {
            url: convergence_tests_answer,
            text: "Convergence Tests MC Practice Key",
          },
          {
            url: FRQ_practice_1_answer,
            text: "FRQ Practice 1 Key",
          },
          {
            url: FRQ_practice_2_answer,
            text: "FRQ Practice 2 Scoring",
          },
        ],
      },
    ],
  },
];

function unit10() {
  return (
    <div className="unit10">
      <Header headerTitle="Unit 10" description="Sequences and Series" />
      <div className="Resources">
        <BackButton />
        <Accordion data={resources} />
        <Generator
          course="AP Calculus BC"
          unit="Sequences and Series, Taylor and Maclaurin Series, Power Series"
        />
      </div>
    </div>
  );
}

export default unit10;
