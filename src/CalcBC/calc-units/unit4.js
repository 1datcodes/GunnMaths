import React from "react";
import Header from "../../Header/Header";
import BackButton from "../../BackButton";
import Accordion from "../../Accordion";
import Generator from "../../AIgen/Generator";

// import all files
import related_rates_1 from "../documents/unit4/reviewsheets/blank/BC 4.2 Related Rates Practice I.pdf";
import related_rates_2 from "../documents/unit4/reviewsheets/blank/TR SB 4.4-4.5 - Related Rates Problems.pdf";

import related_rates_1_answer from "../documents/unit4/reviewsheets/key/BC 4.2 Related Rates Practice I ANSWERS.pdf";
import related_rates_2_answer from "../documents/unit4/reviewsheets/key/CED 4.4-4.5 - Related Rates Problems CYU key.pdf";
import unit4_frq from "../documents/unit4/reviewsheets/key/APC PC FRQs unit 4 (FL answers).pdf";

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
            url: related_rates_1,
            text: "Related Rates Practice I",
          },
          {
            url: related_rates_2,
            text: "Related Rates Problems",
          },
        ],
      },
      {
        url: "/reviewsheets/answers",
        text: "Answers",
        options: [
          {
            url: related_rates_1_answer,
            text: "Related Rates Practice I Answer",
          },
          {
            url: related_rates_2_answer,
            text: "Related Rates Problems Answer",
          },
          {
            url: unit4_frq,
            text: "Unit 4 FRQ Answers",
          },
        ],
      },
    ],
  },
];

function unit4() {
  return (
    <div className="unit4">
      <Header headerTitle="Unit 4" description="Application of Derivatives" />
      <div className="Resources">
        <BackButton />
        <Accordion data={resources} />
        <Generator
          course="AP Calculus BC"
          unit="Contextual Applications of Differentiation"
        />
      </div>
    </div>
  );
}

export default unit4;
