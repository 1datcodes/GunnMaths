const express = require('express');
const bodyParser = require('body-parser');
const OpenAI = require('openai');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.REACT_APP_PORT || 5000;
const API_KEY = process.env.REACT_APP_OPEN_AI_KEY;

const openai = new OpenAI({ apiKey: API_KEY });

app.use(cors({
    origin: ['http://localhost:3000', 'https://gunnmaths.org'],
}));
app.use(bodyParser.json());

app.post('/generate-questions', async (req, res) => {
    const { course, unit } = req.body;

    try {
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
        const answerStart = text.indexOf("## Answer:");
        const question = text.substring(0, answerStart).trim();
        const answer = text.substring(answerStart).trim();

        res.json({ question, answer });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})