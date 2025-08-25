# Gunn Maths

Gunn Maths is a website that holds past tests for AnalysisH, Calc BC, and AP Stats.

This website is built with React Library.
Overhaul (since v6.0.0) code is built using Vite+React with .jsx files
CSS code written using Tailwind CSS since v6.0.0

## Features

- Holds past tests, quizzes, reviewsheets, and homework answers on one site.
- Organized by course, unit/chapter, and category (reviewsheet, test, etc.)
- Includes blank files and keys/raw files.

## Contributing

1. Clone repository

   `git clone https://github.com/1datcodes/GunnMaths.git`

2. Install dependencies

   `npm i`

3. Start dev environment

   `npm start` (< v6.0.0)

   `npm run dev` (> v6.0.0)

4. Start backend for AI generation (ask for environment variables)

   `node backend/server.js`

## Access

Visit https://www.gunnmaths.org/ to access the site.

## Code Structure

### <v6.0.0 (deprecated)

Our code is broken down into individual courses which is then broken into individual units.

    Analysis
        AtPS
        Probability
        Polar
        Vector
        Growth
        Matrices
        GAtM
        Calculus
    Calc BC
        Unit 1
        .
        .
        .
        Unit 10

### >v6.0.0 (current)

Our restructured file system (since v6.0.0) has the following structure:

    src
        Courses
            Analysis
                documents
                    AtPS
                    ...
            CalcBC
                documents
                    Derivatives
                    ...
            Course.jsx
            Unit.jsx

This way it is more easier to add courses.

If you want to add more courses, simply create a new folder with the course name:

    src
        Courses
            ...
            NewCourseName
                documents
                    unit1
                    ...

Course.jsx and Unit.jsx should take care of the rest.

## Naming scheme

Each course has units in the order unit1, unit2, etc and to keep the order, each unit folder will have `<unit number>|<unit name>` format.

For example:

    Analysis
        documents
            1|AtPS
            2|Probability

Each unit image must have the corresponding order (not necessarily the same name, although it would be easy to maintain).

Each course has its own Midterm+Final review

## AI Generator

Our AI generation code is in the AIgen folder and can be used by importing the component to each unit (< v6.0.0)

    import Generator from 'src/AIgen/Generator.js';

    <Generator
        course="course description"
        unit="unit description + other keywords"
    />

Overhauled AI generation code uses `prompts.json` to store all prompts for each individual courses and units. `Generator.js` then imports the prompts and passes it to `server.js` to fetch.

Our current model is `GPT-4o-mini` from OpenAI.

## Working with Git LFS

Each course folder has its own documents folder that stores all the test and quiz pdf files.
The pdf files are stored through Git LFS.

To fetch files stored in Git LFS do the following:

1. Fetch `git lfs fetch`
2. Populate with real content `git lfs checkout`

## Contributing

Original members: Michi Tanaka (Class of 2025), Kaicheng Luo (Class of 2025).

Contributing: If you have any tests or quizzes that you want to upload, send an email at [tanakamichi7@gmail.com](tanakamichi7@gmail.com) or [kaichengluo888@gmail.com](kaichengluo888@gmail.com)

## License

MIT License - see the [LICENSE](LICENSE.md) file for details

## Acknowledgments

- Inspired by Katie and Zara's efforts from 2021-22 (https://analysistests21-22.weebly.com)
- Originally created at Gunn Hacks 10

## Credits:

- Logo taken from Vecteezy.com
- Various SVG logos from svgrepo.com
- Kaicheng Luo for collaborating
- Jesse Li for new color scheme and layout ideas
- Everyone who has uploaded their tests