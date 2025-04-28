import React from "react";
import Header from "../../Header/Header";
import BackButton from "../../BackButton";
import Accordion from "../../Accordion";
import Generator from "../../AIgen/Generator";

// import all files
import ftc_practice from "../documents/unit6/reviewsheets/blank/BC 6.3 FTC_practice.pdf";
import u_sub_practice from "../documents/unit6/reviewsheets/blank/BC 6.5 U-sub practice sheet.pdf";
import trig_integral from "../documents/unit6/reviewsheets/blank/Trigonometric Integrals skill builder.pdf";
import trig_substitution from "../documents/unit6/reviewsheets/blank/Trigonometric Substitution skill builder.pdf";

import ftc_practice_answer from "../documents/unit6/reviewsheets/key/BC 6.3 FTC_practice_answers.pdf";
import u_sub_practice_answer from "../documents/unit6/reviewsheets/key/BC 6.5 U-sub practice sheet answers.pdf";
import trig_integral_answer from "../documents/unit6/reviewsheets/key/Trigonometric Integrals skill builder - SOLUTIONS.pdf";
import trig_substitution_answer from "../documents/unit6/reviewsheets/key/Trigonometric Substitution skill builder - SOLUTIONS.pdf";
import unit6_frq from "../documents/unit6/reviewsheets/key/Unit 6 PC A2 and Student Practice FRQs key.pdf";

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
            url: ftc_practice,
            text: "FTC Practice",
          },
          {
            url: u_sub_practice,
            text: "U-Substitution Practice",
          },
          {
            url: trig_integral,
            text: "Trigonometric Integrals Skill Builder",
          },
          {
            url: trig_substitution,
            text: "Trigonometric Substitution Skill Builder",
          },
        ],
      },
      {
        url: "/reviewsheets/answers",
        text: "Answers",
        options: [
          {
            url: ftc_practice_answer,
            text: "FTC Practice Answers",
          },
          {
            url: u_sub_practice_answer,
            text: "U-Substitution Practice Answers",
          },
          {
            url: trig_integral_answer,
            text: "Trigonometric Integrals Skill Builder - SOLUTIONS",
          },
          {
            url: trig_substitution_answer,
            text: "Trigonometric Substitution Skill Builder - SOLUTIONS",
          },
          {
            url: unit6_frq,
            text: "Unit 6 FRQ Answers",
          },
        ],
      },
    ],
  },
];

function unit6() {
  return (
    <div className="unit6">
      <Header headerTitle="Unit 6" description="Integral" />
      <div className="Resources">
        <BackButton />
        <Accordion data={resources} />
        <Generator
          course="AP Calculus BC"
          unit="Integral, techniques of integration"
        />
      </div>
    </div>
  );
}

export default unit6;
