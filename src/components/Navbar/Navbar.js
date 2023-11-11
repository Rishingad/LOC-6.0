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
      <img src={Logo} height={80} width={90} alt=""></img>
      <ul className={`nav-menu ${isMenuOpen ? "menu-show" : ""}`}>
        <li className="cursor-pointer">
          <a href={"/"}>About</a>
        </li>
        <li className="cursor-pointer">
          <a href={"#about"}>Domains</a>
        </li>
        <li className="cursor-pointer">
          <a href={"#gallery"}>Prizes</a>
        </li>
        <li className="cursor-pointer">
          <a href={"#faq"}>Contact Us</a>
        </li>
        <li className="cursor-pointer">
          <a href={"#contact"}>FAQs</a>
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
