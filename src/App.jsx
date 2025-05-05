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
