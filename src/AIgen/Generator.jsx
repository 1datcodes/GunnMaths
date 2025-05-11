import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { generateQuestions } from "./AI";
import prompts from "./prompt.json";

const remarkMathOptions = {
  singleDollarTextMath: false,
};

const Generator = ({ course, unit }) => {
  const [questionData, setQuestionData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleGenerateQuestion = async () => {
    setLoading(true);
    try {
      const data = await generateQuestions(
        course,
        prompts.courses[course.toLowerCase()].course_description,
        prompts.courses[course.toLowerCase()].units[unit.toLowerCase()]
          .unit_name,
        prompts.courses[course.toLowerCase()].units[unit.toLowerCase()]
          .unit_description,
      );
      console.log(data);
      setQuestionData(data);
      setShowAnswer(false);
      setLoading(false);
    } catch (error) {
      setError("An error occurred while generating the question.");
      console.error("Error generating question:", error);
      setLoading(false);
    }
  };

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div
      id="generated-content"
      className="w-full self-center flex flex-col items-center justify-center p-5"
    >
      <h2 className="text-2xl font-medium pb-2">Want more practice?</h2>
      <button
        id="generator-button"
        className="max-w-3xs bg-gray-100 border-1 py-2.5 px-5 text-center flex items-center gap-2.5 text-md m-0.5 cursor-pointer rounded-xl transition-all duration-300 ease-in-out hover:bg-gray-200"
        onClick={handleGenerateQuestion}
        disabled={loading}
      >
        {loading ? "Generating" : "Generate Question"}
        {loading && (
          <div id="spinner" className="animate-spin w-full">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24.00 24.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M20.0001 12C20.0001 13.3811 19.6425 14.7386 18.9623 15.9405C18.282 17.1424 17.3022 18.1477 16.1182 18.8587C14.9341 19.5696 13.5862 19.9619 12.2056 19.9974C10.825 20.0328 9.45873 19.7103 8.23975 19.0612"
                  stroke="#000000"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
        )}
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
              remarkRehypeOptions={remarkMathOptions}
              components={{
                h1: ({ node, ...props }) => {
                  return (
                    <h1
                      className="text-4xl font-bold text-black font-sans"
                      {...props}
                    />
                  );
                },
                h2: ({ node, ...props }) => (
                  <h2 className="text-2xl font-bold" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="text-xl font-bold" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="text-lg pl-4 mb-1.5 leading-8" {...props} />
                ),
              }}
            />
            <button
              id="answer-button"
              className="max-w-3xs bg-gray-100 border-1 mt-5 py-2.5 px-5 text-center flex items-center gap-2.5 text-sm m-0.5 cursor-pointer rounded-xl transition-all duration-300 ease-in-out hover:bg-gray-200"
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
                  remarkRehypeOptions={remarkMathOptions}
                  components={{
                    h1: ({ node, ...props }) => {
                      return (
                        <h1
                          className="text-4xl font-bold text-black font-sans"
                          {...props}
                        />
                      );
                    },
                    h2: ({ node, ...props }) => (
                      <h2 className="text-2xl font-bold" {...props} />
                    ),
                    h3: ({ node, ...props }) => (
                      <h3 className="text-xl font-bold" {...props} />
                    ),
                    p: ({ node, ...props }) => (
                      <p className="text-lg mb-1.5 pl-4 leading-8" {...props} />
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
