import MobilePortfolio from "@/Component/MobilePortfolio/MobilePortfolio";
import TopHeading from "@/Component/TopHeading/TopHeading";
import React, { useRef } from "react";

const MobileDevelopment = () => {
  const ref = useRef();

  return (
    <div className="bg-darkblue">
      <div className="container mobiledevelopment container-padding ">
        <div className="developmentWrapper">
          <TopHeading
            elementRef={ref}
            tittle={"Mobile App  "}
            colorTitle={"Development"}
            btnText={"Portfolio"}
          />
        </div>
        {/* <MobilePortfolio /> */}
      </div>
      <MobilePortfolio />

    </div>
  );
};

export default MobileDevelopment;
