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

import unit1_4_exam_2025 from "../documents/Midterms/midterm1/test/blank/BC Ch 1-4 exam MC.pdf";
import ch1_3_test_2014 from "../documents/Midterms/midterm1/test/blank/Chap1-3_Test_2014.pdf";
import ch1_3_test_2014_answer from "../documents/Midterms/midterm1/test/key/Chap1-3_Test_2014_key.pdf";

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
          {
            url: unit1_4_exam_2025,
            text: "Unit 1-4 Exam (MC)",
          },
          {
            url: ch1_3_test_2014,
            text: "Ch 1-3 Test 2014",
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
          {
            url: ch1_3_test_2014_answer,
            text: "Ch 1-3 Test 2014 Key",
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
        <Generator
          course="AP Calculus BC"
          unit="Midterms and finals"
        />
      </div>
    </div>
  );
}

export default Midterm;
