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
            <p>- We are a small group of students from Gunn High School.</p>
            <p>
              - Our goal is to provide a platform for students to access past
              tests and quizzes to study for their math classes.
            </p>
            <h4>What is this website?</h4>
            <p>
              - This website is an archive of past tests, quizzes, and other
              study resources for Gunn's Analysis, Calc BC, and in the future,
              AP Stats classes.
            </p>
            <h4>Why did we make this website?</h4>
            <p>
              - We found that navigating through various Google Drive folders to
              find study materials was tedious and time-consuming and often left
              us with less options than we wanted
            </p>
            <p>
              and I wanted to create an easier alternative to the current
              system.
            </p>
            <h4>How can you help?</h4>
            <p>
              - Currently, the only option to help is to contact us through
              e-mail, opening a pull request on GitHub, or directly contacting
              us in person
            </p>
            <p>- If you have suggestions, feel free to contact us</p>
          </div>
        </div>
        <div id="thanks" className="Thanks">
          <h1>Special Thanks</h1>
          <div className="Text">
            <p>- Big thanks to my predecessors and test providers:</p>
            <ul>
              <li>Jason Huang (2013-14)</li>
              <li>Hannah Kim(2016-17) </li>
              <li>Timothy Herchen (2018-19)</li>
              <li>Alan Lee (2019-20) </li>
              <li>Chris Lee and Michelle Koo (2021-2022) </li>
              <li>Justin Oh (2022-2023) </li>
              <li>Andersen Tanriverdi (2023-2024)</li>
              <li>Neeraj Gummalam (2024-2025)</li>
            </ul>
            <p>
              - Thanks to my teacher Mrs. Hlasek and Mr. Hahn for helping me out
              with past year tests and quizzes!
            </p>
            <p>
              - Thanks to Jesse Li for helping me with the website design and
              colors
            </p>
          </div>
        </div>
        <div id="contact" className="Contact">
          <h1>Contact Us</h1>
          <div className="Text">
            <h4>Our team</h4>
            <p>
              - Michi Tanaka (Class of 2025){" "}
              <a href="mailto:tanakamichi7@gmail.com">tanakamichi7@gmail.com</a>
              <br />- Kaicheng Luo (Class of 2025){" "}
              <a href="mailto:kaichengluo888@gmail.com">
                kaichengluo888@gmail.com
              </a>
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
            <h4>2023-2024 Analysis Calendar</h4>
            <p>
              -{" "}
              <a href="https://docs.google.com/spreadsheets/d/1sH6J7tkWx5mKWlGE2LJB93MIX8ODSkp3ibttnPnbONk/edit?usp=sharing">
                Class Schedule
              </a>
            </p>
            <h4>Calc BC Google Drive</h4>
            <p>
              -{" "}
              <a href="https://drive.google.com/drive/folders/1XN5fkN9JDDSLaZJxybOlqTqYftrmnGxI?usp=drive_link">
                Google Drive (2024-2025)
              </a>
            </p>
            <h4>2024-2025 Calc BC Calendar</h4>
            <p>
              -{" "}
              <a href="https://docs.google.com/spreadsheets/d/1avhyupwBX4ARf-DozDPSk6gtpP8Q9EI_F-DRthzujoQ/edit?usp=sharing">
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
