import { act, useState } from "react";
import Header from "../Header/Header";
import BackButton from "../BackButton";

function Unit({ resources }) {
  const [activeIndex, setActiveIndex] = useState({
    Tests: false,
    Quizzes: false,
  });

  const handleClick = (category, type = null) => {
    if (type === null) {
      if (!activeIndex[category]) {
        setActiveIndex((prevIndex) => ({
          ...prevIndex,
          [category]: true,
        }));
      } else {
        setActiveIndex((prevIndex) => ({
          ...prevIndex,
          [category]: !prevIndex[category],
        }));
      }
      return;
    }
    setActiveIndex((prevIndex) => ({
      ...prevIndex,
      [category]: {
        ...prevIndex[category],
        [type]: !prevIndex[category]?.[type],
      },
    }));
  };

  const organizedResources = resources.reduce((accumulator, resource) => {
    if (!accumulator["Tests"]) {
      accumulator["Tests"] = [];
    }
    if (!accumulator["Quizzes"]) {
      accumulator["Quizzes"] = [];
    }

    if (resource.name.includes("Test")) {
      if (resource.name.includes("Raw")) {
        if (!accumulator["Tests"]["Raw"]) {
          accumulator["Tests"]["Raw"] = [];
        }
        accumulator["Tests"]["Raw"].push({
          name: resource.name,
          file: resource.file,
        });
      } else if (resource.name.includes("Blank")) {
        if (!accumulator["Tests"]["Blank"]) {
          accumulator["Tests"]["Blank"] = [];
        }
        accumulator["Tests"]["Blank"].push({
          name: resource.name,
          file: resource.file,
        });
      }
    } else if (resource.name.includes("Quiz")) {
      if (resource.name.includes("Raw")) {
        if (!accumulator["Quizzes"]["Raw"]) {
          accumulator["Quizzes"]["Raw"] = [];
        }
        accumulator["Quizzes"]["Raw"].push({
          name: resource.name,
          file: resource.file,
        });
      } else if (resource.name.includes("Blank")) {
        if (!accumulator["Quizzes"]["Blank"]) {
          accumulator["Quizzes"]["Blank"] = [];
        }
        accumulator["Quizzes"]["Blank"].push({
          name: resource.name,
          file: resource.file,
        });
      }
    }
    return accumulator;
  }, []);
  return (
    <div id="content" className="">
      <Header />
      <div id="resources" className="px-[1.5rem] py-[1rem]">
        <BackButton />
        <div id="accordion" className="pt-[1rem] w-full">
          {Object.keys(organizedResources).map((category, index) => {
            return (
              <div key={index} className="py-0.5 pl-5 flex flex-col">
                <button
                  id="dropdown"
                  onClick={() => handleClick(category)}
                  className="items-center bg-gray-200 border-1 rounded-sm text-black cursor-pointer flex text-base gap-1.5 justify-start w-full p-4.5 text-left"
                >
                  {category}{" "}
                  <span id="arrow" className={`transition-all duration-300 ease-in-out ${activeIndex[category] ? "rotate-90" : "rotate-none"}`}>
                    ▶
                  </span>
                </button>
                <div id="dropdown-content" className={`overflow-hidden transition-all duration-300 ease-in-out w-9/10 self-end ${
                  activeIndex[category] ? "max-h-screen" : "max-h-0"
                }`}>
                  {Object.keys(organizedResources[category]).map(
                    (subcategory, subIndex) => {
                      return (
                        <div
                          key={subIndex}
                          className="mt-1"
                        >
                          <button
                            id="dropdown"
                            key={subIndex}
                            onClick={() => handleClick(category, subcategory)}
                            className="items-center bg-gray-200 border-1 rounded-sm text-black cursor-pointer flex text-base gap-1.5 justify-start w-full p-4.5 text-left"
                          >
                            {subcategory}{" "}
                            <span
                              id="arrow"
                              className={`transform transition-transform duration-300 ease-in-out ${
                                activeIndex[category]?.[subcategory] ? "rotate-90" : "rotate-none"
                              }`}
                            >
                              ▶
                            </span>
                          </button>
                          <div
                            id="dropdown-content"
                            className={`flex justify-end overflow-hidden transition-all duration-300 ease-in-out ${
                              activeIndex[category]?.[subcategory]
                                ? "max-h-screen"
                                : "max-h-0"
                            }`}
                          >
                            <div id="files" className="w-9/10 border-1 my-1 rounded-sm">
                              {organizedResources[category][subcategory].map(
                                (resource, resourceIndex) => {
                                  const active = activeIndex[category]
                                    ? activeIndex[category][subcategory]
                                      ? true
                                      : false
                                    : false;

                                  return active ? (
                                    <div key={resourceIndex} onClick={() => window.open(resource.file, "_blank", "noopener, noreferrer")} className="px-[1rem] py-[0.25rem] hover:bg-gray-100 hover:cursor-pointer hover:underline">
                                      <a
                                        href={
                                          resource.file
                                        }
                                        className=""
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {
                                          resource.name
                                        }
                                      </a>
                                    </div>
                                  ) : null;
                                },
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    },
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Unit;
