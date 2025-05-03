import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./HomePage";

const courseModules = import.meta.glob("./Courses/*/*.jsx", { eager: true });
const courses = Object.keys(courseModules).map((key) => {
  const componentName = key.split("/").pop().replace(".jsx", "");
  return {
    path: `/${componentName.toLowerCase()}`,
    component: courseModules[key].default,
  }
})
console.log(courses);
function App() {
  return (
    <Router>
      <Routes>
        {courses.map((course, index) => (
          <Route 
            key={index}
            path={course.path}
            element={<course.component />}
          />
        ))}
        <Route
          path="/"
          element={<HomePage />}
        />
      </Routes>
    </Router>
  );
}
export default App;
