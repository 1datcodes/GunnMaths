import API_KEY from "../api.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const generateQuestions = async (course, unit) => {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const response = await fetch("/AI/prompt.json");

    if (!response.ok) {
      throw new Error("Failed to fetch prompts");
    }

    const rawPrompts = await response.text();
    console.log("raw\n" + rawPrompts);

    const prompts = JSON.parse(rawPrompts);
    console.log("prompts\n" + JSON.stringify(prompts));

    const courseLower = course.toLowerCase();
    const unitLower = unit.toLowerCase();
    const unitContent = prompts[courseLower][unitLower]["prompt"];
    console.log("unitContent\n" + JSON.stringify(unitContent));

    const prompt =
      "Based on the following content, generate a realistic and unique question for the " +
      unit +
      " unit in " +
      course +
      " course." +
      "\n\nContent: " + unitContent +
      "\n\nClearly indicates where the answer starts with title 2 size (##) of 'Answer:', and provide answers using full LaTeX syntax." +
      "\nIf any dollar sign ($) is in the question, append a backslash () before it to bypass latex";
    console.log("prompt: ", prompt);
    
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // TODO: Delete when publishing
    console.log(result.response.text());

    const answerStart = text.indexOf("## Answer:");

    const question = text.substring(0, answerStart).trim();
    const answer = text.substring(answerStart).trim();

    return { question, answer };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
