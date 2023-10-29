import React from "react";
import Image from "next/image";
import "./SocialMediaSideBar.css";
import Link from "next/link";
import {
  InstaLink,
  TwitterLink,
  LinkedinLink,
  FacebookLink,
  EmailLink,
} from "../../constant";
const SocialMediaSideBar = () => {
  return (
    <div className="social-sidebar-container ">
      <Link
        href={FacebookLink}
        target="_blank"
        className="social-icon-container cursor-pointer"
      >
        <Image src={"./facebook.svg"} width={50} height={50}></Image>
      </Link>

      <Link
        href={InstaLink}
        target="_blank"
        className="social-icon-container cursor-pointer"
      >
        <Image src={"./instagram.svg"} width={50} height={50}></Image>
      </Link>

      <Link
        href={EmailLink}
        target="_blank"
        className="social-icon-container cursor-pointer"
      >
        <Image src={"./email.svg"} width={50} height={50}></Image>
      </Link>

      <Link
        href={TwitterLink}
        target="_blank"
        className="social-icon-container cursor-pointer"
      >
        <Image src={"./twitter.svg"} width={50} height={50}></Image>
      </Link>

      <Link
        href={LinkedinLink}
        target="_blank"
        className="social-icon-container cursor-pointer"
      >
        <Image src={"./linkedin.svg"} width={50} height={50}></Image>
      </Link>
    </div>
  );
};

export default SocialMediaSideBar;
