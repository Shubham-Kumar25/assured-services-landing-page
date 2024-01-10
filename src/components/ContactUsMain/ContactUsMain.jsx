import React from "react";
import "./contactUsMain.css";

const ContactUsMain = () => {
  return (
    <div className="section-contact">
      <div className="container">
        <h2 className="section-common-heading">Contact Us</h2>
        <p className="section-common-subheading">
          Get in touch with us. We are always here to help you.
        </p>
      </div>

      <div className="container grid grid-two--cols">
        <div className="contact-content">
          <form action="https://formspree.io/f/xyyqbjej" method="POST">
            <div className="grid grid-two--cols mb-3">
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  required
                  autoComplete="off"
                  placeholder="enter your name"
                />
              </div>

              <div>
                <label htmlFor="email">enter your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  required
                  placeholder="abc@thapa.com"
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="subject">subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="your main title"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message">message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="enter your message"
              ></textarea>
            </div>

            <div>
              <button type="submit" className="btn btn-submit">
                send message
              </button>
            </div>
          </form>
        </div>

        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711144073!2d73.78056582336797!3d18.524598599672156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1696220815737!5m2!1sen!2sin"
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
