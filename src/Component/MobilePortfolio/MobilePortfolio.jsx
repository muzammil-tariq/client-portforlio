// import Accordion from "react-bootstrap/Accordion";

// function MobilePortfolio() {
//   return (
//     <div className="mobileprotoflio">
//       <Accordion defaultActiveKey="0">
//         <Accordion.Item eventKey="0">
//           <Accordion.Header  >
//             <h1 className="heading1 sora-font">beemove app</h1>
//           </Accordion.Header>
//           <Accordion.Body>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum.
//           </Accordion.Body>
//         </Accordion.Item>
//       </Accordion>
//     </div>
//   );
// }

// export default MobilePortfolio;
import { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import upArrow from "@/assets/images/upArrow.svg";
import SkillBox from "../SkillBox/SkillBox";
import firebase from "@/assets/images/firebase.svg";
import react from "@/assets/images/react.svg";
import Figma from "@/assets/images/Figma.svg";
import node from "@/assets/images/node.svg";
import mobileApp from "@/assets/images/mobileApp.svg";
import screen4 from "@/assets/images/screen4.svg";
import screen3 from "@/assets/images/screen3.svg";
import screen2 from "@/assets/images/screen2.svg";
import screen1 from "@/assets/images/screen1.svg";

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <>
      <div className="accordian-haedwer ">
        <h1 className="heading1 sora-font">beemove app</h1>
        <img onClick={decoratedOnClick} src={upArrow.src} alt="" />
      </div>
    </>
  );
}

function MobilePortfolio() {
  return (
    <div className="mobileprotoflio">
      <Accordion defaultActiveKey="0">
        <Card>
          <div className="container">
            <Card.Header className="">
              {/* <div className="container"></div> */}
              <ContextAwareToggle eventKey="0"></ContextAwareToggle>
            </Card.Header>
          </div>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div className="portfilio-accordian container">
                <div>
                  <h6 className="heading6">About App</h6>
                  <p className="p1">
                    As a skilled designer and developer, I am passionate about
                    crafting unique and user-centric digital solutions that
                    seamlessly blend aesthetics with functionality. With a keen
                    eye for detail and a dedication to delivering exceptional
                    results, I strive to create immersive experiences that leave
                    a lasting impression.
                  </p>
                  <div className="skilssBox">
                    <SkillBox title={"Firebase"} icon={firebase} />
                    <SkillBox title={"react "} icon={react} />
                    <SkillBox title={"node js"} icon={node} />
                    <SkillBox title={"Figma"} icon={Figma} />
                  </div>
                </div>
                <div>
                  <img className="mobileImage" src={mobileApp.src} alt="" />
                </div>
              </div>

              <div className="all-mobilesceens ">
                <div className="container">
                  <h3 className="heading3">
                    All <span className="red-color"> Screens </span>
                  </h3>
                  <div className="all-screen-row">
                    <img src={screen1.src} alt="" />
                    <img src={screen1.src} alt="" />
                    <img src={screen1.src} alt="" />
                    <img src={screen1.src} alt="" />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
export default MobilePortfolio;
// render(<Example />);
