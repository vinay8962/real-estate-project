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
import WorkTogetherSection from "../components/WorkTogetherSection";
import NeighborhoodSection from "../components/NeighborhoodSection";
import AppraisalSection from "../components/AppraisalSection";
import Footer from "../components/Footer";

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
      <NeighborhoodSection />
      <Testimonials />
      <AppraisalSection />
      <WorkTogetherSection />
      <OpinionSection />
      <Footer />
    </div>
  );
};

export default Home;
