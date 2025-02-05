export const generateQuestions= async (course, unit) => {
    const response = await fetch('http://localhost:5000/generate-questions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ course, unit }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate question', response.status);
    }

    const { question, answer } = await response.json();
    return { question, answer };
};