import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import {useNavigate} from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handlelearnmore = () => navigate('/learnmore');
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
        Our technology platform connects customers, restaurant partners and delivery partners, 
        serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view.
        </p>
        <p className="primary-text">
        With love and support from consumers, Tastify will expand far and wide, first through the entire city of Visakhapatnam and then across the entire country.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button" onClick={handlelearnmore}>Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill />
			<a href="video.mp4" target="">Watch Video</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
