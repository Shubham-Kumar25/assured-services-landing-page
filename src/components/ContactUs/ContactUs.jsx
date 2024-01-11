import React from "react";
import { Link } from "react-router-dom";
import "./contactUs.css";
import contactUsImg from "../../assets/images/contact-us.webp";

const ContactUs = () => (
  <div className="section-contact--homepage" data-aos="zoom-in-up" id="contact">
    <div className="container grid grid-two--cols">
      <div className="contact-content">
        <h2 className="contact-title">Contact Assured Services</h2>
        <p>
          Connect with us to explore how Assured Services can elevate your
          business. Our team is ready to assist you on your journey towards
          success.
        </p>
        <div>
          <Link to="/contactus" className="btn contact-btn">
            Get in Touch
          </Link>
        </div>
      </div>
      <div className="contact-image">
        <img src={contactUsImg} alt="contact us illustration" />
      </div>
    </div>
  </div>
);

export default ContactUs;
