import React from "react";
import "./contactUs.css";
import contactUsImg from "../../assets/images/contact-us.png";

const ContactUs = () => {
  return (
    <div
      className="section-contact--homepage"
      data-aos="zoom-in-up"
      id="section-contact--homepage"
    >
      <div className="container grid grid-two--cols">
        <div className="contact-content">
          <h2 className="contact-title">Contact Assured Services</h2>
          <p>
            Connect with us to explore how Assured Services can elevate your
            business. Our team is ready to assist you on your journey towards
            success.
          </p>
          <div className="btn">
            <a href="contact.html">
              Get in Touch <i className="fa-solid fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
        <div className="contact-image">
          <img src={contactUsImg} alt="contact us illustration" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
