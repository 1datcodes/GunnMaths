const express = require("express");
const bodyParser = require("body-parser");
const OpenAI = require("openai");
const cors = require("cors");
const SSE = require("express-sse");
const compression = require("compression"); // Add compression middleware

require("dotenv").config();

const port = process.env.REACT_APP_PORT || 5050;
const API_KEY = process.env.REACT_APP_OPEN_AI_KEY;

const openai = new OpenAI({ apiKey: API_KEY });
const sse = new SSE();

const app = express();
app.use(cors());
app.options("*", cors());
app.use(compression()); // Ensure compression middleware is added before SSE
app.use(bodyParser.json());

app.get("/status", (req, res) => {
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Connection", "keep-alive");
  sse.init(req, res); // Ensure SSE is properly initialized
});

app.post("/generate-questions", async (req, res) => {
  const { course, unit } = req.body;

  try {
    sse.send("Request received", "status");

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

    sse.send("AI generation completed", "status");

    const text = completion.choices[0].message.content;
    const answerStart = text.indexOf("## Answer:");
    const question = text.substring(0, answerStart).trim();
    const answer = text.substring(answerStart).trim();

    res.json({ question, answer });
  } catch (error) {
    sse.send("Error during AI generation", "status");
    res.status(500).send({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});