import React, { useEffect } from "react";
import "./contactUsMain.css";

const ContactUsMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="section-contact">
      <div className="container">
        <h2 className="section-common-heading">Contact Assured Services</h2>
        <p className="section-common-subheading">
          Reach out to Assured Services. We are dedicated to assisting you.
        </p>
      </div>

      <div className="container grid grid-two--cols">
        <div className="contact-content">
          <form action="https://formspree.io/f/xyyqbjej" method="POST">
            <div className="grid grid-two--cols mb-3">
              <div>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  autoComplete="off"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  required
                  placeholder="example@assuredservices.com"
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Your main title"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <div>
              <button type="submit" className="btn btn-submit">
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224567.720224831!2d76.82493149608618!3d28.423160295934963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1704912953291!5m2!1sen!2sin"
            width="100%"
            height="500px"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsMain;
