import React, { useEffect, useRef } from "react";
import TopHeading from "../TopHeading/TopHeading";
import arrow from "../../assets/images/arrow.svg";
import PortfolioCard from "../PortfolioCrad/PortfolioCard";
import portfolio1 from "@/assets/images/portfolio1.svg";
import { motion } from "framer-motion";
import useInViewAnimation from "@/Hooks/useInViewAnimation";

const Portfolio = () => {
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

  // const isInview = useInView(cardRef);
  // const mainControls = useAnimation();
  // useEffect(() => {
  //   if (isInview) {
  //     mainControls.start("visible");
  //   }
  //   // else {
  //   //   mainControls.start("hidden");
  //   // }

  //   console.log("isInview", isInview);
  // }, [isInview]);
  return (
    <div className="bg-blue">
      <div className="container portfolioContainer container-padding">
        <div className="portfolio-btn-wrapper">
          <TopHeading
            elementRef={ref}
            tittle={"Selected  "}
            colorTitle={"Works"}
            btnText={"Portfolio"}
          />
          <button className="btn3">
            <span className="btntext">
              {" "}
              View All Work <img src={arrow.src} />{" "}
            </span>
          </button>
        </div>
        <div className="portfiolio-card-box">
          <div className="portfolio-row">
            {portfolio.slice(0, 2).map((item, ind) => {
              return (
                <div key={ind}>
                  <PortfolioCard
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
                    tittle={item.tittle}
                    year={item.year}
                    image={item.image}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
