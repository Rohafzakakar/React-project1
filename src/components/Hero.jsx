import React from "react";
import "../style/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Build Your Online Presence with Our Creative Solutions</h1>
        <p>
          We specialize in Web Design, Graphic Design, and Digital Marketing to
          help your business stand out. Create, innovate, and grow with us!
          We specialize in Web Design, Graphic Design, and Digital Marketing to
          help your business stand out. Create, innovate, and grow with us!
        </p>
        <button className="hero-btn">Get Started</button>
      </div>

      <div className="hero-image">
        <img src="/image/2.jpg"  />
      </div>
    </section>
  );
};

export default Hero;
