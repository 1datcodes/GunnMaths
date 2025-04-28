import React from "react";
import Header from "../../Header/Header";
import BackButton from "../../BackButton";
import Accordion from "../../Accordion";
import Generator from "../../AIgen/Generator";

// import all files
import frq_2015 from "../documents/APReview/reviewsheets/blank/ap15_frq_calculus_bc.pdf";
import frq_2015_answer from "../documents/APReview/reviewsheets/key/2015_frq_calculus_bc.pdf";
import frq_2015_scoring from "../documents/APReview/reviewsheets/key/2015 BC FR scoring guide.pdf";

const resources = [
  {
    url: "/FRQ",
    text: "Free Response Questions",
    options: [
      {
        url: "/FRQ/blank",
        text: "Blank",
        options: [
          {
            url: frq_2015,
            text: "2015 AP Calculus BC Free Response",
          },
        ],
      },
      {
        url: "/FRQ/answers",
        text: "Answers",
        options: [
          {
            url: frq_2015_answer,
            text: "2015 AP Calculus BC Free Response Answers",
          },
          {
            url: frq_2015_scoring,
            text: "2015 AP Calculus BC Free Response Scoring Guide",
          },
        ],
      },
    ],
  },
  {
    url: "/MCQ",
    text: "Multiple Choice Questions",
    options: [],
  },
];

function APReview() {
  return (
    <div className="APReview">
      <Header headerTitle="APReview" description="AP Review" />
      <div className="Resources">
        <BackButton />
        <Accordion data={resources} />
      </div>
    </div>
  );
}

export default APReview;
