import React from "react";
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
            <div className="courses" key={index}>
              <a className="courseLink" href={course.url}>
                <img
                  className="coverimage"
                  src={course.img}
                  alt={course.text}
                />
              </a>
              <button onClick={() => (window.location.href = course.url)}>
                {course.text}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
