import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutUs from "../../components/AboutUs/AboutUs";
import Services from "../../components/Services/Services";
import ContactUs from "../../components/ContactUs/ContactUs";
import Testimonials from "../../components/Testimonials/Testimonials";

function LandingPage() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Services />
      <Testimonials />
      <ContactUs />
    </div>
  );
}

export default LandingPage;
