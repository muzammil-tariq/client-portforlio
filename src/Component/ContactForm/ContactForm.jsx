import React, { useEffect, useRef } from "react";
import TopHeading from "../TopHeading/TopHeading";
import waqas from "@/assets/images/waqas.svg";
import whatsapp from "@/assets/images/whatsapp.svg";
import instagram from "@/assets/images/instagram.svg";
import linkdin from "@/assets/images/linkdin.svg";
import facebook from "@/assets/images/facebook.svg";
import arrowright from "@/assets/images/arrow-right.svg";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import useInViewAnimation from "@/Hooks/useInViewAnimation";
import { motion, useAnimation, useInView } from "framer-motion";

const ContactForm = () => {
  const ref = useRef();
  const { elementRef, mainControls } = useInViewAnimation();

  const conatactRef = useRef();
  const isInview = useInView(conatactRef);
  const contactControls = useAnimation();
  useEffect(() => {
    if (isInview) {
      contactControls.start("visible");
    } else {
      contactControls.start("hidden");
    }
  }, [isInview]);
  return (
    <div className="bg-blue">
      <div className="container container-padding contactFormBox">
        <TopHeading
          elementRef={ref}
          tittle={"Let's make your    "}
          colorTitle={"brand brilliant!"}
          btnText={"GET IN TOUCH"}
        />
        <motion.p
          ref={elementRef}
          variants={{
            hidden: { opacity: 0, y: 55 },
            visible: { opacity: 1, y: 0 },
          }}
          initial={"hidden"}
          animate={mainControls}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="p1 conatactText "
        >
          If you would like to work with us or just want to get in touch, we’d
          love to hear from you!
        </motion.p>

        <motion.div
          ref={conatactRef}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial={"hidden"}
          animate={contactControls}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
          className="contact-form"
        >
          <div>
            <img src={waqas.src} alt="" />
            <h6 className="heading5 text-white profile-text">Waqas Abbas</h6>

            <div className="contact-icon">
              <Link href={"/"}>
                <img src={whatsapp.src} alt="" />
              </Link>
              <Link href={"/"}>
                <img src={instagram.src} alt="" />
              </Link>
              <Link href={"/"}>
                <img src={linkdin.src} alt="" />
              </Link>
              <Link href={"/"}>
                <img src={facebook.src} alt="" />
              </Link>
            </div>
            <button className="btn4">
              Book a free call <img src={arrowright.src} alt="" />{" "}
            </button>
          </div>
          <div className="input-wrapper">
            <div className="inputWerapper">
              <input type="text" placeholder="Name" className="inputStyle" />
              <input type="email" placeholder="Email" className="inputStyle" />
            </div>
            <input type="text" placeholder="Subject" className="inputStyle" />
            <textarea
              placeholder="Message"
              className="inputStyle height  "
            ></textarea>
            <button className="outlinebtn1">Lets Talk</button>
          </div>
        </motion.div>
      </div>

      <div className="footer">
        <img src={logo.src} />
        <p className="p1">© 2023 Geekfolio is Proudly Powered by Ui-ThemeZ</p>
      </div>
    </div>
  );
};

export default ContactForm;
