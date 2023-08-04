import React, { useEffect, useRef } from "react";
import TopHeading from "../TopHeading/TopHeading";
import arrow from "../../assets/images/arrow.svg";
import PortfolioCard from "../PortfolioCrad/PortfolioCard";
import portfolio1 from "@/assets/images/portfolio1.svg";
import presentation from "@/assets/images/presentation.svg";
import websitedev from "@/assets/images/website-dev.svg";
import uiux from "@/assets/images/uiux.svg";
import { motion } from "framer-motion";
import useInViewAnimation from "@/Hooks/useInViewAnimation";
import { useRouter } from "next/router";

const Portfolio = () => {
  const ref = useRef();
  const router = useRouter();
  const cardRef = useRef();

  const portfolio = [
    {
      tittle: "Mobile app development",
      year: "© 2023",
      image: portfolio1,
    },
    {
      tittle: "UI/UX Design",
      year: "© 2023",
      image: uiux,
    },
    {
      tittle: "Website Development ",
      year: "© 2023",
      image: websitedev,
    },
    {
      tittle: "Presentations Design",
      year: "© 2023",
      image: presentation,
    },
  ];
  const handlePortfolio = (ind) => {
    if (ind == 0) {
      router.push(`/mobile-development`);
    } else if (ind == 1) {
      router.push(`/ui-ux`);
    } else if (ind == 2) {
      router.push(`/website-development`);
    } else if (ind == 3) {
      router.push(`/presentation-design`);
    }
  };
  return (
    <div id="portfolio" className="bg-blue">
      <div className="container portfolioContainer container-padding">
        <div className="portfolio-btn-wrapper">
          <TopHeading
            elementRef={ref}
            tittle={"Selected  "}
            colorTitle={"Works"}
            btnText={"Portfolio"}
          />
          {/* <button className="btn3">
            <span className="btntext">
              {" "}
              View All Work <img src={arrow.src} />{" "}
            </span>
          </button> */}
        </div>
        <div className="portfiolio-card-box">
          <div className="portfolio-row">
            {portfolio.slice(0, 2).map((item, ind) => {
              return (
                <div onClick={() => handlePortfolio(ind)} key={ind}>
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
                <div onClick={() => handlePortfolio(ind+2)} key={ind}>
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
