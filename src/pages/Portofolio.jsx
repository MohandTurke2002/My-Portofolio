import React from "react";
import Settings from "../components/Settings/Settings";
import Navbar from "../components/NavBar/Navbar";
import leon from "./images-portofolio/leon.png";
import kasper from "./images-portofolio/kasper.png";
import bondi from "./images-portofolio/bondi.png";
import clipboard from "./images-portofolio/clipboard.png";
import doob from "./images-portofolio/doob.png";
import modus from "./images-portofolio/modus.png";
import landpageEl from "./images-portofolio/landpageEL.png";
import dashboatd from "./images-portofolio/simple-dashboard.png";
import carddetails from "./images-portofolio/card-details.png";
import simplecrud from "./images-portofolio/simple-crud.png";
import game from "./images-portofolio/game.png";
import iptracker from "./images-portofolio/ip-tracker.png";
import weather from "./images-portofolio/weather.png";
import creatyourtask from "./images-portofolio/creat-your-task.png";
import Popup from "reactjs-popup";
import "./scss/protofolio.scss";
import "animate.css";

function Portofolio() {
  return (
    <div className="portofolio">
      <Settings />
      <div className="container-portofolio">
        <h1 className="special-title">
          My <span className="change-color">Portofolio</span>
        </h1>
        <div className="container-projects">
          <div className="image-project">
            <img src={leon} alt="leon-pr" />
            <Popup
              trigger={<div className="change-backgr popdet">Show Project</div>}
              position="center center"
            >
              <div className="pop-container">
                <h3 className="change-color title">Leon Project</h3>
                <div className="details">
                  <div>
                    <h4>Project Type: </h4>
                    <p>Static Web</p>
                  </div>
                  <div>
                    <h4>Languages: </h4>
                    <p>HTML,CSS</p>
                  </div>
                  <div>
                    <h4>FrameWorks: </h4>
                    <p>whithout FrameWorks</p>
                  </div>
                  <div>
                    <h4>Libraries: </h4>
                    <p>whithout Libraries</p>
                  </div>
                  <div>
                    <h4>Describtion: </h4>
                    <p>this is my first project in front end</p>
                  </div>
                  <div>
                    <h4>Link: </h4>
                    <a
                      className="change-color link"
                      href="https://mohandturke2002.github.io/ProjectLeon/Temp-1html.html"
                      target="blank"
                    >
                      Leon
                    </a>
                  </div>
                </div>
                <img src={leon} alt="leon-pr" />
              </div>
            </Popup>
          </div>
          <div className="image-project">
            <img src={kasper} alt="kasper-pr" />
            <Popup
              trigger={<div className="change-backgr popdet">Show Project</div>}
              position="center center"
            >
              <div className="pop-container">
                <h3 className="change-color title">Kasper Project</h3>
                <div className="details">
                  <div>
                    <h4>Project Type: </h4>
                    <p>Static Web</p>
                  </div>
                  <div>
                    <h4>Languages: </h4>
                    <p>HTML,CSS</p>
                  </div>
                  <div>
                    <h4>FrameWorks: </h4>
                    <p>whithout FrameWorks</p>
                  </div>
                  <div>
                    <h4>Libraries: </h4>
                    <p>whithout Libraries</p>
                  </div>
                  <div>
                    <h4>Describtion: </h4>
                    <p>this is my second project in front end</p>
                  </div>
                  <div>
                    <h4>Link: </h4>
                    <a
                      className="change-color link"
                      href="https://mohandturke2002.github.io/ProjectKasper/Kasper.html"
                      target="blank"
                    >
                      Kasper
                    </a>
                  </div>
                </div>
                <img src={kasper} alt="kasper-pr" />
              </div>
            </Popup>
          </div>
          <div className="image-project">
            <img src={bondi} alt="bondi-pr" />
            <Popup
              trigger={<div className="change-backgr popdet">Show Project</div>}
              position="center center"
            >
              <div className="pop-container">
                <h3 className="change-color title">Bondy Project</h3>
                <div className="details">
                  <div>
                    <h4>Project Type: </h4>
                    <p>Static Web & little animation</p>
                  </div>
                  <div>
                    <h4>Languages: </h4>
                    <p>HTML,CSS</p>
                  </div>
                  <div>
                    <h4>FrameWorks: </h4>
                    <p>whithout FrameWorks</p>
                  </div>
                  <div>
                    <h4>Libraries: </h4>
                    <p>BootStrab</p>
                  </div>
                  <div>
                    <h4>Describtion: </h4>
                    <p>this project was test my skills in Bootstrab library</p>
                  </div>
                  <div>
                    <h4>Link: </h4>
                    <a
                      className="change-color link"
                      href="https://mohandturke2002.github.io/ProjectBondi/index.html"
                      target="blank"
                    >
                      Bondi
                    </a>
                  </div>
                </div>
                <img src={bondi} alt="bondi-pr" />
              </div>
            </Popup>
          </div>
          <div className="image-project">
            <img src={clipboard} alt="clipboard-pr" />
            <Popup
              trigger={<div className="change-backgr popdet">Show Project</div>}
              position="center center"
            >
              <div className="pop-container">
                <h3 className="change-color title">Clipboard Project</h3>
                <div className="details">
                  <div>
                    <h4>Project Type: </h4>
                    <p>Static Web</p>
                  </div>
                  <div>
                    <h4>Languages: </h4>
                    <p>HTML,CSS</p>
                  </div>
                  <div>
                    <h4>FrameWorks: </h4>
                    <p>whithout FrameWorks</p>
                  </div>
                  <div>
                    <h4>Libraries: </h4>
                    <p>BootStrab</p>
                  </div>
                  <div>
                    <h4>Describtion: </h4>
                    <p>this project contribute with my friend</p>
                  </div>
                  <div>
                    <h4>Link: </h4>
                    <a
                      className="change-color link"
                      href="https://mohandturke2002.github.io/ProjectClipboard/"
                      target="blank"
                    >
                      Clipboard
                    </a>
                  </div>
                </div>
                <img src={clipboard} alt="clipboard-pr" />
              </div>
            </Popup>
          </div>
          <div className="image-project">
            <img src={doob} alt="doob-pr" />
            <Popup
              trigger={<div className="change-backgr popdet">Show Project</div>}
              position="center center"
            >
              <div className="pop-container">
                <h3 className="change-color title">Doob Project</h3>
                <div className="details">
                  <div>
                    <h4>Project Type: </h4>
                    <p>Dynamic Web</p>
                  </div>
                  <div>
                    <h4>Languages: </h4>
                    <p>HTML,SCSS,JavaScript</p>
                  </div>
                  <div>
                    <h4>FrameWorks: </h4>
                    <p>whithout FrameWorks</p>
                  </div>
                  <div>
                    <h4>Libraries: </h4>
                    <p>SwiperJs,BootStrab</p>
                  </div>
                  <div>
                    <h4>Describtion: </h4>
                    <p>this landing page is more advanced</p>
                  </div>
                  <div>
                    <h4>Link: </h4>
                    <a
                      className="change-color link"
                      href="https://mohandturke2002.github.io/ProjectDoob/html/index.html"
                      target="blank"
                    >
                      Doob
                    </a>
                  </div>
                </div>
                <img src={doob} alt="doob-pr" />
              </div>
            </Popup>
          </div>
          <div className="image-project">
            <img src={modus} alt="modus-pr" />
            <Popup
              trigger={<div className="change-backgr popdet">Show Project</div>}
              position="center center"
            >
              <div className="pop-container">
                <h3 className="change-color title">Modus Project</h3>
                <div className="details">
                  <div>
                    <h4>Project Type: </h4>
                    <p>Dynamic Web</p>
                  </div>
                  <div>
                    <h4>Languages: </h4>
                    <p>HTML,ScSS,JavaScribt,Jquery</p>
                  </div>
                  <div>
                    <h4>FrameWorks: </h4>
                    <p>whithout FrameWorks</p>
                  </div>
                  <div>
                    <h4>Libraries: </h4>
                    <p>Swiperjs,BootStrab</p>
                  </div>
                  <div>
                    <h4>Describtion: </h4>
                    <p>landing page for furniture and more skills in it</p>
                  </div>
                  <div>
                    <h4>Link: </h4>
                    <a
                      className="change-color link"
                      href="https://mohandturke2002.github.io/ProjectModus/index.html"
                      target="blank"
                    >
                      Modus
                    </a>
                  </div>
                </div>
                <img src={modus} alt="modus-pr" />
              </div>
            </Popup>
          </div>
          <div className="image-project">
            <img src={landpageEl} alt="landpageEl-pr" />
            <Popup
              trigger={<div className="change-backgr popdet">Show Project</div>}
              position="center center"
            >
              <div className="pop-container ">
                <h3 className="change-color title">LandpageEl Project</h3>
                <div className="details">
                  <div>
                    <h4>Project Type: </h4>
                    <p>Dynamic Web</p>
                  </div>
                  <div>
                    <h4>Languages: </h4>
                    <p>HTML,SCSS,JavaScript,Jquery</p>
                  </div>
                  <div>
                    <h4>FrameWorks: </h4>
                    <p>whithout FrameWorks</p>
                  </div>
                  <div>
                    <h4>Libraries: </h4>
                    <p>Bootstrab</p>
                  </div>
                  <div>
                    <h4>Describtion: </h4>
                    <p>this project is a third Template from Elzero</p>
                  </div>
                  <div>
                    <h4>Link: </h4>
                    <a
                      className="change-color link"
                      href="https://mohandturke2002.github.io/ProjectELzero/"
                      target="blank"
                    >
                      LandpageEl
                    </a>
                  </div>
                </div>
                <img src={landpageEl} alt="landpageEl-pr" />
              </div>
            </Popup>
          </div>
          <div className="image-project">
            <img src={dashboatd} alt="dashboatd-pr" />
            <Popup
              trigger={<div className="change-backgr popdet">Show Project</div>}
              position="center center"
            >
              <div className="pop-container">
                <h3 className="change-color title">Dashboard Project</h3>
                <div className="details">
                  <div>
                    <h4>Project Type: </h4>
                    <p>Static Web</p>
                  </div>
                  <div>
                    <h4>Languages: </h4>
                    <p>PugJs,SCSS</p>
                  </div>
                  <div>
                    <h4>FrameWorks: </h4>
                    <p>whithout FrameWorks</p>
                  </div>
                  <div>
                    <h4>Libraries: </h4>
                    <p>BootStrab</p>
                  </div>
                  <div>
                    <h4>Describtion: </h4>
                    <p>
                      this project is a fourth Template from Elzero with 8 pages
                    </p>
                  </div>
                  <div>
                    <h4>Link: </h4>
                    <a
                      className="change-color link"
                      href="https://mohandturke2002.github.io/ProjectDashboard/build/index.html"
                      target="blank"
                    >
                      Dashboard
                    </a>
                  </div>
                </div>
                <img src={dashboatd} alt="dashboatd-pr" />
              </div>
            </Popup>
          </div>
          <div className="image-project">
            <img src={carddetails} alt="carddetails-pr" />
            <Popup
              trigger={<div className="change-backgr popdet">Show Project</div>}
              position="center center"
            >
              <div className="pop-container">
                <h3 className="change-color title">CardDetails Project</h3>
                <div className="details">
                  <div>
                    <h4>Project Type: </h4>
                    <p>Static Web</p>
                  </div>
                  <div>
                    <h4>Languages: </h4>
                    <p>HTML,CSS,JavaScript</p>
                  </div>
                  <div>
                    <h4>FrameWorks: </h4>
                    <p>whithout FrameWorks</p>
                  </div>
                  <div>
                    <h4>Libraries: </h4>
                    <p>BootStrab</p>
                  </div>
                  <div>
                    <h4>Describtion: </h4>
                    <p>this project practice for page payment logic</p>
                  </div>
                  <div>
                    <h4>Link: </h4>
                    <a
                      className="change-color link"
                      href="https://mohandturke2002.github.io/CardDetails/index.html"
                      target="blank"
                    >
                      CardDetails
                    </a>
                  </div>
                </div>
                <img src={carddetails} alt="carddetails-pr" />
              </div>
            </Popup>
          </div>
          <div className="image-project">
            <img src={simplecrud} alt="simplecrud-pr" />
            <Popup
              trigger={<div className="change-backgr popdet">Show Project</div>}
              position="center center"
            >
              <div className="pop-container">
                <h3 className="change-color title">Crud Project</h3>
                <div className="details">
                  <div>
                    <h4>Project Type: </h4>
                    <p>Static Web</p>
                  </div>
                  <div>
                    <h4>Languages: </h4>
                    <p>CSS</p>
                  </div>
                  <div>
                    <h4>FrameWorks: </h4>
                    <p>ReactJs</p>
                  </div>
                  <div>
                    <h4>Libraries: </h4>
                    <p>whithout Libraries</p>
                  </div>
                  <div>
                    <h4>Describtion: </h4>
                    <p>this project a simple CRUD app by ReactJs</p>
                  </div>
                  <div>
                    <h4>Link: </h4>
                    <a
                      className="change-color link"
                      href="https://todo-reactjs-2023.netlify.app/"
                      target="blank"
                    >
                      Crud
                    </a>
                  </div>
                </div>
                <img src={simplecrud} alt="simplecrud-pr" />
              </div>
            </Popup>
          </div>
          <div className="image-project">
            <img src={game} alt="game-pr" />
            <Popup
              trigger={<div className="change-backgr popdet">Show Project</div>}
              position="center center"
            >
              <div className="pop-container">
                <h3 className="change-color title">Game Project</h3>
                <div className="details">
                  <div>
                    <h4>Project Type: </h4>
                    <p>Static Web</p>
                  </div>
                  <div>
                    <h4>Languages: </h4>
                    <p>CSS</p>
                  </div>
                  <div>
                    <h4>FrameWorks: </h4>
                    <p>ReactJs</p>
                  </div>
                  <div>
                    <h4>Libraries: </h4>
                    <p>whithout Libraries</p>
                  </div>
                  <div>
                    <h4>Describtion: </h4>
                    <p>
                      this project is a game cross papper scissors by ReactJs
                    </p>
                  </div>
                  <div>
                    <h4>Link: </h4>
                    <a
                      className="change-color link"
                      href="https://game-reactjs.netlify.app/"
                      target="blank"
                    >
                      Game
                    </a>
                  </div>
                </div>
                <img src={game} alt="game-pr" />
              </div>
            </Popup>
          </div>
          <div className="image-project">
            <img src={iptracker} alt="iptracker-pr" />
            <Popup
              trigger={<div className="change-backgr popdet">Show Project</div>}
              position="center center"
            >
              <div className="pop-container">
                <h3 className="change-color title">IP Tracker Project</h3>
                <div className="details">
                  <div>
                    <h4>Project Type: </h4>
                    <p>Static Web</p>
                  </div>
                  <div>
                    <h4>Languages: </h4>
                    <p>CSS</p>
                  </div>
                  <div>
                    <h4>FrameWorks: </h4>
                    <p>ReactJs</p>
                  </div>
                  <div>
                    <h4>Libraries: </h4>
                    <p>whithout Libraries</p>
                  </div>
                  <div>
                    <h4>Describtion: </h4>
                    <p>
                      this project is IP Address Tracker just put your ip and
                      try it
                    </p>
                  </div>
                  <div>
                    <h4>Link: </h4>
                    <a
                      className="change-color link"
                      href="https://ip-address-tracker-react-js.netlify.app/"
                      target="blank"
                    >
                      IP Tracker
                    </a>
                  </div>
                </div>
                <img src={iptracker} alt="iptracker-pr" />
              </div>
            </Popup>
          </div>
          <div className="image-project">
            <img src={weather} alt="weather-pr" />
            <Popup
              trigger={<div className="change-backgr popdet">Show Project</div>}
              position="center center"
            >
              <div className="pop-container">
                <h3 className="change-color title">Weather Project</h3>
                <div className="details">
                  <div>
                    <h4>Project Type: </h4>
                    <p>Static Web</p>
                  </div>
                  <div>
                    <h4>Languages: </h4>
                    <p>CSS</p>
                  </div>
                  <div>
                    <h4>FrameWorks: </h4>
                    <p>ReactJs</p>
                  </div>
                  <div>
                    <h4>Libraries: </h4>
                    <p>whithout Libraries</p>
                  </div>
                  <div>
                    <h4>Describtion: </h4>
                    <p>
                      this project a Weather app but your city and country and
                      try
                    </p>
                  </div>
                  <div>
                    <h4>Link: </h4>
                    <a
                      className="change-color link"
                      href="https://weatherapp-reactjs2023.netlify.app/"
                      target="blank"
                    >
                      Weather
                    </a>
                  </div>
                </div>
                <img src={weather} alt="weather-pr" />
              </div>
            </Popup>
          </div>
          <div className="image-project">
            <img src={creatyourtask} alt="creatyourtask-pr" />
            <Popup
              trigger={<div className="change-backgr popdet">Show Project</div>}
              position="center center"
            >
              <div className="pop-container">
                <h3 className="change-color title">Creat Your Task Project</h3>
                <div className="details">
                  <div>
                    <h4>Project Type: </h4>
                    <p>Static Web</p>
                  </div>
                  <div>
                    <h4>Languages: </h4>
                    <p>SCSS,JavaScript</p>
                  </div>
                  <div>
                    <h4>FrameWorks: </h4>
                    <p>ReactJs,Firebase</p>
                  </div>
                  <div>
                    <h4>Libraries: </h4>
                    <p>whithout Libraries</p>
                  </div>
                  <div>
                    <h4>Describtion: </h4>
                    <p>
                      this project is a Full Stack CRUD app jwt,auth and
                      firestore
                    </p>
                  </div>
                  <div>
                    <h4>Link: </h4>
                    <a
                      className="change-color link"
                      href="https://creat-ur-task.netlify.app/"
                      target="blank"
                    >
                      Creat Your Task
                    </a>
                  </div>
                </div>
                <img src={creatyourtask} alt="creatyourtask-pr" />
              </div>
            </Popup>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Portofolio;
