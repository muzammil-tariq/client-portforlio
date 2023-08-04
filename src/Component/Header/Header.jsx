import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { HiMenuAlt3 } from "react-icons/hi";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { RiMenu3Line } from "react-icons/ri";
import { useRouter } from "next/router";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
import { useState } from "react";
import whatsapp from "@/assets/images/whatsapp.svg";
import { BsWhatsapp } from "react-icons/bs";

function Header() {
  const phoneNumber = "03056256473";
  const message = "Hello, ";

  // Construct the WhatsApp URL
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  const router = useRouter();
  const [currentIndex, setcurrentIndex] = useState(0);
  console.log(router);
  const navigation = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "services",
      path: "/#services",
    },
    {
      name: "Portfolio",
      path: "/#portfolio",
    },
    {
      name: "Expertise",
      path: "/#Expertise",
    },
    {
      name: "contact",
      path: "/#contact",
    },
  ];
  return (
    <>
      <Navbar
        expand={"lg"}
        className="p-0   bg-body-tertiary  bg-blue headdercontainer  "
        sticky="top"
      >
        <Container className="container-padding">
          <Navbar.Brand className="p-0" href="#">
            {/* <Image priority={false} src={logo} className="logo"></Image> */}
            <img src={logo.src} className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`}>
            <RiMenu3Line style={{ color: "#fff", fontSize: "30px" }} />
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${"md"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
            placement="end"
            className="bg-blue"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"md"}`}>
                <img src={logo.src} className="logo" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3  nav-link-wrapper">
                {navigation.map((item, ind) => {
                  return (
                    <Nav.Link
                      onClick={() => setcurrentIndex(ind)}
                      className={` header-link ${
                        ind == currentIndex ? "active" : ""
                      }`}
                      key={ind}
                      // className={`${
                      //   router.pathname == item.path
                      //     ? " header-link active-nav-link"
                      //     : "header-link"
                      // }  `}
                      href={item.path}
                    >
                      {item.name}
                    </Nav.Link>
                  );
                })}
              </Nav>
              <div className="header-search-box ">
                {/* <img src={whatsapp.src} style={{width:'37px'}} alt="" /> */}
                <button onClick={()=>router.push(whatsappURL)} className="searchbtn">
                  <BsWhatsapp
                    style={{
                      fontSize: "23px",
                      color: "#fff",
                    }}
                  />
                </button>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
