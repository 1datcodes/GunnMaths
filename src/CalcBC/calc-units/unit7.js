import React from "react";
import Header from "../../Header/Header";
import BackButton from "../../BackButton";
import Accordion from "../../Accordion";
import Generator from "../../AIgen/Generator";

// import all files
import diff_eq_handout from "../documents/unit7/reviewsheets/blank/BC 7.1 differential equations handout.pdf";
import chpt7_review from "../documents/unit7/reviewsheets/blank/Chapter7_Review_2020.pdf";

import diff_eq_handout_answer from "../documents/unit7/reviewsheets/key/BC 7.1 differential equations handout ANSWERS.pdf";
import chpt7_review_answer from "../documents/unit7/reviewsheets/key/Chap7_Review_2020_answers.pdf";

import ch7_quiz_2025 from "../documents/unit7/tests/blank/BC 7 quiz 2025.pdf";

const resources = [
  {
    url: "/tests",
    text: "Tests",
    options: [
      {
        url: "/tests/blank",
        text: "Blank",
        options: [
          {
            url: ch7_quiz_2025,
            text: "Chapter 7 Quiz 2025",
          },
        ],
      },
      {
        url: "/tests/key",
        text: "Key",
        options: [],
      },
    ],
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
            url: diff_eq_handout,
            text: "Differential Equations Handout",
          },
          {
            url: chpt7_review,
            text: "Chapter 7 Review",
          },
        ],
      },
      {
        url: "/reviewsheets/answers",
        text: "Answers",
        options: [
          {
            url: diff_eq_handout_answer,
            text: "Differential Equations Handout Answers",
          },
          {
            url: chpt7_review_answer,
            text: "Chapter 7 Review Answers",
          },
        ],
      },
    ],
  },
];

function unit7() {
  return (
    <div className="unit7">
      <Header headerTitle="Unit 7" description="Differential Equations" />
      <div className="Resources">
        <BackButton />
        <Accordion data={resources} />
        <Generator course="AP Calculus BC" unit="Differential Equations" />
      </div>
    </div>
  );
}

export default unit7;
