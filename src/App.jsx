import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./HomePage";
import About from "./Header/About";
import Course from "./Courses/Course";
import Unit from "./Courses/Unit";

const courseModules = import.meta.glob(["./Courses/**/*", "!**/*.jsx"], { eager: true }); // dynamically import all files regardless of the depth
const groupedCourses = Object.keys(courseModules).reduce(
  (accumulator, filePath) => {
    // accumulator is the object that will hold the units, filePath is the path to the file
    const courseName = filePath.split("/")[2]; // Get the course name
    if (!accumulator[courseName]) {
      accumulator[courseName] = []; // Initialize an array for the folder if it doesn't exist already
    }
    accumulator[courseName]["path"] = `/${courseName.toLowerCase()}`; // Get the path for the course
    if (filePath.includes("images")) {
      if (!accumulator[courseName]["images"]) {
        accumulator[courseName]["images"] = []; // Initialize an array for the images if it doesn't exist already
      }
      accumulator[courseName]["images"].push({
        image: courseModules[filePath].default, // Get the full path to the image
      })
      return accumulator;
    }
    const unitName = filePath.split("/")[4]; // Get the unit name
    if (!accumulator[courseName][unitName]) {
      accumulator[courseName][unitName] = []; // Initialize an array for the unit if it doesn't exist already
    }
    accumulator[courseName][unitName]["name"] = unitName; // Get the unit name
    accumulator[courseName][unitName]["path"] = `/${courseName.toLowerCase()}/${unitName.toLowerCase()}`; // Get the path for the unit
    accumulator[courseName][unitName].push({
      name: filePath.split("/").pop().replace(".pdf", "").replaceAll("_", " "), // Get the file name without the extension
      file: courseModules[filePath].default, // Get the full path to the file
    });

    return accumulator; // Return the accumulator for the next iteration
  },
  {},
); // initial value is an empty object

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />

        {Object.keys(groupedCourses).map((index) => (
          <>
            <Route
              key={index}
              path={groupedCourses[index]["path"]}
              element={<Course units={groupedCourses[index]} />}
            />
           {
            Object.keys(groupedCourses[index]).map((count) => {
              if (count === "path" || count === "images") {
                return null; // Skip the images unit
              }
              return (
                <Route
                  key={count}
                  path={groupedCourses[index][count]["path"]}
                  element={<Unit resources={groupedCourses[index][count]} />}
                />
              );
            })
           } 
          </>
        ))}
      </Routes>
    </Router>
  );
}
export default App;
