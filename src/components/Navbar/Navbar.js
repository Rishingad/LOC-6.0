import React from "react";
import Image from "next/image";
import user from "../../../public/user.svg";
import "./Navbar.css";
import Link from "next/link";
const Navbar = ({ disableLinks }) => {
  if (disableLinks) {
    return (
      <nav className="navbar">
        <Image src={"/images/acm-logo.png"} height={140} width={90}></Image>
        <ul className="">
          <li className="cursor-pointer">
            Home
          </li>
          <li className="cursor-pointer">
            Gallery
          </li>
          <li className="cursor-pointer">
            About
          </li>
          <li className="cursor-pointer">
            Contact Us
          </li>
          <li className="cursor-pointer">
            FAQ's
          </li>
          <li className="cursor-pointer">

            <Image src={user} height={46} width={40}></Image>

          </li>
        </ul>
      </nav>
    );
  } else {


    return (
      <nav className="navbar">
        <Image src={"/images/acm-logo.png"} height={140} width={90}></Image>
        <ul className="">
          <li className="cursor-pointer">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link href={"#about"}>About</Link>
          </li>
          <li className="cursor-pointer">
            <Link href={"#gallery"}>Gallery</Link>
          </li>
          <li className="cursor-pointer">
            <Link href={"#faq"}>FAQ's</Link>
          </li>
          <li className="cursor-pointer">
            <Link href={"#contact"}>Contact Us</Link>
          </li>
          <li className="cursor-pointer">
              <Image src={user} height={46} width={40}></Image>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Navbar;
