import React from 'react';

function AboutUs() {
  return (
    <div className="about-us">
      <div className="text">
        <h3>Find Your</h3>
        <h3>Doctor</h3>
        <p>DocSpot is a user-friendly website designed to help you find the best doctors in your area. It offers a comprehensive directory of healthcare professionals, complete with detailed profiles, patient reviews, and ratings. With advanced search filters, you can easily locate doctors based on specialty, location, insurance accepted, and more. DocSpot simplifies the process of finding top-rated medical care, ensuring you connect with the right healthcare provider for your needs.</p>
        <div><a className="a-CTA" href="#">About Us</a></div>
      </div>
      <div className="image-container">
        <div className="image image1">
          <img src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Food Photo" />
        </div>
        <div className="image image2">
          <img src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Food Photo" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
