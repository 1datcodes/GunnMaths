import React from "react";
import { updates } from "./Header/UpdateLog";
import "./HomePage.css";

// Images
import analysis from "./Course-images/Analysis-cover.png";
import calcBC from "./Course-images/CalcBC-cover.png";

// Logos
// import HomeButton from './HomeButton';
// import SearchButton from './SearchButton';
import Header from "./Header/Header";

const courses = [
  { url: "analysis", img: analysis, text: "Analysis" },
  { url: "calc-bc", img: calcBC, text: "Calc BC" },
];

function HomePage() {
  return (
    <div className="Content">
      <Header
        headerTitle="Gunn Math Courses"
        description="Collection of Gunn Math Resources"
      />

      <div className="Courses">
        <div className="icon-grid">
          {courses.map((course, index) => (
            <div className="bundle" key={index}>
              {/* <div className="gradient" /> */}
              <div className="courses">
                <a className="courseLink" href={course.url}>
                  <img
                    className="coverimage"
                    src={course.img}
                    alt={course.text}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
