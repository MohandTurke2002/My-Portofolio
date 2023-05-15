import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Settings from "../components/Settings/Settings";
import Navbar from "../components/NavBar/Navbar";

function ContactMe() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r19f6bg",
        "template_meslrhg",
        form.current,
        "EQXhGgOYd7I4Z0L2l"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <Settings />
      <div className="contact-me">
        <h1 className="special-title">
          Get In <span className="change-color">Touch</span>
        </h1>
        <div className="container-form">
          <div className="social-links">
            <h3>Don't be shy!</h3>
            <p>
              Feel free to get in touch with me, I'm always open to discussing
              new projects and help you to solve any Errors or bugs{" "}
            </p>
            <div className="contact-way">
              <div className="mail">
                <div className="icon change-color">
                  <i className="bi bi-envelope-open-heart-fill"></i>
                </div>
                <div className="text">
                  <p>Mail me</p>
                  <p>mohandhany35@gmail.com</p>
                </div>
              </div>
              <div className="phone">
                <div className="icon change-color">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div className="text">
                  <p>Call me</p>
                  <p>+201008044578</p>
                </div>
              </div>
            </div>
            <div className="social">
              <div>
                <a href="/">
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
              <div>
                <a href="/">
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
              <div>
                <a href="/">
                  <i className="bi bi-github"></i>
                </a>
              </div>
              <div>
                <a href="/">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default ContactMe;
