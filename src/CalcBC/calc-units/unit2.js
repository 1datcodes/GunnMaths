import React from "react";
import Header from "../../Header/Header";
import BackButton from "../../BackButton";
import Accordion from "../../Accordion";
import Generator from "../../AIgen/Generator";

// import all files
import chpt2_quiz from "../documents/unit2/tests/blank/BC Ch 2 quiz 2025.pdf";

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
            url: chpt2_quiz,
            text: "Chapter 2 Quiz",
          },
        ],
      },
    ],
  },
  {
    url: "/reviewsheets",
    text: "Review Sheets",
    options: [],
  },
];

function unit2() {
  return (
    <div className="unit2">
      <Header headerTitle="Unit 2" description="Derivative" />
      <div className="Resources">
        <BackButton />
        <Accordion data={resources} />
        <Generator
          course="AP Calculus BC"
          unit="Derivative and its properties"
        />
      </div>
    </div>
  );
}

export default unit2;
