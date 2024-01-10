import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./footer.css";
import logo from "../../assets/logo/main-logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="custom-shape-divider-top">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="container grid grid-four--cols">
        <div className="footer-1--div">
          <div className="logo-brand">
            <a className="footer-subheading" href="/">
              <img
                src={logo}
                alt="Assured Services Logo"
                width="50%"
                height="auto"
              />
            </a>
          </div>
          <p>Your Trusted Partner for Premium Services</p>
          <div className="social-footer--icons">
            <a
              href="https://twitter.com/assuredservices"
              target="_blank"
              rel="noopener noreferrer"
              title="Assured Services Twitter"
            >
              <i className="fa-brands fa-twitter">
                <FaTwitter />
              </i>
            </a>
            <a
              href="https://linkedin.com/company/assuredservices"
              target="_blank"
              rel="noopener noreferrer"
              title="Assured Services LinkedIn"
            >
              <i className="fa-brands fa-linkedin">
                <FaLinkedin />
              </i>
            </a>
            <a
              href="https://instagram.com/assuredservices"
              target="_blank"
              rel="noopener noreferrer"
              title="Assured Services Instagram"
            >
              <i className="fa-brands fa-instagram">
                <FaInstagram />
              </i>
            </a>
          </div>
        </div>

        <div className="footer-2--div">
          <p className="footer-subheading">Services</p>
          <ul>
            <li>
              <a href="/web-development">Web Development</a>
            </li>
            <li>
              <a href="/mobile-app-development">Mobile App Development</a>
            </li>
            <li>
              <a href="/data-analytics">Data Analytics</a>
            </li>
            <li>
              <a href="/cloud-services">Cloud Services</a>
            </li>
            <li>
              <a href="/cybersecurity">Cybersecurity Solutions</a>
            </li>
            <li>
              <a href="/it-consulting">IT Consulting</a>
            </li>
            <li>
              <a href="/ux-design">UX/UI Design</a>
            </li>
          </ul>
        </div>

        <div className="footer-3--div">
          <p className="footer-subheading">Quick Links</p>
          <ul>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
            <li>
              <a href="/faq">FAQs</a>
            </li>
          </ul>
        </div>

        <div className="footer-4--div">
          <p className="footer-subheading">Connect With Us</p>
          <ul>
            <li>
              <a href="/blogs">Blogs</a>
            </li>
            <li>
              <a href="/terms-of-service">Terms of Service</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Scroll to top button/icon */}
      <div className="scroll-to-top" onClick={scrollToTop}>
        <IoIosArrowUp size={30} />
      </div>

      {/* Copyright */}
      <hr className="footer-horizontal-line" />
      <div className="footer-copyright">
        <p>&#169; 2023 Assured Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
