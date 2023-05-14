/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./settings.scss";

function Settings() {
  //make a variable for theme color
  let themeColor;

  // creat function for show colors box
  const showColors = () => {
    const colors = document.querySelector(".settings");
    colors.classList.toggle("show-colors");
  };

  // creat function for change color theme & set it in localstorage
  const changeColorTheme = (e) => {
    localStorage.setItem("themeColor", `${e.target.id}`);
    body.className = `${theme} ${e.target.id}`;
  };

  // make a variable for dark & light mode
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;
  const moon = <i className="bi bi-moon-fill moon"></i>;
  const sun = <i className="bi bi-brightness-high-fill sun"></i>;

  // set dark/light mode & color theme in page from localstorage
  useEffect(() => {
    if (localStorage) {
      theme = localStorage.getItem("theme");
      themeColor = localStorage.getItem("themeColor");
      if (themeColor) {
        body.className = `${theme} ${themeColor}`;
      }
    }

    if (theme === lightTheme) {
      body.classList.add(theme);
      if (moon) {
        let showSun = document.querySelector(".sun");
        showSun.style.cssText = "opacity: 1;";
        let hideMoon = document.querySelector(".moon");
        hideMoon.style.cssText = "opacity: 0;";
      }
    } else {
      body.classList.add(darkTheme);
      if (moon) {
        let hideSun = document.querySelector(".sun");
        hideSun.style.cssText = "opacity: 0;";
        let showMoon = document.querySelector(".moon");
        showMoon.style.cssText = "opacity: 1;";
      }
    }
  }, [theme, themeColor]);

  // creat function to change dark/light mode
  const switchTheme = (e) => {
    if (theme === lightTheme) {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      let hideSun = document.querySelector(".sun");
      hideSun.style.cssText = "opacity: 0;";
      let showMoon = document.querySelector(".moon");
      showMoon.style.cssText = "opacity: 1;";
      theme = darkTheme;
    } else {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      let showSun = document.querySelector(".sun");
      showSun.style.cssText = "opacity: 1;";
      let hideMoon = document.querySelector(".moon");
      hideMoon.style.cssText = "opacity: 0;";
      theme = lightTheme;
    }
  };

  return (
    <div className="set-mod">
      <div className="settings">
        <div className="colors">
          <button
            className="movblue color"
            id="theme-movblue"
            onClick={(e) => changeColorTheme(e)}
          ></button>
          <button
            className="red color"
            id="theme-red"
            onClick={(e) => changeColorTheme(e)}
          ></button>
          <button
            className="blue color"
            id="theme-blue"
            onClick={(e) => changeColorTheme(e)}
          ></button>
          <button
            className="orange color"
            id="theme-orange"
            onClick={(e) => changeColorTheme(e)}
          ></button>
          <button
            className="gold color"
            id="theme-gold"
            onClick={(e) => changeColorTheme(e)}
          ></button>
          <button
            className="green color"
            id="theme-green"
            onClick={(e) => changeColorTheme(e)}
          ></button>
          <button
            className="pink color"
            id="theme-pink"
            onClick={(e) => changeColorTheme(e)}
          ></button>
          <button
            className="purple color"
            id="theme-purple"
            onClick={(e) => changeColorTheme(e)}
          ></button>
        </div>
        <div className="button-settings">
          <button onClick={() => showColors()}>
            <i className="bi bi-gear-fill"></i>
          </button>
        </div>
      </div>
      <div className="button-theme">
        <button onClick={(e) => switchTheme(e)}>
          {moon} {sun}
        </button>
      </div>
    </div>
  );
}

export default Settings;
