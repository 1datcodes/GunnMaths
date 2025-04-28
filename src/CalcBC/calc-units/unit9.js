import React from "react";
import Header from "../../Header/Header";
import BackButton from "../../BackButton";
import Accordion from "../../Accordion";
import Generator from "../../AIgen/Generator";

// import all files
import chpt9_review from "../documents/unit9/reviewsheets/blank/Ch 9 Review Sheet.pdf";
import chpt9_review_answer from "../documents/unit9/reviewsheets/key/Ch 9 Review Sheet key.pdf";

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
      </div>
    </div>
  );
}

export default unit9;
