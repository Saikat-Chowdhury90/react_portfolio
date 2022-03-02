import React from "react";

import "../styles/Homescreen.css";
import Typical from "react-typical";

const HomeScreen = () => {
  return (
     
    <div className="profile-container">
        
      <div className="parent">
        <div className="details">
          <div className="highlight">
            <span className="primary">
              {" "}
              Hello,I am <span className="bold">Soumya</span>
            </span>
          </div>
          <div className="role">
            <span className="primary">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Film Director",
                    1000,
                    "Producer",
                    1000,
                    "Screenwriter",
                    1000,
                    "Video Producer",
                    1000,
                  ]}
                />
              </h1>
              <span className="tagline">
                My primary focus is on creating impactful and creative stories
                representing my client.
              </span>
            </span>
          </div>
          <div className="buttons">
              <a href="../form/resume.pdf" download>
                  <button className="btn btn-outline-light btn-lg highlighted-btn">Download Resume</button>
              </a>
          </div>
          <div className="social-icons">
          <a  href="http://www.instagram.com/travelernmore">
              <i className="fa-brands fa-instagram fa-2x "></i>
            </a>
            <a href="http://www.facebook.com/travelernmore">
              <i className="fa-brands fa-facebook-f fa-2x"></i>
            </a>
            <a href="http://www.twitter.com/travelernmore">
              <i className="fa-brands fa-twitter fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/travelernmore/">
              {" "}
              <i className="fa-brands fa-linkedin-in fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="pic">
            <div className="pic-background">

            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
