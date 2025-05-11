import { useState, useRef } from "react";
import Header from "../Header/Header";
import BackButton from "../BackButton";
import Generator from "../AIgen/Generator";

function Unit({ course, unit, resources }) {
  const [activeIndex, setActiveIndex] = useState({});

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
    if (!accumulator[resource.category]) {
      accumulator[resource.category] = [];
    }

    const name = resource.name.toLowerCase();
    if (
      name.includes("raw") ||
      name.includes("answer") ||
      name.includes("key") ||
      name.includes("guide") ||
      name.includes("scor")
    ) {
      if (!accumulator[resource.category]["Key"]) {
        accumulator[resource.category]["Key"] = [];
      }

      accumulator[resource.category]["Key"].push({
        name: resource.name,
        file: resource.file,
      });
    } else {
      if (!accumulator[resource.category]["Blank"]) {
        accumulator[resource.category]["Blank"] = [];
      }
      accumulator[resource.category]["Blank"].push({
        name: resource.name,
        file: resource.file,
      });
    }

    return accumulator;
  }, []);

  const getHeight = (ref) => {
    return ref.current ? ref.current.scrollHeight : 0;
  };

  return (
    <div id="content" className="h-fit w-full z-0 mb-[10rem]">
      <Header />
      <div id="resources" className="py-[2.5rem] px-[3.75rem] flex flex-col">
        <BackButton />
        <div
          id="quick-title"
          className="text-black pt-[2rem] pl-[2.75rem] text-2xl font-bold"
        >
          <h2 className="mb-[1rem]">{unit} Resources</h2>
        </div>
        <div id="accordion" className="pt-[1rem] w-full">
          {Object.keys(organizedResources).map((category, index) => {
            const categoryRef = useRef(null);
            return (
              <div key={index} className="py-0.5 pl-5 flex flex-col">
                <button
                  id="dropdown"
                  onClick={() => handleClick(category)}
                  className="items-center bg-gray-100 border-1 rounded-sm text-black cursor-pointer flex text-base gap-1.5 justify-start w-full p-4.5 text-left hover:bg-gray-150"
                >
                  {category}{" "}
                  <span
                    id="arrow"
                    className={`transition-all duration-300 ease-in-out ${activeIndex[category] ? "rotate-90" : "rotate-none"}`}
                  >
                    ▶
                  </span>
                </button>
                <div
                  id="dropdown-content"
                  ref={categoryRef}
                  style={{
                    height: activeIndex[category] ? "fit-content" : "0",
                  }}
                  className={`overflow-hidden transition-all duration-300 ease-in-out w-95/100 self-end`}
                >
                  {Object.keys(organizedResources[category]).map(
                    (subcategory, subIndex) => {
                      const subcategoryRef = useRef(null);
                      return (
                        <div key={subIndex} className="pt-1">
                          <button
                            id="dropdown"
                            key={subIndex}
                            onClick={() => handleClick(category, subcategory)}
                            className="items-center bg-gray-100 border-1 rounded-sm text-black cursor-pointer flex text-base gap-1.5 justify-start w-full p-4.5 text-left"
                          >
                            {subcategory}{" "}
                            <span
                              id="arrow"
                              className={`transform transition-transform duration-300 ease-in-out ${
                                activeIndex[category]?.[subcategory]
                                  ? "rotate-90"
                                  : "rotate-none"
                              }`}
                            >
                              ▶
                            </span>
                          </button>
                          <div
                            id="dropdown-content"
                            ref={subcategoryRef}
                            style={{
                              height: activeIndex[category]?.[subcategory]
                                ? `${getHeight(subcategoryRef)}px`
                                : "0",
                            }}
                            className={`flex justify-end overflow-hidden transition-all duration-300 ease-in-out`}
                          >
                            <div
                              id="files"
                              className="w-95/100 border-1 my-1 rounded-sm h-fit z-10"
                            >
                              {organizedResources[category][subcategory].map(
                                (resource, resourceIndex) => {
                                  return organizedResources[category]?.[
                                    subcategory
                                  ] ? (
                                    <div
                                      key={resourceIndex}
                                      onClick={() =>
                                        window.open(
                                          resource.file,
                                          "_blank",
                                          "noopener, noreferrer",
                                        )
                                      }
                                      className="px-[1rem] py-[0.25rem] hover:bg-gray-100 hover:cursor-pointer hover:underline"
                                    >
                                      <a
                                        href={resource.file}
                                        className=""
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {resource.name}
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
        <Generator course={course} unit={unit} />
      </div>
    </div>
  );
}

export default Unit;
