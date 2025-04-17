import React from "react";
import Header from "../../Header/Header";
import BackButton from "../../BackButton";
import Accordion from "../../Accordion";
import Generator from "../../AIgen/Generator";

const resources = [
  {
    url: "/midterm",
    text: "Midterm",
    options: [],
  },
  {
    url: "/final",
    text: "Final",
    options: [],
  }
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
