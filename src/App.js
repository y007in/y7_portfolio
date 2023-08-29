import "./App.scss";
import { Routes, Route } from "react-router-dom";

import About from "./Pages/About";
import Project from "./Pages/Project";
import ProjectDetail from "./Pages/ProjectDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/project" element={<ProjectDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
