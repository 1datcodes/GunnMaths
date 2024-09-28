import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";
import { generateQuestions } from "./analysis-probability-ai";
import "./Generator.css";

const Generator = ({ course, unit }) => {
  const [questionData, setQuestionData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleGenerateQuestion = async () => {
    try {
      setLoading(true);
      const data = await generateQuestions(course, unit);
      setQuestionData(data);
      setShowAnswer(false);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div className="generated-content">
      <h2>Want more practice?</h2>
      <button
        className="generator-button"
        onClick={handleGenerateQuestion}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Question"}
      </button>
      <div className="Disclaimer">
        <p>Disclaimer: Still in alpha development.</p>
        <p><small>(It's never gonna go beta lol)</small></p>
      </div>
      <div className="Questions">
        {questionData && (
          <div className="question-content">
            <ReactMarkdown
              children={questionData.question}
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            />
            {!showAnswer && (
              <button className="answer-button" onClick={handleShowAnswer}>
                Show Answer
              </button>
            )}
            {showAnswer && (
              <div className="answer-content">
                <ReactMarkdown
                  children={questionData.answer}
                  remarkPlugins={[remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Generator;
