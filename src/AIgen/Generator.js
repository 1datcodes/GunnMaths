import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";
import { generateQuestions } from "./AI";
import "./Generator.css";

const Generator = ({ course, unit }) => {
  const [questionData, setQuestionData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const eventSource = new EventSource(`${process.env.REACT_APP_SERVER}/status`);

  const handleGenerateQuestion = async () => {
    try {
      setLoading(true);
      const data = await generateQuestions(course, unit);
      setQuestionData(data);
      setShowAnswer(false);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError("An error occurred while generating the question.");
      console.error(err);
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
        {loading ? "Generating" : "Generate Question"}
        {loading && <div className="spinner"></div>}
      </button>
      <div className="Disclaimer">
        <p>Powered by GPT-4o-mini</p>
      </div>
      <div className="Questions">
        {error && <div className="error">{error}</div>}
        {error === null && questionData && (
          <div className="question-content">
            <ReactMarkdown
              children={questionData.question}
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            />
            {!showAnswer ? (
              <button className="answer-button" onClick={handleShowAnswer}>
                Show Answer
              </button>
            ) : (
              <button
                className="answer-button"
                onClick={() => setShowAnswer(false)}
              >
                Hide Answer
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
