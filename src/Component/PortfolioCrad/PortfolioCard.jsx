import React from "react";

import useInViewAnimation from "@/Hooks/useInViewAnimation";
import { motion } from "framer-motion";
import eye from "@/assets/images/eye.svg";
import thumbsup from "@/assets/images/thumbs-up.svg";

const PortfolioCard = ({ showtittle, bluecolor, tittle, year, image }) => {
  const { elementRef, mainControls } = useInViewAnimation();

  return (
    <motion.div
      ref={elementRef}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial={"hidden"}
      animate={mainControls}
      transition={{
        duration: 3,
        delay: 0.2,
        ease: "easeIn",
        type: "spring",
        // staggerChildren: 0.5
      }}
      className={`portfolioCard ${bluecolor}`}
    >
      <div style={{ overflow: "hidden", borderRadius: "14px" }}>
        <motion.img
          className="portfolioImg"
          whileHover={{ scale: 1.1 }} // Scale to 1.2 on hover
          transition={{ duration: 0.3, ease: "easeInOut" }} // Animation duration and easing
          src={image.src}
          alt=""
        />
      </div>
      <div className="portfolioCardWrapper">
        {showtittle ? (
          <div>
            <h4 className="heading4"> {tittle}</h4>
          </div>
        ) : null}

        <div style={{width:showtittle?"auto":"100%"}} className="infoContainer">
          <div className="thumbContainer">
            <img src={thumbsup.src} alt="" />
            <p className="p2" style={{ marginTop: "2px" }}>
              15560 likes
            </p>
          </div>
          <div className="thumbContainer">
            <img src={eye.src} alt="" />
            <p className="p2">15560 </p>
          </div>
          {/* <p className="p2">{year}</p> */}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
