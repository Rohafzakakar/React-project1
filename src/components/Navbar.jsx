import React, { useState } from "react";
import "../style/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/image/logo192.png" alt="MySite Logo" />
      </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li >Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Our Team</li>
        <li>Contact</li>
      </ul>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
