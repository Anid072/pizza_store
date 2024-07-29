import React from "react";
import Crousal from "./Crousal";
import MenuIcons from "./MenuIcons";
import About from "./About";
import Delevery from "../Components/Delevery";
import Footer from "./Footer";
import HeroSeaction from "../Components/HeroSeaction";
import OuterSection from "../Components/OuterSection";
import MobileIcon from "./MobileIcon";

// import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <>
      <Crousal />
      <About />
      <OuterSection />
      <MenuIcons />
      <MobileIcon />
      <HeroSeaction />
      <Delevery />
      <Footer />
    </>
  );
};

export default Home;
