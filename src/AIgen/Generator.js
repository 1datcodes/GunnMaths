import React, { useState } from "react";
import { generateQuestions } from "./analysis-probability-ai";

const Generator = ({ course, unit }) => {
    const [questions, setQuestions] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const handleGenerateQuestion = async () => {
        setLoading(true);
        const question = await generateQuestions(course, unit);
        setQuestions([...questions, question]);
        setLoading(false);
    };

    return (
        <div className="Generator">
            <button onClick={handleGenerateQuestion} disabled={loading}>
                { loading ? 'Generating...' : 'Generate Question' }
            </button>
            {questions && <div className="Questions">{questions}</div>}
        </div>
    );
};

export default Generator;