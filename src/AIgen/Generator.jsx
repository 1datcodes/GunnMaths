import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { generateQuestions } from "./AI";

const Generator = ({ course, unit }) => {
  const [questionData, setQuestionData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleGenerateQuestion = async () => {
    setLoading(true);
    console.log("Generating question for course:", course, "unit:", unit);
    try {
      const data = await generateQuestions(course, unit);
      console.log("Generated question data:", data);
      setQuestionData(data);
      setShowAnswer(false);
      setLoading(false);
    } catch (error) {
      setError("An error occurred while generating the question.");
      console.error("Error generating question:", error);
    }
  };

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div
      id="generated-content"
      className="self-center flex flex-col items-center justify-center p-5"
    >
      <h2 className="text-2xl font-medium pb-2">Want more practice?</h2>
      <button
        id="generator-button"
        className="max-w-3xs bg-gray-100 border-1 py-2.5 px-5 text-center flex items-center gap-2.5 text-sm m-0.5 cursor-pointer rounded-xl transition-all duration-300 ease-in-out hover:bg-gray-200"
        onClick={handleGenerateQuestion}
        disabled={loading}
      >
        {loading ? "Generating" : "Generate Question"}
        {loading && <div id="spinner" className=""></div>}
      </button>
      <div id="disclaimer" className="text-center p-1.5">
        <p>Powered by GPT-4o-mini</p>
      </div>
      <div
        id="Questions"
        className="w-full flex flex-col p-5 text-lg font-sans leading-6"
      >
        {error && <div className="error">{error}</div>}
        {error === null && questionData && (
          <div id="question-content">
            <Markdown
              children={questionData.question}
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
              components={{
                h1: ({ node, ...props }) => {
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
                h2: ({ node, ...props }) => (
                  <h2 className="text-2xl font-bold pl-8" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="text-xl font-bold" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="text-lg mb-1.5" {...props} />
                ),
              }}
            />
            <button
              id="answer-button"
              className="max-w-3xs bg-gray-100 border-1 py-2.5 px-5 text-center flex items-center gap-2.5 text-sm m-0.5 cursor-pointer rounded-xl transition-all duration-300 ease-in-out hover:bg-gray-200"
              onClick={handleShowAnswer}
            >
              {showAnswer ? "Hide Answer" : "Show Answer"}
            </button>

            {showAnswer && (
              <div
                id="answer-content"
                className="mt-2.5 bg-gray-100 border-1 rounded-lg p-4"
              >
                <Markdown
                  children={questionData.answer}
                  remarkPlugins={[remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                  components={{
                    h1: ({ node, ...props }) => {
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
                    h2: ({ node, ...props }) => (
                      <h2 className="text-2xl font-bold pl-8" {...props} />
                    ),
                    h3: ({ node, ...props }) => (
                      <h3 className="text-xl font-bold" {...props} />
                    ),
                    p: ({ node, ...props }) => (
                      <p className="text-lg mb-1.5" {...props} />
                    ),
                  }}
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
