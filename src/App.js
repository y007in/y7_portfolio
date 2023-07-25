import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Intro from "./Pages/Intro";
import About from "./Pages/About";
import Project from "./Pages/Project";
import ProjectDetail from "./Pages/ProjectDetail";
import End from "./Pages/End";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/project/:id" element={<ProjectDetail />}></Route>
        <Route path="/end" element={<End />}></Route>
      </Routes>
    </div>
  );
}

export default App;
