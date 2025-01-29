// import axios from "axios";
import API_KEY from "../api.js";
// import prompt from './prompt.txt'
// IMPORT THIS SHIT PLZZXCSA
import OpenAI from "openai/index.mjs";
const openai = new OpenAI({apiKey: API_KEY, dangerouslyAllowBrowser: true});

export const generateQuestions = async (course, unit) => {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: `You are a high school math teacher creating questions for the ${course} course.`},
      {
        role: "user",
        content: `
                  Generate a realistic and UNIQUE question for ${unit} unit in ${course} course.
                  Clearly indicate where the question and answer starts with title 2 size (##)
                  example:
                  ## Question:
                  [question]
                  ## Answer:
                  [answer]

                  Use full LaTeX syntax in the response.
                  For currency, spell out the word (dollars, euros, yen, etc.)
                `,
      },
    ],
    store: true,
  });

  const text = completion.choices[0].message.content;
  console.log(text);

  const answerStart = text.indexOf("## Answer:");
  const question = text.substring(0, answerStart).trim();
  const answer = text.substring(answerStart).trim();

  return { question, answer };
};

// const { GoogleGenerativeAI } = require("@google/generative-ai");

// export const generateQuestions = async (course, unit) => {
//   const genAI = new GoogleGenerativeAI(API_KEY);
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//   const prompt =
//     `
//     Generate a realistic and UNIQUE question for ${unit} unit in ${course} course.
//     Clearly indicate where the question and answer starts with title 2 size (##)
//     example:
//     ## Question:
//     [question]
//     ## Answer:
//     [answer]

//     Use full LaTeX syntax in the response.
//     For currency, spell out the word (dollars, euros, yen, etc.)
//     `;

//   const result = await model.generateContent(prompt);
//   const text = result.response.text();

//   // TODO: Delete when publishing
//   console.log(result.response.text());

//   const answerStart = text.indexOf("## Answer:");

//   const question = text.substring(0, answerStart).trim();
//   const answer = text.substring(answerStart).trim();

//   return { question, answer };
// };

