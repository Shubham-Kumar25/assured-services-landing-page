import React from "react";
import innovationImg from "../../assets/images/innovation.png";
import developmentImg from "../../assets/images/development.png";
import qualityImg from "../../assets/images/quality.png";
import "./aboutUs.css";

const AboutUs = () => {
  return (
    <section id="about" className="section-about">
      <div className="container">
        <h2 className="section-common-heading">
          Unlocking Excellence with Assured Services
        </h2>
        <p className="section-common-subheading">
          Nurturing Your Growth through Commitment to Innovation and Quality.
        </p>
      </div>

      <div className="container grid grid-three--cols">
        {[
          {
            src: innovationImg,
            title: "Innovation",
            text: "Pioneering novel solutions by staying at the forefront of industry trends and advancements.",
          },
          {
            src: qualityImg,
            title: "Quality Design",
            text: "Crafting engaging and impactful experiences that cater to diverse learning styles and preferences.",
          },
          {
            src: developmentImg,
            title: "Precision Development",
            text: "Transforming ideas into seamless online experiences, ensuring functionality and user satisfaction.",
          },
        ].map((item, index) => (
          <div
            className="about-div"
            data-aos="fade-up"
            data-aos-delay={index * 300}
            key={index}
          >
            <div className="icon">
              <img src={item.src} alt={`Assured Services ${item.title} Team`} />
            </div>
            <h3 className="section-common--title">{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
