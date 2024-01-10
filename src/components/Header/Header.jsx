// Header.jsx
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "./header.css"; // Make sure to include your CSS styles
import logo from "../../assets/logo/main-logo.png";

const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <header className="section-navbar">
        <div className="container">
          <div className="navbar-brand">
            <RouterLink to="/" onClick={scrollToTop}>
              <img
                src={logo}
                alt="Assured Services Logo"
                width="20%"
                height="auto"
              />
            </RouterLink>
          </div>
          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <RouterLink to="/" onClick={scrollToTop}>
                  Home
                </RouterLink>
              </li>
              <li className="nav-item">
                <Link to="about" smooth={true} duration={200}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="services" smooth={true} duration={200}>
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="contact" smooth={true} duration={200}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
