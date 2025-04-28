import React from "react";
import Header from "../../Header/Header";
import BackButton from "../../BackButton";
import Accordion from "../../Accordion";
import Generator from "../../AIgen/Generator";

// import all files
import volumes_by_shell from "../documents/unit8/reviewsheets/blank/8.4 - Volumes by Cylindrical Shells.pdf";

import volumes_by_shell_answer from "../documents/unit8/reviewsheets/key/8.4 - Volumes by Cylindrical Shells - SOLUTIONS.pdf";

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
            url: volumes_by_shell,
            text: "Volumes by Cylindrical Shells",
          },
        ],
      },
      {
        url: "/reviewsheets/answers",
        text: "Answers",
        options: [
          {
            url: volumes_by_shell_answer,
            text: "Volumes by Cylindrical Shells - SOLUTIONS",
          },
        ],
      },
    ],
  },
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
