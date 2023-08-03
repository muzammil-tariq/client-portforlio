import MobilePortfolio from "@/Component/MobilePortfolio/MobilePortfolio";
import TopHeading from "@/Component/TopHeading/TopHeading";
import React, { useRef } from "react";
import portfolio1 from "@/assets/images/portfolio1.svg";
import PortfolioCard from "../PortfolioCrad/PortfolioCard";

const UiUx = () => {
  const ref = useRef();
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
  return (
    <div className="bg-darkblue">
      <div className="container mobiledevelopment container-padding ">
        <div className="website-development">
          <TopHeading
            elementRef={ref}
            tittle={"UI/UX    "}
            colorTitle={"Design"}
            btnText={"Portfolio"}
          />
        </div>

        {/* <div className="webiste-portfolio"> */}
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
        {/* </div> */}
      </div>
    </div>
  );
};

export default UiUx;
