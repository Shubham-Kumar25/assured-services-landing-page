import React from "react";
import "./whyUs.css";
import AssuredServicesImage from "../../assets/images/whyus.png";

const Feature = ({ number, title, description }) => (
  <div
    className="why-choose--div"
    data-aos="zoom-in-up"
    data-aos-delay={number * 100}
  >
    <p className="common-text--highlight">{number}</p>
    <h3 className="section-common--title">{title}</h3>
    <p>{description}</p>
  </div>
);

const WhyUs = () => {
  return (
    <section className="section-why--choose">
      <div className="container">
        <h2 className="section-common-heading">
          Unlocking Excellence With Assured Services
        </h2>
        <p className="section-common-subheading">
          Nurturing Your Growth through Commitment to Innovation and Quality.
        </p>
      </div>

      <div className="container grid grid-three--cols">
        <div className="choose-left--div text-align--right">
          <Feature
            number={1}
            title="Assured Services Innovation Team"
            description="Pioneering novel solutions by staying at the forefront of industry trends and advancements."
          />

          <Feature
            number={2}
            title="Assured Services Quality Design Team"
            description="Crafting engaging and impactful experiences that cater to diverse learning styles and preferences."
          />

          <Feature
            number={3}
            title="Assured Services Precision Development Team"
            description="Transforming ideas into seamless online experiences, ensuring functionality and user satisfaction."
          />
        </div>

        <div className="choose-center--div" data-aos="zoom-in">
          <figure>
            <img src={AssuredServicesImage} alt="Assured Services" />
          </figure>
        </div>

        <div className="choose-right--div text-align--left">
          <Feature
            number={4}
            title="Assured Services - Web Development"
            description="Crafting responsive and engaging websites tailored to your business needs."
          />

          <Feature
            number={5}
            title="Assured Services - Mobile App Development"
            description="Building innovative and user-friendly mobile applications for various platforms."
          />

          <Feature
            number={6}
            title="Our Services - Explore a Range of Premium Services"
            description="Explore a range of premium services across different domains."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
