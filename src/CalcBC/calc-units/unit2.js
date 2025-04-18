import React from "react";
import Header from "../../Header/Header";
import BackButton from "../../BackButton";
import Accordion from "../../Accordion";
import Generator from "../../AIgen/Generator";

import test2019blank from "../documents/unit2/tests/blank/2019bctest.pdf";
import test2019key from "../documents/unit2/tests/key/2019bckey.pdf";

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
            url: test2019blank,
            text: "2019 BC Test (Blanked)",
          },
        ],
      },
      {
        url: "/tests/answers",
        text: "Answers",
        options: [
          {
            url: test2019key,
            text: "2019 BC Test (Key)",
          },
        ],
      },
    ],
  },
  {
    url: "/reviewsheets",
    text: "Review Sheets",
    options: [],
  },
];

function unit2() {
  return (
    <div className="unit2">
      <Header headerTitle="Unit 2" description="Derivative" />
      <div className="Resources">
        <BackButton />
        <Accordion data={resources} />
      </div>
    </div>
  );
}

export default unit2;
