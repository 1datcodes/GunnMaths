import express from 'express';
import bodyParser from 'body-parser';
import OpenAI from 'openai';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.VITE_PORT || 5050;
const API_KEY = process.env.VITE_OPEN_AI_KEY;

const openai = new OpenAI({ apiKey: API_KEY });
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/generate-questions', async (req, res) => {
    const { course, unit } = req.body;
    if(!course || !unit) {
        return res.status(400).send({ error: 'Course and unit are required' });
    }

    try {
        const completion = await openai.responses.create({
            model: 'gpt-4o-mini',
            input: [
                {
                    role: 'system',
                    content: `You are a college math teacher creating unique challenge questions for extra credit.
                  Format questions with LaTeX for equations and Markdown for structure.
                  Make sure to sandwich LaTeX code with $$ so that remark-math can render it.`,
                },
                {
                    role: 'user',
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

        const text = completion.output_text;
        const answerStart = text.indexOf('## Answer:');
        const question = text.substring(0, answerStart).trim();
        const answer = text.substring(answerStart).trim();

        res.json({ question, answer });
    } catch (error) {
        res.status(500).send({ error: 'Error generating question' });
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
