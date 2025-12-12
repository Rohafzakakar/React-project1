import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import OurService from "./components/Ourservice";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero  />
      <OurService />
      <Services />
    </div>
  );
}

export default App;
