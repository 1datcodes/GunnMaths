import { useEffect } from "react";
import Markdown from "react-markdown";
import Header from "./Header";
import BackButton from "../BackButton";

const markdown = `
# About Us
## Who are we
- We are a small group of students from Gunn High School
- Our goal is to provide a platform for students to access past tests, quizzes, and review materials to study for their math classes.
## What is this website?
- This website is an archive of past test, quizzes, and other study resources for Gunn's Analysis, Calc BC and AP Stats classes.
## Why did we make this website?
- We found that navigating through various Google Drive folders to find study materials was tedious and time-consuming and often left us with less options than we wanted and we wanted to create an easier alternative to the system.
## How can you help?
- Currently, the only option to help is to contact us through e-mail, opening a pull request on GitHub, or directly contacting us in person
- If you have any suggestions, feel free to contact us
# Special Thanks
- Big thanks to my predecessors and test providers:
- Jason Huang (2013-14)
- Hannah Kim (2016-17)
- Timothy Herchen (2018-19)
- Alan Lee (2019-20)
- Chris Lee and Michelle Koo (2021-22)
- Justin Oh (2022-23)
- Andersen Tanriverdi (2023-24)
- Neeraj Gummalam (2024-25)
- Davide Illouz (2025-26)
- Thanks to our teacher Mrs. Hlasek, Mr. Hahn and Ms. Congress for helping us out with past year resources!
- Thanks to Jesse Li for helping us out with the website design/color schemes (iykyk)
# Contact Us
## Our Team
- Michi Tanaka (Class of 2025) [tanakamichi7@gmail.com](tanakamichi7@gmail.com)
- Kaicheng Luo (Class of 2025) [kaichengluo888@gmail.com](kaichengluo888@gmail.com)
- Grace Liu (Class of 2026) [gracetliu7@gmail.com](gracetliu7@gmail.com)
## Our Location
- Henry M. Gunn High School, no classroom
# Other Resources
## Analysis Google Drive
- [Google Drive (2025-26)](https://drive.google.com/drive/folders/14YfGVUC4NG2_tZ0IDPhWV2UpcZSZrnGR?usp=drive_link)
## 2023-24 Analysis Calendar
- [Class Schedule](https://docs.google.com/spreadsheets/d/1sH6J7tkWx5mKWlGE2LJB93MIX8ODSkp3ibttnPnbONk/edit?usp=sharing)
## Calc BC Google Drive
- [Google Drive (2025-26)](https://drive.google.com/drive/folders/1XN5fkN9JDDSLaZJxybOlqTqYftrmnGxI?usp=drive_link)
## 2024-25 Calc BC Calendar
- [Class Schedule](https://docs.google.com/spreadsheets/d/1avhyupwBX4ARf-DozDPSk6gtpP8Q9EI_F-DRthzujoQ/edit?usp=sharing)
# GitHub Repository
- [Repository](https://github.com/1datcodes/GunnMaths)

  `;

const About = () => {
  useEffect(() => {
    setTimeout(() => {
      const elementID = window.location.hash.substring(1);
      const element = document.getElementById(elementID);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  return (
    <div>
      <Header />
      <div id="about" className="w-full flex flex-col py-8 px-12 gap-5">
        <BackButton />
        <span className="p-2"></span>
        <Markdown
          components={{
            h1: ({ ...props }) => {
              const text = props.children;
              const id = text.toLowerCase().replace(/\s+/g, "-");
              return (
                <h1
                  id={id}
                  className="text-4xl font-bold text-black font-sans"
                  {...props}
                />
              );
            },
            h2: ({ ...props }) => (
              <h2 className="text-2xl font-bold pl-8" {...props} />
            ),
            h3: ({ ...props }) => (
              <h3 className="text-xl font-bold" {...props} />
            ),
            p: ({ ...props }) => (
              <p className="text-lg mb-1.5" {...props} />
            ),
            li: ({ ...props }) => (
              <li className="text-lg list-disc ml-16 p-1" {...props} />
            ),
            a: ({ ...props }) => (
              <a
                className="text-blue-500 hover:text-blue-700 underline"
                target="_blank"
                rel="noopener noreferrer"
                {...props}
              />
            ),
          }}
        >
          {markdown}
        </Markdown>
      </div>
    </div>
  );
};

export default About;
