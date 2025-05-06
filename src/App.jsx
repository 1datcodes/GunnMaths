import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./HomePage";
import About from "./Header/About";

const courseModules = import.meta.glob("./Courses/*/*.jsx", { eager: true });
const courses = Object.keys(courseModules).map((key) => {
  const componentName = key.split("/").pop().replace(".jsx", "");
  return {
    path: `/${componentName.toLowerCase()}/*`,
    component: courseModules[key].default,
  };
});

const unitModules = import.meta.glob(["./Courses/**/*", "!**/*.jsx", "!**/*images"], { eager: true }); // dynamically import all files regardless of the depth
const groupedUnits = Object.keys(unitModules).reduce(
  (accumulator, filePath) => {
    // accumulator is the object that will hold the units, filePath is the path to the file
    const courseName = filePath.split("/")[2]; // Get the course name
    if (!accumulator[courseName]) {
      accumulator[courseName] = []; // Initialize an array for the folder if it doesn't exist already
    }
    const unitName = filePath.split("/")[4]; // Get the unit name
    if (!accumulator[courseName][unitName]) {
      accumulator[courseName][unitName] = []; // Initialize an array for the unit if it doesn't exist already
    }
    accumulator[courseName][unitName].push({
      name: filePath.split("/").pop().replace(".pdf", ""), // Get the file name without the extension
      url: `/${courseName.toLowerCase()}/${unitName.toLowerCase()}`, // Get the URL for the unit
      path: filePath, // Get the full path to the file
    });

    return accumulator; // Return the accumulator for the next iteration
  },
  {},
); // initial value is an empty object
console.log(groupedUnits);

const units = Object.keys(groupedUnits).map((unit) => {
  return {
    name: unit,
    path: `/analysis/${unit.toLowerCase()}`,
    documents: groupedUnits[unit],
  };
});
console.log(units);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />

        {courses.map((course, index) => (
          <Route
            key={index}
            path={course.path}
            element={<course.component />}
          />
        ))}
      </Routes>
    </Router>
  );
}
export default App;
