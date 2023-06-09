import React from "react";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          </Routes>
        <Footer />
      </BrowserRouter>
  )
}

export default App;
