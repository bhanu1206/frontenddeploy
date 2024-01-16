import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import {useNavigate} from "react-router-dom";
import logofd from "../Assets/logofd.png";


const WHome = () => {
  const navigate = useNavigate();
  const handlelogin = () => navigate('/login');
  const handleadminlogin = () => navigate('/adminlogin')
  const handlerestaurant = () => navigate('/restaurantlogin')

  return (
    <div className="home-container">
      
      <div className="nav-logo-container">
        <img src={logofd } alt="" height="100" width="100"/>
        <span className="text-lg font-bold m1-2" style={{ color:"orange" ,fontSize: "28px"}}>Tastify</span>
      </div>
      
      {/* <Navbar /> */}
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />   
        </div>
        <div className="home-text-section">
          <h4 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h4>
          <p className="primary-text" px-5 py-5>
          Delicious meals are tasty, appetizing, scrumptious, yummy, luscious, delectable,
          mouth-watering, fit for a king, delightful, lovely, wonderful, pleasant, enjoyable,
          appealing, enchanting, charming and highly pleasant to the taste. 
          </p>
          <button className="secondary-button" onClick={handlelogin}>
            Order Now <FiArrowRight />{" "}
          </button><br></br>
          <button className="secondary-button" onClick={handleadminlogin}>
            Login as Admin <FiArrowRight />{" "}
          </button><br></br>
          <button className="secondary-button" onClick={handlerestaurant}>
            Partner with us! <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WHome;
