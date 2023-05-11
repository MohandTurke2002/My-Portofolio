import React from "react";
import Settings from "../components/Settings/Settings";
import Navbar from "../components/NavBar/Navbar";
import "./scss/landing.scss";
import { Link } from "react-router-dom";
import picture from "./Untitled.jpg";

function Landing() {
  return (
    <div className="landing">
      <Settings />
      <div className="landing-wrap">
        <div className="image">
          <img src={picture} alt="foto" />
        </div>
        <div className="text">
          <h1>Hello My Friends</h1>
          <h1>My Name Mohand,</h1>
          <h1>Im a Front End Developer</h1>
          <div className="know-more">
            <p>More About Me</p>
            <Link to="/AboutMe">
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Landing;
