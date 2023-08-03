import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillBox from "../SkillBox/SkillBox";
import AllSkills from "../AllSkills/AllSkills";
import useInViewAnimation from "@/Hooks/useInViewAnimation";
import { motion } from "framer-motion";
import GoogleSlides from "../GoogleSlides/GoogleSlides";
function PresentationDesignTabs() {
  const { elementRef, mainControls } = useInViewAnimation();
  return (
    <motion.div
      ref={elementRef}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial={"hidden"}
      animate={mainControls}
      transition={{ duration: 1 }}
    >
      <Tabs
        defaultActiveKey="GoogleSlide"
        id="uncontrolled-tab-example"
        className="mb-3 skillTabs"
      >
        <Tab eventKey="GoogleSlide" title="Google Slide">
          <GoogleSlides development presentation uiux />
        </Tab>
        <Tab eventKey="Keynote" title="Keynote">
          <GoogleSlides development />
        </Tab>
        <Tab eventKey="PowerPoint" title="PowerPoint">
          <GoogleSlides presentation />
        </Tab>
      </Tabs>
    </motion.div>
  );
}

export default PresentationDesignTabs;
