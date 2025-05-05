import React, { useEffect } from "react";
import Markdown from "react-markdown";
import Header from "./Header";

const About = () => {
  const markdown = `
# About Us

Welcome to **Gunn Maths**
    `;

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
      <div id="about" className="">
        <Markdown
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="text-3xl font-bold" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="text-2xl font-bold" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-xl font-bold" {...props} />
            ),
            p: ({ node, ...props }) => <p className="text-lg" {...props} />,
            li: ({ node, ...props }) => (
              <li className="text-lg list-disc pl-5" {...props} />
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
