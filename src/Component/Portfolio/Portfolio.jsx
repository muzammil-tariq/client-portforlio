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
import { useDispatch, useSelector } from "react-redux";
import {
  Selected,
  mobileDispatch,
  presentationDispatch,
  uiuxDispatch,
  websiteDev,
} from "@/store/action";

const Portfolio = () => {
  const uiuxState = useSelector((state) => state && state.uiuxDesign.uiux);
  const selecteSate = useSelector(
    (state) => state && state.selectedReducer.selected
  );
  console.log("selecteSate", selecteSate);
  const ref = useRef();
  const router = useRouter();
  const dispatch = useDispatch();
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
    if (ind == "Mobile app development") {
      router.push(`/mobile-development`);
    } else if (ind == "UI/UX Design") {
      router.push(`/ui-ux`);
    } else if (ind == "Website Development ") {
      router.push(`/website-development`);
    } else if (ind == "Presentations Design") {
      router.push(`/presentation-design`);
    }
  };

  useEffect(() => {
    dispatch(Selected());
  }, []);
  const itemsPerRow = 2;
  const numRows = Math.ceil(selecteSate?.length / itemsPerRow);

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
          {Array.from({ length: numRows }, (_, rowIndex) => (
            <div className="portfolio-row" key={rowIndex}>
              {selecteSate &&
                selecteSate
                  .slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow)
                  .map((item, ind) => (
                    <div
                      onClick={() => handlePortfolio(item.portfolioType)}
                      key={ind}
                      className="portfolio-card"
                    >
                      <PortfolioCard
                        showtittle
                        likeCount={item.likeCount ?? 0}
                        views={item.views ?? 0}
                        bluecolor={"bg-blue"}
                        tittle={item.portfolioType}
                        year={item.year}
                        image={item.webImage ? item.webImage : item.appImage}
                      />
                    </div>
                  ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
