import React from "react";

import useInViewAnimation from "@/Hooks/useInViewAnimation";
import { motion } from "framer-motion";

const PortfolioCard = ({ bluecolor, tittle, year, image }) => {
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
      <img src={image.src} alt="" />
      <div className="portfolioCardWrapper">
        <h4 className="heading4"> {tittle}</h4>
        <p className="p2">{year}</p>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
