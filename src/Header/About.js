import React, { useEffect } from "react";
import Header from "./Header";
import BackButton from "../BackButton";
import "./About.css";

const About = () => {
  useEffect(() => {
    setTimeout(() => {
      const elementId = window.location.hash.substring(1);
      const element = document.getElementById(elementId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  }, []);

  return (
    <about>
      <Header headerTitle="About Us" description="About us and Contacts" />
      <div className="About-Content">
        <BackButton />
        <div id="about" className="About">
          <h1>About Us</h1>
          <div className="Text">
            <h4>Who are we?</h4>
            <p>
              - We are a group of students from Gunn High School who has taken Analysis H in the past.
            </p>
            <p>
              - Our goal is to provide a platform for students to access past tests and quizzes to study for the class.
            </p>
            <h4>What is this website?</h4>
            <p>
              - This website aims to contain all of the past tests and quizzes
              from Analysis H class and organize them in an intuitive layout for
              ease of access
            </p>
            <h4>Why did we make this website?</h4>
            <p>
              - I made this website because I personally found it difficult to
              navigate many different Google Drive folders for past tests and
              quizzes to study
            </p>
            <p>
              and I wanted to create an easier alternative to the current
              system.
            </p>
            <h4>The future of this website</h4>
            <p>
              - Currently, there are many unimplemented features and ideas that
              I want to work on going forward
            </p>
            <p>
              - One unimplemented feature is the search button as of May 2023
            </p>
            <p>
              - If time and resources allow it, I want to expand the website to
              all other math classes offered at Gunn
            </p>
            <p>
              - I also want to add a feature where students can submit their own
              tests and quizzes to the website
            </p>
            <h4>How can you help?</h4>
            <p>
              - Currently, the only option to help is to contact me through
              e-mail, opening a pull request on GitHub, or directly contacting
              me in person
            </p>
            <p>
              - In the future, I intend to implement some form of feedback
              system
            </p>
            <p>- If you have suggestions, feel free to contact me</p>
          </div>
        </div>
        <div id="thanks" className="Thanks">
          <h1>Special Thanks</h1>
          <div className="Text">
            <p>- Big thanks to my predecessors:</p>
            <ul>
              <li>Jason Huang (2013-14)</li>
              <li>Hannah Kim(2016-17) </li>
              <li>Timothy Herchen (2018-19)</li>
              <li>Alan Lee (2019-20) </li>
              <li>Chris Lee and Michelle Koo (2021-2022) </li>
              <li>Justin Oh (2022-2023) </li>
              <li>Andersen Tanriverdi (2023-2024)</li>
            </ul>
            <p>
              - Thanks to my teacher Mrs. Hlasek for helping me out with blank files
            </p>
          </div>
        </div>
        <div id="contact" className="Contact">
          <h1>Contact Us</h1>
          <div className="Text">
            <h4>Our team</h4>
            <p>
              - Michi Tanaka (Class of 2025)
              <br />
              - Kaicheng Luo (Class of 2025)
            </p>
            <h4>Our location</h4>
            <p>- Palo Alto, California</p>
          </div>
        </div>
        <div id="other" className="Other">
          <h1>Other Resources</h1>
          <div className="Text">
            <h4>Analysis Google Drive</h4>
            <p>
              -{" "}
              <a href="https://drive.google.com/drive/folders/14YfGVUC4NG2_tZ0IDPhWV2UpcZSZrnGR?usp=drive_link">
                Google Drive (2023-2024)
              </a>
            </p>
            <h4>2023-2024 Calendar</h4>
            <p>
              -{" "}
              <a href="https://docs.google.com/spreadsheets/d/1sH6J7tkWx5mKWlGE2LJB93MIX8ODSkp3ibttnPnbONk/edit?usp=sharing">
                Class Schedule
              </a>
            </p>
            <h4>GitHub Repository</h4>
            <p>
              -{" "}
              <a href="https://github.com/1datcodes/GunnMaths">
                GitHub Repository
              </a>
            </p>
          </div>
        </div>
      </div>
    </about>
  );
};

export default About;
