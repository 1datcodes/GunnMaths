import { Link } from "react-router-dom";
import Header from "./Header/Header";
import "./App.css";

// Course Images
import analysis from "./Course-Images/Analysis-cover.png";
import calcBC from "./Course-Images/CalcBC-cover.png";

const courses = [
  {
    url: "analysis",
    title: "Analysis",
    image: analysis,
    description: "Analysis Course Resources",
  },
  {
    url: "calc-bc",
    title: "Calc BC",
    image: calcBC,
    description: "Calculus BC Course Resources",
  },
];

function App() {
  return (
    <div id="content" className="mb-[3rem]">
      <Header />
      <div id="quick-title" className="text-black pt-[3rem] pl-[3.75rem]">
        <h2 className="pl-[3.2rem] mb-0 text-2xl font-bold">Gunn Math Resources</h2>
      </div>

      <div id="courses" className="py-[2.5rem] px-[3.75rem]">
        <div
          id="grid"
          className="py-[0.625rem] px-[3.125rem] grid grid-cols-3 gap-[6.25rem]"
        >
          {courses.map((course, index) => (
            <div
              id="course"
              key={index}
              className="group relative w-full flex flex-row justify-end items-center gap-[1.25rem] z-0 transition-all duration-300 ease-in-out hover:cursor-pointer hover:scale-102"
              onClick={() => (window.location.href = course.url)}
            >
              <Link
                id="course-link"
                to={course.url}
                className="w-[15rem] h-[15rem] flex flex-row justify-between items-center rounded-[1rem] overflow-hidden"
              >
                <div
                  id="gradient-overlay"
                  className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-[#023047] from-25% via-70% to-transparent z-10 rounded-[inherit] shadow-sm shadow-black pointer-events-none flex flex-col justify-start items-start"
                >
                  <h1
                    id="course-title"
                    className="text-white text-3xl font-bold z-20 pl-[1.5rem] pr-[1rem] my-[1.25rem] text-shadow-[black 1px 1px 10px] group-hover:underline decoration-highlight"
                  >
                    {course.title}
                  </h1>
                  <p
                    id="course-description"
                    className="text-white z-20 pl-[1.5rem] pr-[1rem] my-[1rem] text-shadow-[black 1px 1px 10px] group-hover:underline decoration-highlight"
                  >
                    {course.description}
                  </p>
                </div>
                <img
                  id="course-image"
                  src={course.image}
                  alt={course.title}
                  className="w-full h-[15rem] object-cover relative"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
