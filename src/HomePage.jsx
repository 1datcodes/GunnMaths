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
        <h2 className="pl-[3.2rem] mb-0 text-2xl font-bold">
          Gunn Math Resources
        </h2>
      </div>

      <div id="courses" className="py-[2.5rem] px-[3.75rem]">
        <div
          id="grid"
          className="py-[0.625rem] px-[3.125rem] grid grid-cols-3 gap-[6.25rem]"
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
                  className="w-full h-[15rem] object-cover relative"
                />
              </Link>
            </div>
          ))}
        </div>
        <footer
          id="buy-me-a-coffee"
          className="absolute bottom-20 left-0 w-full flex flex-col justify-center items-center gap-[1.25rem] z-0"
        >
          <h1 className="text-2xl font-bold text-black">
            Support the development of this website!
          </h1>
          <a 
          className="transition-all ease-in-out duration-500 hover:cursor-pointer hover:scale-102"
          href="https://www.buymeacoffee.com/gunnmaths" target="_blank">
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png"
              alt="Buy Me A Coffee"
              style={{ height: 60 + "px", width: 217 + "px" }}
            />
          </a>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
