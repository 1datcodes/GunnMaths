import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";
import { generateQuestions } from "./analysis-probability-ai";
import "./Generator.css";

const Generator = ({ course, unit }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerateQuestion = async () => {
    setLoading(true);
    const question = await generateQuestions(course, unit);
    setQuestions([...questions, question]);
    setLoading(false);
  };

  return (
    <div>
      <button
        className="generator-button"
        onClick={handleGenerateQuestion}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Question"}
      </button>
      <div className="Questions">
        {questions &&
          questions.map((question, index) => (
            <ReactMarkdown
              key={index}
              children={question}
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            />
          ))}
      </div>
    </div>
  );
};

export default Generator;
