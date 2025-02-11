import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoadingSpinner from "./components/LoadingSpinner"; // A simple spinner

// Lazy loaded pages
const Home = lazy(() => import("./pages/Home"));
const Blog = lazy(() => import("./pages/Blog"));
const PropertyList = lazy(() => import("./pages/PropertyList"));
const PropertyDetails = lazy(() => import("./pages/PropertyDetails"));

const App = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/property-list" element={<PropertyList />} />
            <Route path="/property-details" element={<PropertyDetails />} />
          </Routes>

          <Footer />
        </Suspense>
      </Router>
    </>
  );
};

export default App;
