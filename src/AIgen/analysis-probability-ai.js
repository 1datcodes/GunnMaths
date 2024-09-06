import axios from 'axios';
import API_KEY from '../api';

const { GoogleGenerativeAI } = require("@google/generative-ai");


export const generateQuestions = async (course, unit) => {

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = "Generate a question for " + course + " " + unit;
    
    const result = await model.generateContent(prompt);
    // console.log(result.response.text());

  return result.response.text();
};