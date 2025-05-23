import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./HomePage";
import About from "./Header/About";
import Updates from "./Header/Updates";
import Course from "./Courses/Course";
import Unit from "./Courses/Unit";

const courseModules = import.meta.glob(["./Courses/**/*", "!**/*.jsx"], {
  eager: true,
}); // dynamically import all files regardless of the depth
const groupedCourses = Object.keys(courseModules).reduce(
  (accumulator, filePath) => {
    // accumulator is the object that will hold the units, filePath is the path to the file
    const courseName = filePath.split("/")[2]; // Get the course name
    if (!accumulator[courseName]) {
      accumulator[courseName] = []; // Initialize an array for the folder if it doesn't exist already
    }
    accumulator[courseName]["name"] = courseName.replaceAll("_", " "); // Get the course name
    accumulator[courseName]["path"] = `/${courseName.toLowerCase()}`; // Get the path for the course
    if (filePath.includes("images")) {
      if (!accumulator[courseName]["images"]) {
        accumulator[courseName]["images"] = []; // Initialize an array for the images if it doesn't exist already
      }
      accumulator[courseName]["images"].push({
        image: courseModules[filePath].default, // Get the full path to the image
      });
      return accumulator;
    }
    const unitName = filePath.split("/")[4]; // Get the unit name
    if (!accumulator[courseName][unitName]) {
      accumulator[courseName][unitName] = []; // Initialize an array for the unit if it doesn't exist already
    }
    accumulator[courseName][unitName]["name"] = unitName.replaceAll("_", " "); // Get the unit name
    accumulator[courseName][unitName]["path"] =
      `/${courseName.toLowerCase()}/${unitName.toLowerCase()}`; // Get the path for the unit
    const pathClone = filePath.split("/");
    pathClone.pop();
    accumulator[courseName][unitName].push({
      category: pathClone.pop().replaceAll("_", " "), // Get the category name
      name: filePath
        .toLowerCase()
        .split("/")
        .pop()
        .replace(".pdf", "")
        .replace(".jpg", "")
        .replace(".jpeg", "")
        .replace(".png", "")
        .replace(".doc", "")
        .replaceAll("_", " "), // Get the file name without the extension
      file: courseModules[filePath].default, // Get the full path to the file
    });

    return accumulator; // Return the accumulator for the next iteration
  },
  {},
); // initial value is an empty object

// Custom resources for courses
groupedCourses["Analysis"]["GAtM"].push({
  category: "Other",
  name: "GAtM Textbook",
  file: "https://gunn-gatm.github.io/",
});
groupedCourses["Analysis"]["GAtM"].push({
  category: "Other",
  name: "Snap Tool",
  file: "https://gunn-gatm.github.io/interactives/snaps",
});
groupedCourses["Analysis"]["GAtM"].push({
  category: "Other",
  name: "Symmetry Groups Tool",
  file: "https://gunn-gatm.github.io/interactives/symmetry_groups",
});
groupedCourses["Analysis"]["Polar_and_3D"].push({
  category: "Other",
  name: "Trig Drill Generator",
  file: "https://sheeptester.github.io/hello-world/drills.html",
});
groupedCourses["CalcBC"]["Polar_and_Parametric"].push({
  category: "Other",
  name: "Trig Drill Generator",
  file: "https://sheeptester.github.io/hello-world/drills.html",
});
groupedCourses["Analysis"]["Polar_and_3D"].push({
  category: "Other",
  name: "Polar Graph Quiz",
  file: "https://csplatti.github.io/ghstools/Tools/polarPractice/polarPractice.html",
});
groupedCourses["CalcBC"]["Polar_and_Parametric"].push({
  category: "Other",
  name: "Polar Graph Quiz",
  file: "https://csplatti.github.io/ghstools/Tools/polarPractice/polarPractice.html",
});

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage Courses={groupedCourses} />} />
        <Route path="/about" element={<About />} />
        <Route path="/updates" element={<Updates />} />

        {Object.keys(groupedCourses).map((index) => (
          <>
            <Route
              key={index}
              path={groupedCourses[index]["path"]}
              element={<Course units={groupedCourses[index]} />}
            />
            {Object.keys(groupedCourses[index]).map((count) => {
              if (count === "path" || count === "images") {
                return null; // Skip the images unit
              }

              return (
                <Route
                  key={count}
                  path={groupedCourses[index][count]["path"]}
                  element={
                    <Unit
                      course={groupedCourses[index]["name"]}
                      unit={groupedCourses[index][count]["name"]}
                      resources={groupedCourses[index][count]}
                    />
                  }
                />
              );
            })}
          </>
        ))}
      </Routes>
    </Router>
  );
}
export default App;
