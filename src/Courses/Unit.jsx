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
      <div id="resources" className="p-[2rem]">
        <BackButton />
        {Object.keys(organizedResources).map((category, index) => {
          return (
            <div key={index}>
              <button
                id="dropdown"
                onClick={() => handleClick(category)}
                className="border-1 w-full text-left mt-2 p-2 rounded-md bg-gray-200"
              >
                {category}{" "}
                <span id="arrow" className={activeIndex[index] ? "rotate" : ""}>
                  ▶
                </span>
              </button>
              <div id="dropdown-content" className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex[category] ? "max-h-screen" : "max-h-0"
              }`}>
                {Object.keys(organizedResources[category]).map(
                  (subcategory, subIndex) => {
                    const active = activeIndex[category] ? true : false;
                    return (
                      <div
                        key={subIndex}
                        className="border-1 mt-2 p-2 rounded-md bg-gray-100"
                      >
                        <button
                          id="dropdown"
                          key={subIndex}
                          onClick={() => handleClick(category, subcategory)}
                          className="w-full text-left flex justify-between items-center"
                        >
                          {subcategory}{" "}
                          <span
                            id="arrow"
                            className={`transform transition-transform duration-300 ease-in-out ${
                              activeIndex[category]?.[subcategory]

                            }`}
                          >
                            ▶
                          </span>
                        </button>
                        <div
                          id="dropdown-content"
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            activeIndex[category]?.[subcategory]
                              ? "max-h-screen"
                              : "max-h-0"
                          }`}
                        >
                          {organizedResources[category][subcategory].map(
                            (resource, resourceIndex) => {
                              const active = activeIndex[category]
                                ? activeIndex[category][subcategory]
                                  ? true
                                  : false
                                : false;

                              return active ? (
                                <div key={resourceIndex} className="border-1 mt-2 p-2 rounded-md bg-white">
                                  <a
                                    href={
                                      resource.file
                                    }
                                    className="text-blue-500 hover:underline"
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
                    );
                  },
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Unit;
