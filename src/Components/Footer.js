import React from 'react';
import './Footer.css'; // Ensure this path is correct relative to your file structure

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-head">
          <div className="footlogo"></div>
        </div>
        <div className="footer-tagline">
          <h4 className="slogan">Empowering Wellness, One Click Away!</h4>
        </div>
        <div className="footer-wrapper-nav">
          <div className="footer-nav">
            <ul className="footer-list">
              <li id="f">About Us</li>
              <br />
              <li  id="f">Feedback</li>
              <br />
              <li>Health News</li>
              <br />
              <li>Find Your Doctor</li>
              <br />
              <li>Contact Us</li>
            </ul>
          </div>
          <aside className="Health-signup">
            <div className="Healthsignup-content">
              <div className="Health-header">
                <i className="fa-solid fa-house-medical"></i>
                <span className="headline">HEALTH A TO Z</span>
                <br />
                <br />
                <h4>Get the best in health and wellness</h4>
              </div>
            </div>
            <br />
            <br />
            <div className="email">
              <form>
                <div className="form">
                  <label htmlFor="id1" className="label">
                    Enter your email to subscribe
                  </label>
                  <br />
                  <br />
                  <input type="text" placeholder="xyz@gmail.com" className="input" />
                </div>
                <br />
                <button type="submit" className="button">Subscribe</button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
