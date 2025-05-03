import React from "react";
import Header from "./Header";
import BackButton from "../BackButton";
import "./Update.css";

const UpdateLog = () => {
  return (
    <div className="Content">
      <Header />

      <div className="Update">
        <BackButton />
        <h1>Update Log</h1>
        <h4>Version 5.0.0</h4>
        <ul>
          <li>
            Due to widespread critism, we are changing the color scheme and site
            layout
          </li>
          <li>Thanks to Jesse Li for cooking up something in 30 mins!</li>
          <li>
            If you have some more ideas on how to make this website beautiful,
            please let us know before we leave
          </li>
          <li>We are also implementing AP Stats page!</li>
        </ul>
        <h4>Version 4.1.0</h4>
        <ul>
          <li>All calc bc units are up now!</li>
          <li>remember to contact us if you would like to contribute!</li>
        </ul>
        <h4>Version 4.0.3</h4>
        <ul>
          <li>cleaned up chapter 1-3 tests/reviewsheets</li>
        </ul>
        <h4>Version 4.0.2</h4>
        <ul>
          <li>Unit 1-3 documents updated</li>
        </ul>
        <h4>Version 4.0.1</h4>
        <ul>
          <li>Fixed BackButton routing error in CalcBC</li>
          <li>Tests and study materials are coming soon...</li>
        </ul>
        <h4>Version 4.0.0</h4>
        <ul>
          <li>Due to popular demands, we have initialized CalcBC pages!</li>
          <li>Added 10 new units, Midterm and AP Review Pages</li>
        </ul>
        <h4>Version 3.0.2</h4>
        <ul>
          <li>Fixed API Key leak (thanks Leo Jeong!)</li>
        </ul>
        <h4>Version 3.0.1</h4>
        <ul>
          <li>Changed color scheme</li>
          <li>Switched from Google Gemini 1.5 flash to GPT-4o from OpenAI</li>
        </ul>
        <h4>Version 2.0.3alpha</h4>
        <ul>
          <li>Updated About Us page</li>
          <li>Probably the last major change before Calc BC</li>
        </ul>
        <h4>Version 2.0.2alpha</h4>
        <ul>
          <li>Added mobile support</li>
        </ul>
        <h4>Version 2.0.1alpha</h4>
        <ul>
          <li>Added Calc BC folder (to be completed later)</li>
          <li>AI available for Analysis Units</li>
        </ul>
        <h4>Version 1.0.1alpha</h4>
        <ul>
          <li>Initial release</li>
          <li>All Analysis tests and quizzes added</li>
        </ul>
      </div>
    </div>
  );
};

export default UpdateLog;
