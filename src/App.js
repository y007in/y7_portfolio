import { useState, useRef, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { FaArrowAltCircleUp } from "react-icons/fa";

import { About, Project, ProjectDetail } from "pages";
import "App.scss";

function App() {
  const [showButton, setShowButton] = useState(false);
  const dispatch = useDispatch();
  const showNav = useSelector((state) => state.showNav);
  const title = useSelector((state) => state.title);

  const setShowNav = () => {
    dispatch({
      type: "SET_SHOW_NAV",
    });
  };

  const setIsMenuAct = (menuAct) => {
    dispatch({ type: "SET_MENU_ACT", payload: menuAct });
    // console.log("MenuAct", menuAct);
  };

  useEffect(() => {
    
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = title;
  }, [title]);

  const MoveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsMenuAct("");
  };

  const scrollRef = useRef([]);

  const scrollToSection = (e) => {
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
    setIsMenuAct(name);
  };

  // useEffect(() => {
  //   const handleShowButton = () => {
  //     const scrollY = window.scrollY;
  //     const windowHeight = window.innerHeight;

  //     if (scrollY < windowHeight) {
  //       setShowButton(false);
  //       if (showNav) {
  //         setShowNav();
  //       }
  //       setIsMenuAct("");
  //     } else if (scrollY < windowHeight * 2) {
  //       setShowButton(true);
  //       if (!showNav) {
  //         setShowNav();
  //       }
  //       setIsMenuAct("Skills");
  //     } else if (scrollY < windowHeight * 3) {
  //       setIsMenuAct("Project");
  //     } else {
  //       setIsMenuAct("About");
  //     }
  //   };
  //   handleShowButton();

  //   window.addEventListener("scroll", handleShowButton);
  //   return () => {
  //     window.removeEventListener("scroll", handleShowButton);
  //   };
  // }, [showNav, setIsMenuAct, setShowNav]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <About scrollRef={scrollRef} scrollToSection={scrollToSection} />
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
