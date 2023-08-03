import React from "react";
import flag from "@/assets/images/flag.svg";
import { AiFillStar } from "react-icons/ai";

const ReviewCard = ({ userPic }) => {
  return (
    <div className="reviewCard">
      <div className="reviewCardHeader">
        <div>
          <img src={userPic.src} alt="" />
        </div>
        <div>
          <p className="p1">Pegasuseagel</p>
          <div className=" flagName">
            {" "}
            <img src={flag.src} alt="" />
            <p className="p2">Garmany</p>
          </div>
        </div>
        <div className="starBox">
          <AiFillStar className="red-color" style={{ fontSize: "20px" }} />
          <AiFillStar className="red-color" style={{ fontSize: "20px" }} />
          <AiFillStar className="red-color" style={{ fontSize: "20px" }} />
          <AiFillStar className="red-color" style={{ fontSize: "20px" }} />
          <AiFillStar className="red-color" style={{ fontSize: "20px" }} />
        </div>
      </div>
      <p className="p1 clientreview">
        Hi skill are from another planet, his hands are blessed by god. Highly
        recommended when it comes to power point. There is litteraly nothing you
        can do wrong by working with this mate.
      </p>
    </div>
  );
};

export default ReviewCard;
