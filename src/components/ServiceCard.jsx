import React from "react";
import "../style/Card.css";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="service-btn">Read More</button>
    </div>
  );
};

export default ServiceCard;