import React, { useState } from "react";
import Logo from "../../assets/images/logo-whitw.png";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function menuHandler() {
    console.log("click");
    console.log(isMenuOpen);
    setIsMenuOpen((state) => !state);
  }
  return (
    <nav className="navbar">
      <a href="/">
        <img src={Logo} height={80} width={90} alt=""></img>
      </a>
      <ul className={`nav-menu ${isMenuOpen ? "menu-show" : ""}`}>
        <li className="cursor-pointer">
          <a href={"#about"}>About</a>
        </li>
        <li className="cursor-pointer">
          <a href={"#domain"}>Domains</a>
        </li>
        <li className="cursor-pointer">
          <a href={"#prize"}>Prizes</a>
        </li>
        <li className="cursor-pointer">
          <a href={"#faq"}>FAQs</a>
        </li>
        <li className="cursor-pointer">
          <a href={"#contact"}>Contact Us</a>
        </li>
        <li className="cursor-pointer">
          <a href={"/register"}>Register Now</a>
        </li>
        {!isMenuOpen ? null : (
          <CloseIcon
            onClick={menuHandler}
            fontSize="large"
            color="primary"
          ></CloseIcon>
        )}
      </ul>
      {!isMenuOpen ? (
        <MenuIcon onClick={menuHandler} fontSize="large"></MenuIcon>
      ) : null}
    </nav>
  );
};

export default Navbar;
