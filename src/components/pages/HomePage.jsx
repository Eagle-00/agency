import React from "react";
import {HeroSection} from "../views/sections/HeroSection";
import {ServicesSection} from "../views/sections/ServicesSection";
import {AboutSection} from "../views/sections/AboutSection";
import {CtaSection} from "../views/sections/CtaSection";
import {TeamSection} from "../views/sections/TeamSection";
import {PartnersSection} from "../views/sections/PartnersSection";

const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <ServicesSection/>
      <AboutSection/>
      <CtaSection/>
      <PartnersSection/>
      <TeamSection/>
    </>
  )
};

export default HomePage;
