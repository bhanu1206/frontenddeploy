import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Satisfy every craving by picking your favourite meals",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Choose meals prepared by skilled home cooks with a passion for cooking.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Convenience, variety, and nutritious meals will deliver to your doorstep.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        The extensive menu offers a wide array of cuisines and dishes, catering to diverse taste preferences.Choose meals prepared by skilled home cooks with a passion for cooking and satisfy every craving by picking your favourite meals
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
