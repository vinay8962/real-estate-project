import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PropertyType from "../components/PropertyType";
import LocalAgent from "../components/LocalAgent";
import Count from "../components/Count";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PropertyType />
      <Count />
      <LocalAgent />
    </div>
  );
};

export default Home;
