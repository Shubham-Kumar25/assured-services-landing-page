import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
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
            <Link className="footer-subheading" to="/">
              <img
                src={logo}
                alt="Assured Services Logo"
                width="50%"
                height="auto"
              />
            </Link>
          </div>
          <p>Your Trusted Partner for Premium Services</p>
          <div className="social-footer--icons">
            <Link
              to=""
              rel="noopener noreferrer"
              title="Assured Services Twitter"
            >
              <i>
                <FaTwitter size={25} />
              </i>
            </Link>
            <Link
              to=""
              rel="noopener noreferrer"
              title="Assured Services LinkedIn"
            >
              <i>
                <FaLinkedin size={25} />
              </i>
            </Link>
            <Link
              to=""
              rel="noopener noreferrer"
              title="Assured Services Instagram"
            >
              <i>
                <FaInstagram size={25} />
              </i>
            </Link>
          </div>
        </div>

        <div className="footer-2--div">
          <p className="footer-subheading">Services</p>
          <ul>
            <li>
              <Link to="/web-development">Web Development</Link>
            </li>
            <li>
              <Link to="/mobile-app-development">Mobile App Development</Link>
            </li>
            <li>
              <Link to="/data-analytics">Data Analytics</Link>
            </li>
            <li>
              <Link to="/cloud-services">Cloud Services</Link>
            </li>
            <li>
              <Link to="/cybersecurity">Cybersecurity Solutions</Link>
            </li>
            <li>
              <Link to="/it-consulting">IT Consulting</Link>
            </li>
            <li>
              <Link to="/ux-design">UX/UI Design</Link>
            </li>
          </ul>
        </div>

        <div className="footer-3--div">
          <p className="footer-subheading">Quick Links</p>
          <ul>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link to="/faq">FAQs</Link>
            </li>
          </ul>
        </div>

        <div className="footer-4--div">
          <p className="footer-subheading">Other</p>
          <ul>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/terms-of-service">Terms of Service</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Careers</Link>
            </li>
            <li>
              <Link to="/careers">Privacy Policy</Link>
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
