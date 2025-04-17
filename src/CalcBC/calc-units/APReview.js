import React from "react";
import Header from "../../Header/Header";
import BackButton from "../../BackButton";
import Accordion from "../../Accordion";
import Generator from "../../AIgen/Generator";

const resources = [
  {
    url: "/FRQ",
    text: "Free Response Questions",
    options: [],
  },
  {
    url: "/MCQ",
    text: "Multiple Choice Questions",
    options: [],
  }
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
