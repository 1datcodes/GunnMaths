import React from "react";
import Header from "../../Header/Header";
import BackButton from "../../BackButton";
import Accordion from "../../Accordion";
import Generator from "../../AIgen/Generator";

import review1_1 from "../documents/unit1/reviewsheets/blank/1_1_review.pdf";
import review1_2 from "../documents/unit1/reviewsheets/blank/1_2_review.pdf";
import review1_1_1 from "../documents/unit1/reviewsheets/blank/1_1_2_warmup.pdf";
import answer1_2 from "../documents/unit1/reviewsheets/answers/1_2_answer.pdf";
import test2019blank from "../documents/unit1/tests/blank/2019bctest.pdf";
import test2019key from "../documents/unit1/tests/key/2019bckey.pdf";

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
            url: test2019blank,
            text: "2019 BC Test",
          },
        ],
      },
      {
        url: "/tests/key",
        text: "Key",
        options: [
          {
            url: test2019key,
            text: "2019 BC Test Key",
          },
        ],
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
            url: review1_1,
            text: "1.1 Welcome Back to Calculus Review",
          },
          {
            url: review1_2,
            text: "1.2 Algebraic Limits Practice",
          },
          {
            url: review1_1_1,
            text: "1.1.2 Warmup",
          },
        ],
      },
      {
        url: "/reviewsheets/answers",
        text: "Answers",
        options: [
          {
            url: answer1_2,
            text: "1.2 Algebraic Limits Practice Answer",
          },
        ],
      },
    ],
  },
];

function unit1() {
  return (
    <div className="unit1">
      <Header headerTitle="Unit 1" description="Limits and Continuity" />
      <div className="Resources">
        <BackButton />
        <Accordion data={resources} />
      </div>
    </div>
  );
}

export default unit1;
