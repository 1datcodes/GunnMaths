# Gunn Maths

Gunn Maths is a website that holds past Analysis H tests. This website is built with React Library.
Overhaul (since v6.0.0) code is built using Vite+React with .jsx files

## Features

- Holds past tests and quizzes
- Organized by Unit and by category (quiz or test)
- Includes blanked and raw files

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

## Usage

Visit https://www.gunnmaths.org/ to access the site.

## Code Structure

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

Each course has its own Midterm+Final review

Each course folder has its own documents folder that stores all the test and quiz pdf files.
The pdf files are stored through Git LFS.

Our AI generation code is in the AIgen folder and can be used by importing the component to each unit

    import Generator from 'src/AIgen/Generator.js';

    <Generator
        course="course description"
        unit="unit description + other keywords"
    />

## Contributing

Original members: Michi Tanaka (Analysis class 2023-2024), Kaicheng Luo (Analysis class 2022-2023).

Contributing: If you have any tests or quizzes that you want to upload, send an email at [email](tanakamichi7@gmail.com) or [email](kaichengluo888@gmail.com)

## License

MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Inspired by Katie and Zara's efforts from 2021-22 (https://analysistests21-22.weebly.com)
- Originally created at Gunn Hacks 10

## Credits:

- Logo taken from Vecteezy.com
- Kaicheng Luo for collaborating
- Jesse Li for new color scheme and layout ideas
- Everyone who has uploaded their tests
