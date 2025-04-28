import React from "react";
import Header from "../../Header/Header";
import BackButton from "../../BackButton";
import Accordion from "../../Accordion";
import Generator from "../../AIgen/Generator";

// import all files
import min_max_handout from "../documents/unit5/reviewsheets/blank/BC Calc 5.5 optimization min max handout.pdf";

import min_max_handout_answer from "../documents/unit5/reviewsheets/key/BC Calc 5.5 optimization min max handout - KEY.pdf";
import unit5_frq from "../documents/unit5/reviewsheets/key/Unit 5 Student Practice FRQs answers.pdf";

import ch5_quiz_2025 from "../documents/unit5/tests/blank/BC Ch 5 Quiz 2025.pdf";

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
            url: ch5_quiz_2025,
            text: "Chapter 5 Quiz 2025",
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
            url: min_max_handout,
            text: "Optimization Min Max Handout",
          },
        ],
      },
      {
        url: "/reviewsheets/answers",
        text: "Answers",
        options: [
          {
            url: min_max_handout_answer,
            text: "Optimization Min Max Handout Answer",
          },
          {
            url: unit5_frq,
            text: "Unit 5 FRQ Answers",
          },
        ],
      },
    ],
  },
];

function unit5() {
  return (
    <div className="unit5">
      <Header headerTitle="Unit 5" description="More Application" />
      <div className="Resources">
        <BackButton />
        <Accordion data={resources} />
        <Generator
          course="AP Calculus BC"
          unit="Analytic application of derivatives"
        />
      </div>
    </div>
  );
}

export default unit5;
