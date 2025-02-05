import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PropertyType from "../components/PropertyType";
import LocalAgent from "../components/LocalAgent";
import Count from "../components/Count";
import PopularSearch from "../components/PopularSearch";
import TrustedSection from "../components/TrustedSection";
import OpinionSection from "../components/OpinionSection";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PropertyType />
      <TrustedSection />
      <PopularSearch />
      <Count />
      <LocalAgent />
      <Testimonials />
      <OpinionSection />
    </div>
  );
};

export default Home;
