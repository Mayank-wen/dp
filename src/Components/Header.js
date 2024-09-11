import React from "react";
import Navbar from "./Navbar";
// import './Header.css'; // Create and import a CSS file for custom styles

function Header() {
  return (
    <a href="index.html" className="header-link">
      <header>
        <div className="ss">
        <section className="container">
            <h1 className="title">
              <span>Simplify your </span>
              <span>healthcare </span>
              <span> journey</span>
              <span>with DocSpot  </span>
            </h1>

            <h2 className="title">
              <span>where finding</span>
              <span>trusted </span>
              <span>professionals</span>
              <span>is effortless.  </span>
            </h2>
          </section>  
          <div className="video-container">
            <video autoPlay muted loop playsInline className="background-video">
              <source
                src="https://videos.pexels.com/video-files/3191572/3191572-uhd_2560_1440_25fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
         
         
        </div>
      </header>
    </a>
  );
}

export default Header;
