import axios from "axios";
import API_KEY from "../api";
// import prompt from './prompt.txt'
// IMPORT THIS SHIT PLZZXCSA

const { GoogleGenerativeAI } = require("@google/generative-ai");

export const generateQuestions = async (course, unit) => {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt =
    "Generate a realistic and unique question for " +
    unit +
    " unit in " +
    course +
    " course." +
    "\nProvide answers using full LaTeX syntax";

  const result = await model.generateContent(prompt);
  // console.log(result.response.text());

  return result.response.text();
};
