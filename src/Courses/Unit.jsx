import { useState } from "react";
import Header from "../Header/Header";
import BackButton from "../BackButton";

function Unit({ resources }) {
  const [openCategories, setOpenCategories] = useState({});
  const [openTypes, setOpenTypes] = useState({});

  const toggleCategory = (category) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))
    console.log("open categories", openCategories);
    console.log("open types", openTypes);
  };
  const toggleType = (category, type) => {
    if (openCategories[category]) {
      setOpenTypes((prev) => ({
        ...prev,
        [`${category}-${type}`]: !prev[`${category}-${type}`],
      }));
    };
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
      <div id="resources" className="">
        <BackButton />
        {Object.keys(organizedResources).map((category, index) => {
          console.log(category);
          return (
            <div key={index} id="category" className="" onClick={() => toggleCategory(category)}>
              <h1>{category}</h1>
              {openCategories[category] && (
                <div id="container" className="">
                  {Object.keys(organizedResources[category]).map((type, index) => {
                    return (
                      <div key={index} id="type" className="" onClick={() => toggleType(category, type)}>
                        <h1>{type}</h1>
                        {openTypes[`${category}-${type}`] && (
                        <div id="resources" className="">
                          {organizedResources[category][type].map((resource, index) => {
                            return (
                              <a href={resource.file} target="_blank" rel="noopener noreferrer" key={index} className="">{resource.name}</a>
                            )
                          })}
                        </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Unit;
