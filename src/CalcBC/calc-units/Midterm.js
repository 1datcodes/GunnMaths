import React from "react";
import Header from "../../Header/Header";
import BackButton from "../../BackButton";
import Accordion from "../../Accordion";
import Generator from "../../AIgen/Generator";

// import all files
import ab_1998_a from "../documents/Midterms/final1/reviewsheets/blank/1998 AB Section I Part A.pdf"
import ab_1998_b from "../documents/Midterms/final1/reviewsheets/blank/1998 AB Section I Part B.pdf"
import ab_mc_2003 from "../documents/Midterms/final1/reviewsheets/blank/2003 ab mc.pdf";
import integration_tech from "../documents/Midterms/final1/reviewsheets/blank/TB_BCTQIntegrationtechniques_Review_MC.pdf";

import ab_1998_answer from "../documents/Midterms/final1/reviewsheets/key/1998 AB Calc MC answers.pdf";
import ab_1998_explanation from "../documents/Midterms/final1/reviewsheets/key/1998 AB MC Key.pdf";
import ab_mc_2003_answer from "../documents/Midterms/final1/reviewsheets/key/2003 AB Calc MC answers.pdf";
import ab_mc_2003_explanation from "../documents/Midterms/final1/reviewsheets/key/2003 ab mc for review key.pdf";
import integration_tech_answer from "../documents/Midterms/final1/reviewsheets/key/SG_BCTQIntegrationtechniques_key.pdf";

import unit1_4_review from "../documents/Midterms/midterm1/reviewsheets/blank/Units 1x4 Review.pdf";
import worksheet_unit_4 from "../documents/Midterms/midterm1/reviewsheets/blank/Worksheet Unit 4 Review.pdf";

import unit1_4_answer from "../documents/Midterms/midterm1/reviewsheets/key/Units 1x4 Review - SOLUTIONS.pdf";
import worksheet_unit_4_answer from "../documents/Midterms/midterm1/reviewsheets/key/Worksheet Unit 4 Review - ANSWER KEY.pdf";

const resources = [
  {
    url: "/midterm",
    text: "Midterm",
    options: [
      {
        url: "/midterm/blanked",
        text: "Blanked",
        options: [
          {
            url: unit1_4_review,
            text: "Unit 1-4 Review (Circuit)",
          },
          {
            url: worksheet_unit_4,
            text: "Worksheet Unit 4 Review",
          },
        ],
      },
      {
        url: "/midterm/answers",
        text: "Answers",
        options: [
          {
            url: unit1_4_answer,
            text: "Unit 1-4 Review (Circuit) - SOLUTIONS",
          },
          {
            url: worksheet_unit_4_answer,
            text: "Worksheet Unit 4 Review - ANSWER KEY",
          },
        ],
      },
    ],
  },
  {
    url: "/final",
    text: "Final",
    options: [
      {
        url: "/final/blanked",
        text: "Blanked",
        options: [
          {
            url: ab_1998_a,
            text: "1998 AB Section I Part A",
          },
          {
            url: ab_1998_b,
            text: "1998 AB Section I Part B",
          },
          {
            url: ab_mc_2003,
            text: "2003 AB MC",
          },
          {
            url: integration_tech,
            text: "Integration Techniques Review MC",
          },
        ],
      },
      {
        url: "/final/answers",
        text: "Answers",
        options: [
          {
            url: ab_1998_answer,
            text: "1998 AB Calc MC answers",
          },
          {
            url: ab_1998_explanation,
            text: "1998 AB MC Key",
          },
          {
            url: ab_mc_2003_answer,
            text: "2003 AB Calc MC answers",
          },
          {
            url: ab_mc_2003_explanation,
            text: "2003 AB MC for review key",
          },
          {
            url: integration_tech_answer,
            text: "Integration Techniques Review MC Key",
          },
        ],
      },
    ],
  },
];

function Midterm() {
  return (
    <div className="Midterm">
      <Header headerTitle="Midterm" description="Midterms" />
      <div className="Resources">
        <BackButton />
        <Accordion data={resources} />
      </div>
    </div>
  );
}

export default Midterm;
