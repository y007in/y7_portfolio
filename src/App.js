import "./App.css";
import { Routes, Route } from "react-router-dom";

import Intro from "./Pages/Intro";
import About from "./Pages/About";
import Project from "./Pages/Project";
import ProjectDetail from "./Pages/ProjectDetail";
import End from "./Pages/End";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
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
