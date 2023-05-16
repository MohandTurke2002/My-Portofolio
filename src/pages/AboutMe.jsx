import React from "react";
import Settings from "../components/Settings/Settings";
import Navbar from "../components/NavBar/Navbar";
import html from "./images-about-me/html-5.png";
import css from "./images-about-me/css-3.png";
import javascript from "./images-about-me/js.png";
import pugjs from "./images-about-me/pugjs_logo_icon_170825.png";
import scss from "./images-about-me/sass.png";
import jquery from "./images-about-me/jquery_logo_icon_167804.png";
import gulpjs from "./images-about-me/pngegg.png";
import reactjs from "./images-about-me/structure.png";
import college from "./images-about-me/new-cairo.jpg";
import "./scss/aboutme.scss";

function AboutMe() {
  return (
    <div className="about-me-section">
      <Settings />
      <div className="about-me">
        <h1 className="special-title">
          About <span className="change-color">Me</span>
        </h1>
        <div className="details-about-me">
          <div className="container-info">
            <h3>Name:</h3>
            <p className="change-color">Mohand Hany</p>
          </div>
          <div className="container-info">
            <h3>Age:</h3>
            <p className="change-color">20</p>
          </div>
          <div className="container-info">
            <h3>Nationality:</h3>
            <p className="change-color">Egyption</p>
          </div>
          <div className="container-info">
            <h3>Freelance:</h3>
            <p className="change-color">Available</p>
          </div>
          <div className="container-info">
            <h3>Languages:</h3>
            <p className="change-color">English</p>
          </div>
          <div className="container-info">
            <h3>Projects:</h3>
            <p className="change-color">14+</p>
          </div>
          <div className="container-info">
            <h3>Number:</h3>
            <p className="change-color">+201008044578</p>
          </div>
          <div className="container-info">
            <h3>Email:</h3>
            <p className="change-color">mohandhany35@gmail.com</p>
          </div>
        </div>
        <div className="skills">
          <h1 className="special-title">
            My <span className="change-color">Skills</span>
          </h1>
          <div className="container-skills">
            <div className="wrap-skill">
              <img src={html} alt="html" />
              <div className="html">
                <span></span>
              </div>
            </div>
            <div className="wrap-skill">
              <img src={css} alt="css" />
              <div className="css">
                <span></span>
              </div>
            </div>
            <div className="wrap-skill">
              <img src={javascript} alt="javascript" />
              <div className="javascript">
                <span></span>
              </div>
            </div>
            <div className="wrap-skill">
              <img src={pugjs} alt="pugjs" />
              <div className="pugjs">
                <span></span>
              </div>
            </div>
            <div className="wrap-skill">
              <img src={scss} alt="scss" />
              <div className="scss">
                <span></span>
              </div>
            </div>
            <div className="wrap-skill">
              <img src={jquery} alt="jquery" />
              <div className="jquery">
                <span></span>
              </div>
            </div>
            <div className="wrap-skill">
              <img src={gulpjs} alt="gulpjs" />
              <div className="gulpjs">
                <span></span>
              </div>
            </div>
            <div className="wrap-skill">
              <img src={reactjs} alt="reactjs" />
              <div className="reactjs">
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div className="education">
          <h1 className="special-title">
            My <span className="change-color">Educational</span>
          </h1>
          <div className="wrap-edu">
            <div className="college">
              <img src={college} alt="college" />
            </div>
            <div className="text">
              <p>
                I study at the Higher Institute of{" "}
                <span className="change-color">Computer Sciences</span>,
                Information Systems Division
              </p>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default AboutMe;
