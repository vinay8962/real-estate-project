import React from "react";
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

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
