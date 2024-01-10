// NotFound.jsx
import React from "react";
import "./notFound.css"; // Import the CSS file for NotFound

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h2 className="not-found-title">404 - Not Found</h2>
      <p className="not-found-message">
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
