// import axios from "axios";
import API_KEY from "../api.js";
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
    "\nClearly indicates where the answer starts with title 2 size (##) of 'Answer:', and provide answers using full LaTeX syntax." +
    "\nIf any dollar sign ($) is in the question, append a backslash () before it to bypass latex";

  const result = await model.generateContent(prompt);
  const text = result.response.text();
  console.log(result.response.text())

  const answerStart = text.indexOf("## Answer:");

  const question = text.substring(0, answerStart).trim();
  const answer = text.substring(answerStart).trim();

  return { question, answer };
};
