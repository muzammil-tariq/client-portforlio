import React, { useRef } from "react";
import TopHeading from "../TopHeading/TopHeading";
import ReviewCard from "../ReviewCard/ReviewCard";
import client from "@/assets/images/client.svg";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rightArrow from "@/assets/images/rightArrow.svg";
import leftArrow from "@/assets/images/leftArrow.svg";
import { motion } from "framer-motion";
import useInViewAnimation from "@/Hooks/useInViewAnimation";

const Testimonial = () => {
  const ref = useRef();
  const SliderRef = useRef();
  const { elementRef, mainControls } = useInViewAnimation();

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 1500,
    slidesToShow: 3,

    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
        },
      },
    ],

    cssEase: "ease-out",
  };
  const handlePrev = () => {
    SliderRef.current.slickPrev();
  };

  const handleNext = () => {
    SliderRef.current.slickNext();
  };
  const testimonila = [
    {
      tittle: "Pegasuseagel",
      userPic: client,
    },
    {
      tittle: "Pegasuseagel",
      userPic: client,
    },
    {
      tittle: "Pegasuseagel",
      userPic: client,
    },
    {
      tittle: "Pegasuseagel",
      userPic: client,
    },
    {
      tittle: "Pegasuseagel",
      userPic: client,
    },
    {
      tittle: "Pegasuseagel",
      userPic: client,
    },
    {
      tittle: "Pegasuseagel",
      userPic: client,
    },
  ];
  return (
    <div id="testmonial">
      <TopHeading
        elementRef={ref}
        tittle={"Trusted by    "}
        colorTitle={"Hundred Clients"}
        btnText={"WHAT CLIENTS SAYS?"}
      />
      <div className="sliderBox">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial={"hidden"}
          animate={mainControls}
          transition={{
            duration: 3,
            delay: 0,
            type: "spring",
            // staggerChildren: 0.5
          }}
          ref={elementRef}
        >
          <Slider ref={SliderRef} {...settings}>
            {testimonila.map((item, ind) => {
              return (
                <div key={ind} className="slide-gap">
                  <ReviewCard userPic={item.userPic} />
                </div>
              );
            })}
          </Slider>
        </motion.div>
        <div className="arrowBox">
          <button onClick={handlePrev} className="outlinebtn1">
            <img  src={leftArrow.src} alt="" />
          </button>
          <p className="p3">3/6</p>
          <button onClick={handleNext} className="outlinebtn1">
            <img  src={rightArrow.src} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
