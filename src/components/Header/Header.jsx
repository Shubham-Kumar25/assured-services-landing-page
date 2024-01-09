import React from "react";
import "./header.css"; // Updated file name to match best practices
import logo from "../../assets/logo/main-logo.png";

const Header = () => {
  return (
    <header className="section-navbar">
      <div className="container">
        <div className="navbar-brand">
          <a href="/">
            <img
              src={logo}
              alt="Assured Services Logo"
              width="20%"
              height="auto"
            />
          </a>
        </div>
        <nav className="navbar">
          <ul>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
