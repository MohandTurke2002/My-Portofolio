import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Settings from "../components/Settings/Settings";
import Navbar from "../components/NavBar/Navbar";
import "./scss/contactme.scss";

function ContactMe() {
  const form = useRef();
  const name = useRef();
  const email = useRef();
  const message = useRef();
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [done, setDone] = useState(false);
  const [messageDone, setMessageDone] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    if (!name.current.value) {
      setError(true);
      setMessageError("I Need Your Name");
    } else if (!email.current.value) {
      setError(true);
      setMessageError("I Need Your Mail");
    } else if (!message.current.value) {
      setError(true);
      setMessageError("Write Your Message ");
    } else {
      setError(false);
      setDone(true);
      setMessageDone("Done");
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
    }
  };
  return (
    <div className="container">
      <Settings />
      <div className="contact-me">
        <h1 className="special-title">
          Get In <span className="change-color">Touch</span>
        </h1>
        {error && <p className="message-error">{messageError}</p>}
        {done && <p className="message-done">{messageDone}</p>}
        <div className="container-form">
          <div className="social-links">
            <h3>Don't be shy!</h3>
            <p className="my-message">
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
                <a
                  href="https://www.facebook.com/mohand.hany.9210?mibextid=ZbWKwL"
                  target="blank"
                >
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
              <div>
                <a href="https://wa.me/qr/ABGM33YOZPYZB1" target="blank">
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
              <div>
                <a href="https://github.com/MohandTurke2002" target="blank">
                  <i className="bi bi-github"></i>
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/invites/contact/?i=rliwdl3rqj51&utm_content=2r04jwa"
                  target="blank"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="input-container">
              <div className="input">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  ref={name}
                />
              </div>
              <div className="input">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  ref={email}
                />
              </div>
              <div className="input">
                <input type="text" placeholder="Subject" />
              </div>
            </div>
            <div className="message-text">
              <textarea
                name="message"
                placeholder="Your Message here..."
                ref={message}
              />
            </div>
            <div className="submit">
              <button className="change-bordercl">
                Send Message
                <span>
                  <i className="bi bi-send"></i>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default ContactMe;
