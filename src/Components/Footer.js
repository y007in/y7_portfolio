import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";

import "../scss/Footer.scss";

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let content = null;
  if (windowWidth <= 1024) {
    content = (
      <div className="footer_mobile">
        <ul>
          <li className="name">Jang YooJin</li>

          <li
            onClick={() => window.open("https://github.com/y007in", "_blank")}
          >
            <FaGithub />
          </li>
          <li>Copyright © YooJin All Rights Reserved.</li>
        </ul>
      </div>
    );
  } else {
    content = (
      <div className="footer_pc">
        <ul>
          <li className="name">Jang YooJin</li>

          <li>Copyright © YooJin All Rights Reserved.</li>
        </ul>
      </div>
    );
  }

  return content;
};

export default Footer;
