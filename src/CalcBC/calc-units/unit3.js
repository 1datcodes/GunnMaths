import React from "react";
import Header from "../../Header/Header";
import BackButton from "../../BackButton";
import Accordion from "../../Accordion";
import Generator from "../../AIgen/Generator";

import review3_4 from "../documents/unit3/reviewsheets/blank/3_4_chain_rule_practice.pdf";
import review3_4_2 from "../documents/unit3/reviewsheets/blank/3_4_log-o-rama.pdf";
import review3_5 from "../documents/unit3/reviewsheets/blank/3_5_motion_practice.pdf";
import review_chainrulechallenge from "../documents/unit3/reviewsheets/blank/Chain_Rule_challenge.pdf";
import reviewc1_c3 from "../documents/unit3/reviewsheets/blank/Chap1-3_Review.pdf";
import review_tangentlinechallenge from "../documents/unit3/reviewsheets/blank/Tangent_Line_challenge.pdf";
import reviewanswer_3_4 from "../documents/unit3/reviewsheets/key/3_4_chain_rule_practice_KEY.pdf";
import reviewanswer_3_4_2 from "../documents/unit3/reviewsheets/key/3_4_log-o-rama_KEY.pdf";
import reviewanswer_3_5 from "../documents/unit3/reviewsheets/key/3_5_motion_practice_KEY.pdf";
import reviewanswer_chainrulechallenge from "../documents/unit3/reviewsheets/key/Chain_Rule_challenge_KEY.pdf";
import reviewanswer_c1_c3 from "../documents/unit3/reviewsheets/key/Chap1-3_Review_KEY.pdf";
import reviewanswer_tangentlinechallenge from "../documents/unit3/reviewsheets/key/tanlineAsolutions.JPG";
import reviewanswer_tangentlinechallenge2 from "../documents/unit3/reviewsheets/key/TanlinesBsolutions.jpeg";

import test2014blank from "../documents/unit3/tests/blank/Chap1-3_Test_2014.pdf";
import test2014key from "../documents/unit3/tests/key/Chap1-3_Test_2014_key.pdf";

const resources = [
  {
    url: "/tests",
    text: "Tests",
    options: [
      {
        url: "/tests/blanked",
        text: "Blanked",
        options: [
          {
            url: test2014blank,
            text: "2014 Test (Blanked)",
          },
        ],
      },
      {
        url: "/tests/answers",
        text: "Answers",
        options: [
          {
            url: test2014key,
            text: "2014 Test (Key)",
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
            url: review3_4,
            text: "3.4 Chain Rule Practice",
          },
          {
            url: review3_4_2,
            text: "3.4 Log-o-Rama",
          },
          {
            url: review3_5,
            text: "3.5 Motion Practice",
          },
          {
            url: review_chainrulechallenge,
            text: "Chain Rule Challenge",
          },
          {
            url: reviewc1_c3,
            text: "Chapter 1-3 Review",
          },
          {
            url: review_tangentlinechallenge,
            text: "Tangent Line Challenge",
          },
        ],
      },
      {
        url: "/reviewsheets/answers",
        text: "Answers",
        options: [
          {
            url: reviewanswer_3_4,
            text: "3.4 Chain Rule Practice Answer",
          },
          {
            url: reviewanswer_3_4_2,
            text: "3.4 Log-o-Rama Answer",
          },
          {
            url: reviewanswer_3_5,
            text: "3.5 Motion Practice Answer",
          },
          {
            url: reviewanswer_chainrulechallenge,
            text: "Chain Rule Challenge Answer",
          },
          {
            url: reviewanswer_c1_c3,
            text: "Chapter 1-3 Review Answer",
          },
          {
            url: reviewanswer_tangentlinechallenge,
            text: "Tangent Line Challenge Answer A",
          },
          {
            url: reviewanswer_tangentlinechallenge2,
            text: "Tangent Line Challenge Answer B",
          },
        ],
      },
    ],
  },
];

function unit3() {
  return (
    <div className="unit3">
      <Header headerTitle="Unit 3" description="More Derivatives" />
      <div className="Resources">
        <BackButton />
        <Accordion data={resources} />
      </div>
    </div>
  );
}

export default unit3;
