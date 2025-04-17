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

function unit4() {
  return (
    <div className="unit4">
      <Header headerTitle="Unit 4" description="Application of Derivatives" />
      <div className="Resources">
        <BackButton />
        <Accordion data={resources} />
      </div>
    </div>
  );
}

export default unit4;
