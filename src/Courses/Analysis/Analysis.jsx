import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import BackButton from "../../BackButton";

const unitModules = import.meta.glob(`./documents/**/*`, { eager: true }); // dynamically import all files regardless of the depth
const groupedUnits = Object.keys(unitModules).reduce(
  (accumulator, filePath) => {
    // accumulator is the object that will hold the units, filePath is the path to the file
    const folderName = filePath.split("/")[2]; // Get the folder name
    if (!accumulator[folderName]) {
      accumulator[folderName] = []; // Initialize an array for the folder if it doesn't exist already
    }
    accumulator[folderName].push({
      name: filePath.split("/").pop().replace(".pdf", ""), // Get the file name without the extension
      path: filePath, // Get the full path to the file
    });

    return accumulator; // Return the accumulator for the next iteration
  },
  {},
); // initial value is an empty object

const units = Object.keys(groupedUnits).map((unit) => {
  return {
    name: unit,
    path: `/analysis/${unit.toLowerCase()}`,
    documents: groupedUnits[unit],
  };
});

// Course Images
const imgModules = import.meta.glob("./analysis-images/*", { eager: true });
const images = Object.keys(imgModules).map((key) => {
    const imageName = key.split("/").pop();
    return {
        name: imageName,
        src: imgModules[key].default,
    };
});

const Analysis = () => {
  return (
    <div id="content" className="mb-[3rem]">
      <Header />
      <div id="units" className="py-[2.5rem] px-[3.75rem]">
        <BackButton />
        <div
          id="quick-title"
          className="text-black pt-[3rem] pl-[3.75rem] text-2xl font-bold"
        >
          <h2 className="mb-[1rem]">Analysis Resources</h2>
        </div>
        <div
          id="grid"
          className="py-[0.625rem] px-[3.125rem] grid grid-cols-3 gap-[6rem]"
        >
          {units.map((unit, index) => {
            return (
              <div
                id="unit"
                key={index}
                onClick={() => (window.location.href = unit.path)}
                className="group relative w-full flex flex-row justify-end items-center gap-[1.25rem] z-0 transition-all duration-300 ease-in-out hover:cursor-pointer hover:scale-102"
              >
                <Link
                  to={unit.path}
                  id="unit-link"
                  className="w-[15rem] h-[15rem] flex flex-row justify-between items-center rounded-[1rem] overflow-hidden"
                >
                  <div
                    id="gradient-overlay"
                    className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-[#023047] from-25% via-70% to-transparent z-10 rounded-[inherit] shadow-sm shadow-black pointer-events-none flex flex-col justify-start items-start"
                  >
                    <h1
                      id="unit-title"
                      className="text-white z-20 pl-[1.5rem] pr-[1rem] my-[1.5rem] text-shadow-sm text-3xl font-bold group-hover:underline decoration-highlight"
                    >
                      {unit.name}
                    </h1>
                    <p
                      id="unit-description"
                      className="text-white z-20 pl-[1.5rem] pr-[1rem] my-[1rem] text-shadow-sm group-hover:underline decoration-highlight"
                    >
                      {unit.documents.length} Tests and Quizzes
                    </p>
                  </div>
                  <img id="unit-image" src={images[index].src} alt={images[index].name} className="w-full h-[15rem] object-cover relative" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Analysis;
