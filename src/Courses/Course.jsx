import { Link } from "react-router-dom";
import Header from "../Header/Header";
import BackButton from "../BackButton";

function Course({ units }) {
  const coverImages = units["images"];
  const unitKeys = Object.keys(units).filter(
    (key) => !["images", "path", "name"].includes(key), // Removes all the keys that are not units (pray this works)
  );

  return (
    <div id="content" className="mb-[3rem]">
      <Header />
      <div id="units" className="py-[2.5rem] px-[1.5rem] sm:px-[3.75rem]">
        <BackButton />
        <div
          id="quick-title"
          className="text-black pt-[3rem] pl-[3.75rem] text-2xl font-bold"
        >
          <h2 className="mb-[1rem]">{units["name"]} Resources</h2>
        </div>
        <div
          id="grid"
          className="py-[0.625rem] px-[1.5rem] sm:px-[3.125rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[6rem]"
        >
          {unitKeys.map((unit, index) => {
            // if (unit === "images" || unit === "path" || unit === "name") {
            //   return null; // Skip the images unit
            // }

            return (
              <div
                id="unit"
                key={index}
                onClick={() => (window.location.href = units[unit]["path"])}
                className="group relative w-full flex flex-row justify-end items-center gap-[1.25rem] z-0 transition-all duration-300 ease-in-out hover:cursor-pointer hover:scale-102"
              >
                <Link
                  to={units[unit]["path"]}
                  id="unit-link"
                  className="w-[12rem] h-[12rem] sm:w-[15rem] sm:h-[15rem] flex flex-row justify-between items-center rounded-[1rem] overflow-hidden"
                >
                  <div
                    id="gradient-overlay"
                    className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-[#023047] from-25% via-70% to-transparent z-10 rounded-[inherit] shadow-sm shadow-black pointer-events-none flex flex-col justify-start items-start"
                  >
                    <h1
                      id="unit-title"
                      className="text-white z-20 pl-[1.5rem] pr-[1rem] my-[1rem] sm:my-[1.5rem] text-shadow-sm text-2xl sm:text-3xl font-bold group-hover:underline decoration-highlight"
                    >
                      {units[unit]["name"]}
                    </h1>
                    <p
                      id="unit-description"
                      className="text-white z-20 pl-[1.5rem] pr-[1rem] my-[0.5rem] sm:my-[1rem] text-shadow-sm group-hover:underline decoration-highlight"
                    >
                      {units[unit].length} Study Resources
                    </p>
                  </div>
                  <img
                    id="unit-image"
                    src={coverImages[index]?.image}
                    // src={coverImages[index - 3].image} // Adjusted index to skip name, images and path
                    alt={"image"}
                    className="w-full h-[12rem] sm:h-[15rem] object-contain relative"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Course;
