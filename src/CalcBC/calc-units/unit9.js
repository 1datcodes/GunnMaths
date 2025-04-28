import React from "react";
import Header from "../../Header/Header";
import BackButton from "../../BackButton";
import Accordion from "../../Accordion";
import Generator from "../../AIgen/Generator";

// import all files
import chpt9_review from "../documents/unit9/reviewsheets/blank/Ch 9 Review Sheet.pdf";
import chpt9_review_answer from "../documents/unit9/reviewsheets/key/Ch 9 Review Sheet key.pdf";
import ch9_quiz_calc_2025 from "../documents/unit9/tests/blank/BC 9 Ch 9 quiz 2024-25 calc section.pdf";
import ch9_quiz_non_calc_2025 from "../documents/unit9/tests/blank/BC 9 CH 9 quiz 2024-25 non-calc portion.pdf";

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
            url: ch9_quiz_calc_2025,
            text: "Chapter 9 Quiz 2025 (Calc Section)",
          },
          {
            url: ch9_quiz_non_calc_2025,
            text: "Chapter 9 Quiz 2025 (Non-Calc Section)",
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
            url: chpt9_review,
            text: "Chapter 9 Review Sheet",
          },
        ],
      },
      {
        url: "/reviewsheets/answers",
        text: "Answers",
        options: [
          {
            url: chpt9_review_answer,
            text: "Chapter 9 Review Sheet Key",
          },
        ],
      },
    ],
  },
];

function unit9() {
  return (
    <div className="unit9">
      <Header headerTitle="Unit 9" description="Parametric and Polar" />
      <div className="Resources">
        <BackButton />
        <Accordion data={resources} />
        <Generator
          course="AP Calculus BC"
          unit="Parametric, Polar, and Vector Functions"
        />
      </div>
    </div>
  );
}

export default unit9;
