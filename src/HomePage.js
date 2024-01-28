import React from 'react';
import './HomePage.css';

// Logos
import home from './images/home.png';
import SearchButton from './SearchButton';

const baseURL = 'https://gunnmaths.org/';

const courses = [
    {url: `${baseURL}analysis`, text: "Analysis"}
  ];

function HomePage() {
    return (
        <div className="Content">
            <header className="Home-header">
                <button className="Home-button" onClick={() => window.location.href="/"}>
                        <img src={home} alt="Home"/>
                    </button>
                <h1 className="Title">Gunn Math Courses</h1>
                <SearchButton />
            </header>

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