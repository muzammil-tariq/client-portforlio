import React, { useEffect, useRef } from "react";
import TopHeading from "../TopHeading/TopHeading";
import arrow from "../../assets/images/arrow.svg";
import PortfolioCard from "../PortfolioCrad/PortfolioCard";
import portfolio1 from "@/assets/images/portfolio1.svg";
import { motion } from "framer-motion";
import useInViewAnimation from "@/Hooks/useInViewAnimation";

const GoogleSlides = () => {
  const ref = useRef();
  const cardRef = useRef();

  const portfolio = [
    {
      tittle: "Mobile app development",
      year: "© 2023",
      image: portfolio1,
    },
    {
      tittle: "Mobile app development",
      year: "© 2023",
      image: portfolio1,
    },
    {
      tittle: "Mobile app development",
      year: "© 2023",
      image: portfolio1,
    },
    {
      tittle: "Mobile app development",
      year: "© 2023",
      image: portfolio1,
    },
  ];
  const { elementRef, mainControls } = useInViewAnimation();

  
  return (
    <div className="googleSlides">
      <div className="portfolio-row">
        {portfolio.slice(0, 2).map((item, ind) => {
          return (
            <div key={ind}>
              <PortfolioCard
              bluecolor={"bg-blue"}
                tittle={item.tittle}
                year={item.year}
                image={item.image}
              />
            </div>
          );
        })}
      </div>
      <div className="portfolio-row prot-row-spacing">
        {portfolio.slice(2, 4).map((item, ind) => {
          return (
            <div key={ind}>
              <PortfolioCard
              bluecolor={"bg-blue"}

                tittle={item.tittle}
                year={item.year}
                image={item.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GoogleSlides;
