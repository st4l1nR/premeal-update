import React from "react";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import HowItWorks from "../HowItWorks/HowItWorks";
import Values from "../Values/Values";

const Home = () => {
  return (
    <div>
      <Hero />
      <Values />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
