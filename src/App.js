import "./App.scss";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import react, { useState, useRef, useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

import About from "./Pages/About";
import Project from "./Pages/Project";
import ProjectDetail from "./Pages/ProjectDetail";

function App() {
  const [showButton, setShowButton] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [isMenuAct, setIsMenuAct] = useState("");

  const MoveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsMenuAct("");
  };

  const scrollRef = useRef([]);
  const handleScrollView = (e) => {
    const name = e.target.innerText;
    const category = {
      Skills: 0,
      Project: 1,
      About: 2,
    };
    if (scrollRef.current[category[name]]) {
      scrollRef.current[category[name]].scrollIntoView({
        behavior: "smooth",
      });
    }
    setIsMenuAct(e.target.innerText);
  };
  useEffect(() => {
    const handleShowButton = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY < windowHeight) {
        setShowButton(false);
        setShowNav(false);
        setIsMenuAct("");
      } else if (scrollY < windowHeight * 2) {
        setShowButton(true);
        setShowNav(true);
        setIsMenuAct("Skills");
      } else if (scrollY < windowHeight * 3) {
        setIsMenuAct("Project");
      } else {
        setIsMenuAct("About");
      }
    };

    // 초기 로딩 시 실행하여 초기 isMenuAct 설정
    handleShowButton();

    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <About
              showButton={showButton}
              showNav={showNav}
              isMenuAct={isMenuAct}
              scrollRef={scrollRef}
              handleScrollView={handleScrollView}
              MoveToTop={MoveToTop}
            />
          }
        ></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/project/:id" element={<ProjectDetail />}></Route>
      </Routes>
      {showButton && (
        <button className="top" onClick={MoveToTop}>
          <FaArrowAltCircleUp />
        </button>
      )}
    </div>
  );
}

export default App;
