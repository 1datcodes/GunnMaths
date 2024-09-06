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
    setLoading(true);
    const data = await generateQuestions(course, unit);
    setQuestionData(data);
    setShowAnswer(false);
    setLoading(false);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
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
        {questionData && (
          <div className="Question">
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
              <div className="Answer">
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
