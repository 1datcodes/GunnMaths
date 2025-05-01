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

      <div className="quick-title">
        <h2 className="quick-title-text">Gunn Math Courses</h2>
      </div>

      <div className="Courses">
        <div className="icon-grid">
          {courses.map((course, index) => (
            <div
              className="courses"
              key={index}
              onClick={() => (window.location.href = course.url)}
            >
              <a className="courseLink" href={course.url}>
                <div className="gradient-overlay">
                  <h1 className="course-text">{course.text}</h1>
                  <p className="course-description">
                    {course.text} Course Resources
                  </p>
                </div>
                <img
                  className="coverimage"
                  src={course.img}
                  alt={course.text}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
