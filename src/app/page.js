"use client";
//main page
import Navbar from "../components/Navbar/Navbar";
import HomePage from "../components/Home/Home";
import SocialMediaSideBar from "../components/SocialMediaSideBar/SocialMediaSideBar";
import Carousel from "../components/Carousel/Carousel";
import AboutUs from "../components/AboutUs/Aboutus";
import FAQ from "../components/FAQ/FAQ";
import Contact from "../components/Contact/Contact";
import { redirect } from "next/navigation";
import useStorage from "../hooks/useSessionStorage";

export default function Home() {
  const storage = useStorage();
  function isTokenAvailable() {
    return storage.getItem("token");
  }
  if (isTokenAvailable) {
    return (
      <>
        <Navbar disableLinks={false}></Navbar>
        <SocialMediaSideBar></SocialMediaSideBar>
        <HomePage></HomePage>
        <section className="about-section">
          <AboutUs></AboutUs>
          <Carousel></Carousel>
          <FAQ></FAQ>
          <Contact></Contact>
        </section>
      </>
    );
  } else {
    return redirect("/login");
  }
}
