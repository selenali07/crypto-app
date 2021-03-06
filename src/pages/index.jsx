import React, { useState } from "react";
import MobileNav from "../components/MobileNav";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Trending from "../components/Trending";
import Stats from "../components/Stats";
import Dashboard from "../components/Dashboard";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobileNav isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <main>
        <Hero />
        <Slider />
        <About />
        <Trending />
        <Dashboard />
        {/*<Stats />*/}
        
      </main>
      <Footer />

    </>
  );
};

export default Home;
