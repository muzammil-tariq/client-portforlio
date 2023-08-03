import React from "react";
const SkillBox = ({ icon, title }) => {
  return (
    <div className="SkillBox">
      
        <img src={icon.src} alt="" />
      
      
      <p className="p2">{title}</p>
    </div>
  );
};

export default SkillBox;
