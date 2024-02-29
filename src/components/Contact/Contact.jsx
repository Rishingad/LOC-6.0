import React, { useEffect, useState } from "react";
import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Spinner from "../Spinner";
import "./Contact.css";
import Aos from "aos";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <div className="main_contact_container" id="contact">
        <h1 className="contact_head" data-aos="fade-right">
          Contact Us
        </h1>
        <div className="contact_container">
          <div className="left_container" data-aos="fade-right">
            <h1 className="inner_contact_head">Email</h1>
            <div className="inner_section1">
              <div className="icon">
                <a href="mailto:coreacm@gmail.com">
                  <IoMdMail className="mail_icon" />
                </a>
              </div>
              <div className="contact_mail">
                <a href="mailto:coreacm@gmail.com">coreacm@gmail.com</a>
              </div>
            </div>
            <h1 className="inner_contact_head">Phone Number</h1>
            <div className="number number1"><span>Deepika Muchhala -</span><span> +919372022651</span></div>
            <div className="number number2"><span>Devarshee Thopte -</span><span> +919967542771</span></div>
            <h1 className="inner_contact_head">Socials</h1>
            <div className="socials_icons">
              <a target="blank" href="https://instagram.com/djsanghvi_acm">
                <FaInstagram className="insta social_icon" />
              </a>
              <a
                target="blank"
                href="https://linkedin.com/company/dj-sanghvi-acm/"
              >
                <CiLinkedin className="linked social_icon" />
              </a>
              <a target="blank" href="https://twitter.com/djsanghvi_acm">
                <FaTwitter className="twitter social_icon" />
              </a>
              <a target="blank" href="https://facebook.com/djsanghvi_acm/">
                <FaFacebookF className="fb social_icon" />
              </a>
            </div>
            <div className="location_section">
              <div className="location_icon">
                <FaLocationDot />
              </div>
              <div className="location_address">
                SVKM's Dwarkadas J. Sanghvi College of Engineering,
                Bhaktivedanta Swami Road, opp. Cooper Hospital, Navpada, JVPD
                Scheme, Vile Parle, Mumbai, Maharashtra 400056
              </div>
            </div>
          </div>
          <div className="right_container" data-aos="fade-left">
            <div>
              {isLoading && <Spinner />}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.005923900579!2d72.83461397423584!3d19.10739605098805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sSVKM&#39;s%20Dwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1707735163058!5m2!1sen!2sin"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                loading="lazy"
                onLoad={handleLoad}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="main_website">
              visit us at{" "}
              <a className="main_href" target="blank" href="https://djacm.co/">
                https://djacm.co/
              </a>
            </div>
          </div>
        </div>
        <footer className="footer">
          <p>Copyright © Lines of Code 6.0 | All rights reserved</p>
        </footer>
      </div>
    </>
  );
};

export default Contact;
