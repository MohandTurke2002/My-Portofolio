import React, { useEffect } from "react";
import Settings from "../components/Settings/Settings";
import Navbar from "../components/NavBar/Navbar";
import "./scss/landing.scss";
import { Link } from "react-router-dom";
import Typed from "typed.js";

function Landing() {
  useEffect(() => {
    if (document.readyState === "complete") {
      let dynamic = document.getElementById("dynamic");
      new Typed(dynamic, {
        strings: ["Front End Developer", "UI and UX Designer"],
        typeSpeed: 100,
        startDelay: 0,
        backSpeed: 50,
        loop: true,
        loopCount: Infinity,
        cursorChar: "|",
      });
    }
  });
  return (
    <div className="landing change-before">
      <Settings />
      <div className="landing-wrap">
        <div className="image"></div>
        <div className="text">
          <h1>Hello My Friend...</h1>
          <h1>My Name's Muhannad,</h1>
          <h1>
            Im a <span className="change-color" id="dynamic"></span>
          </h1>
          <div className="know-more">
            <Link to="/AboutMe">
              <div className="more change-bordercl">
                <p>More About Me</p>
                <span>
                  <i className="bi bi-arrow-right"></i>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Landing;
