import React from "react";
import "./services.css";
import webDevelopmentIcon from "../../assets/images/web-development-icon.png";
import mobileAppIcon from "../../assets/images/mobile-app-icon.png";
import dataAnalyticsIcon from "../../assets/images/data-analytics-icon.png";
import cloudServicesIcon from "../../assets/images/cloud-services-icon.png";
import cybersecurityIcon from "../../assets/images/cybersecurity-icon.png";
import consultingIcon from "../../assets/images/consulting-icon.png";
import uxDesignIcon from "../../assets/images/ux-design-icon.png";
import digitalMarketingIcon from "../../assets/images/digital-marketing-icon.png";

const Services = () => {
  return (
    <section id="services" className="section-course">
      <div className="container">
        <h2 className="section-common-heading">Our Services</h2>
        <p className="section-common-subheading">
          Explore a range of premium services across different domains.
        </p>
      </div>

      <div className="container grid grid-four--cols">
        {[
          {
            icon: webDevelopmentIcon,
            title: "Web Development",
            description:
              "Crafting responsive and engaging websites tailored to your business needs.",
          },
          {
            icon: mobileAppIcon,
            title: "Mobile App Development",
            description:
              "Building innovative and user-friendly mobile applications for various platforms.",
          },
          {
            icon: dataAnalyticsIcon,
            title: "Data Analytics",
            description:
              "Extracting valuable insights from data to drive informed business decisions.",
          },
          {
            icon: cloudServicesIcon,
            title: "Cloud Services",
            description:
              "Harnessing the power of cloud computing for scalable and efficient solutions.",
          },
          {
            icon: cybersecurityIcon,
            title: "Cybersecurity Solutions",
            description:
              "Ensuring robust protection against cyber threats for your digital assets.",
          },
          {
            icon: consultingIcon,
            title: "IT Consulting",
            description:
              "Providing strategic guidance and solutions for your IT challenges.",
          },
          {
            icon: uxDesignIcon,
            title: "UX/UI Design",
            description:
              "Creating intuitive and visually appealing user experiences for your applications.",
          },
          {
            icon: digitalMarketingIcon,
            title: "Digital Marketing",
            description:
              "Strategizing and executing digital marketing campaigns to boost your online presence and reach your target audience.",
          },
        ].map((service, index) => (
          <div
            className="course-div"
            data-aos="zoom-in"
            data-aos-delay={index * 50}
            key={index}
          >
            <div className="icon">
              <img
                className="iconImg"
                src={service.icon}
                alt={`Assured Services - ${service.title}`}
              />
            </div>
            <h3 className="section-common--title">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
