import React, { useState } from "react";
import MobileNav from "../components/MobileNav";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import Trending from "../components/Trending";
import Events from "../components/Events";
import Dashboard from "../components/Dashboard";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobileNav isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Dashboard />
      <About />
      <Trending />
      <Events />
      <Footer />
    </>
  );
};

export default Home;
