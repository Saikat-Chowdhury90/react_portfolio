import React from "react";
import "../styles/ContactScreen.css";

const ContactScreen = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-parent">
        <div className="contact-details">
          <div className="contact-title title">
            <h1>CONTACT ME</h1>
          </div>
          <div className="contact-tagline">
            <h3>Want to connect with me ?</h3>
          </div>
          <div className="icons">
            <a href="http://www.instagram.com/travelernmore">
              <i className="fa-brands fa-instagram fa-3x"></i>
            </a>
            <a href="http://www.facebook.com/travelernmore">
              <i className="fa-brands fa-facebook-f fa-3x"></i>
            </a>
            <a href="http://www.twitter.com/travelernmore">
              <i className="fa-brands fa-twitter fa-3x"></i>
            </a>
            <a href="https://www.linkedin.com/in/travelernmore/">
              {" "}
              <i className="fa-brands fa-linkedin-in fa-3x"></i>
            </a>
          </div>
          <div className="form">
            <div className="form-box">
              <div className="form-details">
                <div className="right">
                  <form action="">
                    <div className="in">
                      <div>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="mail"
                          id="email"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                      <div>
                        <textarea
                          name="msg"
                          id="msg"
                          cols="30"
                          rows="2"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <button type="button" className="btn btn-outline-dark btn-lg">SEND MESSAGE</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
