// Testimonials.jsx
import React from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";
import reviews from "./Data"; // Import the updated reviews data
import "./testimonials.css";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (reviews && reviews.length > 1) {
      if (index - 1 < 0) {
        setIndex(reviews.length - 1);
      } else {
        setIndex(index - 1);
      }
    }
  }

  function rightShiftHandler() {
    if (reviews && reviews.length > 1) {
      if (index + 1 >= reviews.length) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }
  }

  function surpriseHandler() {
    if (reviews && reviews.length > 0) {
      let randomIndex = Math.floor(Math.random() * reviews.length);
      setIndex(randomIndex);
    }
  }

  if (!reviews || reviews.length === 0) {
    return <div className="testimonials-error">No testimonials available.</div>;
  }

  return (
    <div className="testimonials-container">
      <div className="testimonials-card">
        <Card review={reviews[index]} />
      </div>

      <div className="testimonials-navigation">
        <button
          onClick={leftShiftHandler}
          className="testimonial-arrow testimonial-left"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={rightShiftHandler}
          className="testimonial-arrow testimonial-right"
        >
          <FiChevronRight />
        </button>
      </div>

      <div className="testimonials-surprise">
        <button
          onClick={surpriseHandler}
          className="testimonials-surprise-button"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
