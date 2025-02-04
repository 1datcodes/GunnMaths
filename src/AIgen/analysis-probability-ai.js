// import API_KEY from "../api.js";
const API_KEY = process.env.OPEN_AI_KEY;
import OpenAI from "openai/index.mjs";
const openai = new OpenAI({ apiKey: API_KEY, dangerouslyAllowBrowser: true });

export const generateQuestions = async (course, unit) => {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `You are a college math teacher creating unique challenge questions for extra credit.
                  Format questions with LaTeX for equations and Markdown for structure.
                  Make sure to sandwich LaTeX code with $$ so that remark-math can render it.`,
      },
      {
        role: "user",
        content: `
                  Generate an unrealistic and difficult college level question for ${unit} unit in ${course} course.
                  Clearly indicate where the question and answer starts with title 2 size (##)
                  example:
                  ## Question:
                  [question]
                  ## Answer:
                  [answer]

                  For currency, spell out the word (dollars, euros, yen, etc.)
                `,
      },
    ],
  });

  const text = completion.choices[0].message.content;
  // console.log(text);

  const answerStart = text.indexOf("## Answer:");
  const question = text.substring(0, answerStart).trim();
  const answer = text.substring(answerStart).trim();

  return { question, answer };
};
