import React from "react";
import Header from "../../Header/Header";
import BackButton from "../../BackButton";
import Accordion from "../../Accordion";
import Generator from "../../AIgen/Generator";

import review3_4 from "../documents/unit3/reviewsheets/blank/3_4_chain_rule_practice.pdf";
import review3_4_2 from "../documents/unit3/reviewsheets/blank/3_4_log-o-rama.pdf";
import review3_5 from "../documents/unit3/reviewsheets/blank/3_5_motion_practice.pdf"; // unused
import review_chainrulechallenge from "../documents/unit3/reviewsheets/blank/Chain_Rule_challenge.pdf";
import reviewc1_c3 from "../documents/unit3/reviewsheets/blank/Chap1-3_Review.pdf"; // unused
import review_tangentlinechallenge from "../documents/unit3/reviewsheets/blank/Tangent_Line_challenge.pdf"; // unused
import reviewanswer_3_4 from "../documents/unit3/reviewsheets/key/3_4_chain_rule_practice_KEY.pdf";
import reviewanswer_3_4_2 from "../documents/unit3/reviewsheets/key/3_4_log-o-rama_KEY.pdf";
import reviewanswer_3_5 from "../documents/unit3/reviewsheets/key/3_5_motion_practice_KEY.pdf"; // unused
import reviewanswer_chainrulechallenge from "../documents/unit3/reviewsheets/key/Chain_Rule_challenge_KEY.pdf";
import reviewanswer_c1_c3 from "../documents/unit3/reviewsheets/key/Chap1-3_Review_KEY.pdf"; // unused
import reviewanswer_tangentlinechallenge from "../documents/unit3/reviewsheets/key/tanlineAsolutions.JPG"; // unused
import reviewanswer_tangentlinechallenge2 from "../documents/unit3/reviewsheets/key/TanlinesBsolutions.jpeg"; // unused

import test2014blank from "../documents/unit3/tests/blank/Chap1-3_Test_2014.pdf"; // unused
import test2014key from "../documents/unit3/tests/key/Chap1-3_Test_2014_key.pdf"; // unused

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
            url: review3_4,
            text: "3.4 Chain Rule Practice",
          },
          {
            url: review3_4_2,
            text: "3.4 Log-o-Rama",
          },
          {
            url: review_chainrulechallenge,
            text: "Chain Rule Challenge",
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
            url: reviewanswer_chainrulechallenge,
            text: "Chain Rule Challenge Answer",
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
