import React from 'react';
import './HomePage.css';

// Logos
// import HomeButton from './HomeButton';
// import SearchButton from './SearchButton';
import Header from './Header/Header';

const courses = [
    {url: "analysis", text: "Analysis"},
    {url: "calc-bc", text: "Calc BC"}
  ];

function HomePage() {
    return (
        <div className="Content">
            <Header headerTitle="Gunn Math Courses" description="Collection of Gunn Math Resources"/>

            <div className="Courses">
                <div className="icon-grid">
                    {courses.map((course, index) => (
                        <div className="courses" key={index}>
                            <a className="courseLink" href={course.url}> 
                                {course.text}
                            </a>
                            <button onClick={() => window.location.href=course.url}>{course.text}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;