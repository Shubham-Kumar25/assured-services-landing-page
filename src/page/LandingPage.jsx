import React from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutUs from "../components/AboutUs/AboutUs";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";
import ContactUs from "../components/ContactUs/ContactUs";
import Testimonials from "../components/Testimonials/Testimonials";

function LandingPage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutUs />
      <Services />
      {/* <Testimonials /> */}
      <ContactUs />
      <Footer />
    </div>
  );
}

export default LandingPage;
