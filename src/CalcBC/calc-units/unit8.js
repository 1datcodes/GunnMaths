import React from "react";
import Header from "../../Header/Header";
import BackButton from "../../BackButton";
import Accordion from "../../Accordion";
import Generator from "../../AIgen/Generator";

const resources = [
{
    url: "/tests",
    text: "Tests",
    options: []
  },
  {
    url: "/reviewsheets",
    text: "Review Sheets",
    options: []
  }
];

function unit8() {
  return (
    <div className="unit8">
      <Header headerTitle="Unit 8" description="Application of Integrals" />
      <div className="Resources">
        <BackButton />
        <Accordion data={resources} />
      </div>
    </div>
  );
}

export default unit8;
