import React from "react";
import star from "../../assets/images/start.svg";
import { motion } from "framer-motion";
const ServicesSlides = () => {
  return (
    <>
      <div className="slidingContaibner">
        <div className="sliding-border">
          <div className="slides">
            <motion.div
              // initial={{ x: "0%" }} // Initial position starting from the right
              // animate={{ x: "-100%" }} // Target position at the left
              // transition={{
              //   repeat: Infinity, // Repeat the animation infinitely
              //   duration: 10, // Animation duration (in seconds)
              //   ease: "linear", // Use linear easing for continuous movement
              // }}
              style={{ display: "flex", position: "absolute", width: "200%" }}
              animate={{ x: "-100%" }}
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: "linear",
              }}
            >
              <div className="sliderWapper" style={{transform:" rotate(1deg)"}}>
                <h1 className="heading2"> Web Development</h1>
                <img src={star.src} />
                <h1 className="heading2"> Digital Marketing</h1>
                <img src={star.src} />
                <h1 className="heading2"> Product Design</h1>
                <img src={star.src} />
                <h1 className="heading2"> UI-UX Experience</h1>
                <img src={star.src} />
              </div>
              <div className="sliderWapper"   style={{transform:" rotate(0deg)"}}>
                <h1 className="heading2" style={{ marginLeft: "130px" }}>
                  {" "}
                  Web Development
                </h1>
                <img src={star.src} />
                <h1 className="heading2"> Digital Marketing</h1>
                <img src={star.src} />
                <h1 className="heading2"> Product Design</h1>
                <img src={star.src} />
                <h1 className="heading2"> UI-UX Experience</h1>
                <img src={star.src} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSlides;
