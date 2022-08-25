import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import about4 from "../../assets/about4.png";
import about5 from "../../assets/about5.png";
import "./About.scss";

const abouts = [
  {
    title: "Fullstack Web Development",
    description:
      "I develop both the frontend and the backend of any web appication",
    imgUrl: images.about1,
  },
  {
    title: "Web Design",
    description:
      "I am develop top notch web interfaces that attracts and excites customers",
    imgUrl: images.about01,
  },
  {
    title: "UI/UX",
    description: "I develop websites with customer experience first approach",
    imgUrl: images.about04,
  },
  {
    title: "IT Support",
    description:
      "Have more than 3 years providing fast line IT Support to various clients",
    imgUrl: about4,
  },
  {
    title: "IT Trainer",
    description:
      "I have successfully trained more than 250 students on digital competences program and Creative Industries by FCA and Mondo NGO",
    imgUrl: about5,
  },
];

const About = () => {
  return (
    <>
      <h3 className="head-text">
        I Know that <span>"A successful website does three things:</span>It
        attracts the right kinds of visitors.
        <br />
        Guides them to the main services or product you offer.
        <br />
        Collect Contact details for future ongoing relation.
        <span>" ― Mohamed Saad</span>
      </h3>
      <div className="app__profiles">
        \
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            ket={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
