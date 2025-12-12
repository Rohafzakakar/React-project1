import React from "react";
import ServiceCard from "./ServiceCard";
import "../App.css";

const servicesData = [
  { 
    title: "Web Design", 
    description: "Professional website design",
    image: "/image/1.jpg" 
  },
  { 
    title: "Graphic Design", 
    description: "Creative graphic and visual design",
    image: "/image/Graphic Design.jpg" 
  },
  { 
    title: "Digital Marketing", 
    description: "Effective digital marketing strategies",
    image: "/image/Digital Marketing.jpg" 
  },
];

const Services = () => {
  return (
    <section className="services">
      {servicesData.map((service, index) => (
        <ServiceCard
          key={index}
          image={service.image}
          title={service.title}
          description={service.description}
        />
      ))}
    </section>
  );
};

export default Services;