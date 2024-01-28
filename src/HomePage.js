import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const baseURL = 'https://gunnmaths.org/';

const courses = [
    {url: `${baseURL}analysis`, text: "Analysis"}
  ];

function HomePage() {
    return (
        <div className="Content">
            <header className="Home-header">
                <button className="Home-button" onClick={() => window.location.href="/"}>Home</button>
                <h1 className="Title">Gunn Math Resources</h1>
                <button className="Search">Search</button>
            </header>

            <div className="Courses">
                <div className="icon-grid">
                    {courses.map((course, index) => (
                    <div className="courses" key={index}>
                        <Link to={course.url}>{course.text}</Link>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;