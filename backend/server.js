import express from "express";
import bodyParser from "body-parser";
import OpenAI from "openai";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.VITE_PORT || 5050;
const API_KEY = process.env.VITE_OPEN_AI_KEY;

const openai = new OpenAI({ apiKey: API_KEY });
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/generate-questions", async (req, res) => {
  const { course, courseDescription, unit, unitDescription } = req.body;
  if (!course || !unit || !unitDescription) {
    return res.status(400).send({ error: "Course and unit are required" });
  }

  try {
    const prompt = String.raw`
        Generate an unrealistic and difficult high school level question for ${unit} unit in ${course} course.
        Here is a quick course description: ${courseDescription}
        Here is a quick description of the unit: ${unitDescription}
        Clearly indicate where the question and answer starts with title 2 size (##)

        example:
        ## Question:
        [question text]

        ## Answer:
        [answer-text]
        end


        Generate question using LaTeX. Use:
        - $...$ for inline math
        - $$...$$ for block math
        - DO NOT use \(...\) or \[...\] for math

        For currency, spell out the word (dollars, euros, yen, etc.)
    `;
    const completion = await openai.responses.create({
      model: "gpt-4o-mini",
      input: [
        {
          role: "system",
          content: `You are a high school math teacher creating unique challenge questions for extra credit.
                    `,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const rawText = completion.output_text;
    const text = rawText
      .replace(/\((.+?)\)/gs, "$$$1$$")
      .replace(/\[(.+?)\]/gs, "$$$$ $1 $$$$");
    const answerStart = text.indexOf("## Answer:");
    const question = text.substring(0, answerStart).trim();
    const answer = text.substring(answerStart).trim();

    res.json({ question, answer });
  } catch (error) {
    res.status(500).send({ error: "Error generating question" });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
