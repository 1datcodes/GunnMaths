import { Link } from "react-router-dom";
import Header from "./Header/Header";

// Course Images
// Need a way to dynamically import images but I'm tired
import analysis from "./Course-Images/Analysis-cover.png";
import calcbc from "./Course-Images/CalcBC-cover.png";
import stats from "./Course-Images/Stats-cover.png";
const images = {
  analysis: analysis,
  calcbc: calcbc,
  stats: stats,
};

const HomePage = ({ Courses }) => {
  return (
    <div id="content" className="mb-[3rem]">
      <Header />
      <div id="quick-title" className="text-black pt-[3rem] pl-[3.75rem]">
        <h2 className="pl-[1rem] sm:pl-[3.2rem] mb-0 text-2xl font-bold">
          Gunn Math Resources
        </h2>
      </div>

      <div
        id="courses"
        className="flex flex-col justify-around py-[2.5rem] px-[3.75rem] h-[80vh]"
      >
        <div
          id="grid"
          className="py-[0.625rem] px-[1.25rem] sm:px-[3.125rem] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[6.25rem]"
        >
          {Object.keys(Courses).map((course, index) => (
            <div
              id="course"
              key={index}
              className="group relative w-full flex flex-row justify-end items-center gap-[1.25rem] z-0 transition-all duration-300 ease-in-out hover:cursor-pointer hover:scale-102"
              onClick={() => (window.location.href = Courses[course].path)}
            >
              <Link
                id="course-link"
                to={Courses[course].path}
                className="w-[12rem] h-[12rem] sm:w-[15rem] sm:h-[15rem] flex flex-row justify-between items-center rounded-[1rem] overflow-hidden"
              >
                <div
                  id="gradient-overlay"
                  className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-[#023047] from-25% via-70% to-transparent z-10 rounded-[inherit] shadow-sm shadow-black pointer-events-none flex flex-col justify-start items-start"
                >
                  <h1
                    id="course-title"
                    className="text-white text-3xl font-bold z-20 pl-[1.5rem] pr-[1rem] my-[1.25rem] text-shadow-[black 1px 1px 10px] group-hover:underline decoration-highlight"
                  >
                    {Courses[course].name}
                  </h1>
                  <p
                    id="course-description"
                    className="text-white z-20 pl-[1.5rem] pr-[1rem] my-[1rem] text-shadow-[black 1px 1px 10px] group-hover:underline decoration-highlight"
                  >
                    {Courses[course].name} Course Resources
                  </p>
                </div>
                <img
                  id="course-image"
                  src={images[course.toLowerCase()]}
                  alt={Courses[course].name}
                  className="w-full h-[12rem] sm:h-[15rem] object-cover relative"
                />
              </Link>
            </div>
          ))}
        </div>
        <div id="announcements" className="mt-10 sm:ml-15">
          <h1 id="announce-title" className="flex sm:block text-3xl font-bold">
            Announcements!
          </h1>
          <ul className="text-xl font-semibold list-disc *:text-md *:ml-8 *:p-2">
            <li>Stats page live!</li>
            <li>2025 Calc raw tests uploaded</li>
            <li>
              Kaicheng and Michi graduated! New members will be maintaining this
              website
            </li>
          </ul>
        </div>
        <div
          id="buy-me-a-coffee"
          className="w-full flex flex-col justify-center items-center mt-10 gap-[1.25rem] z-0"
        >
          <h1 className="text-2xl font-bold text-black text-center">
            Support the development of this website!
          </h1>
          <a
            className="transition-all ease-in-out duration-500 hover:cursor-pointer hover:scale-102"
            href="https://www.buymeacoffee.com/gunnmaths"
            target="_blank"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png"
              alt="Buy Me A Coffee"
              style={{ height: 60 + "px", width: 217 + "px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
