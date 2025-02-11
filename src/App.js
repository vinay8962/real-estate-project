import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import PropertyList from "./pages/PropertyList";
import PropertyDetails from "./pages/PropertyDetails";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/property-list" element={<PropertyList />} />
          <Route path="/property-details" element={<PropertyDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
