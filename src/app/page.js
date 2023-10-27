"use client";
//main page
import Navbar from "../components/Navbar/Navbar";
import HomePage from "../components/Home/Home";
import SocialMediaSideBar from "../components/SocialMediaSideBar/SocialMediaSideBar";
import Carousel from "../components/Carousel/Carousel";
import AboutUs from "../components/AboutUs/AboutUs";
import FAQ from "../components/FAQ/FAQ";
import Contact from "../components/Contact/Contact";
import { redirect } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import useStorage from '../hooks/useSessionStorage'

export default function Home() {
  const storage = useStorage()
  function isTokenAvailable() {
    return storage.getItem("token");
  }
  const hasToken = isTokenAvailable();
  if (hasToken) {
    return (
      <>
        <Navbar disableLinks={false}></Navbar>
        <SocialMediaSideBar></SocialMediaSideBar>
        <HomePage></HomePage>
        <section className="about-section">
          <Carousel></Carousel>
          <AboutUs></AboutUs>
          {/* <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          /> */}
          <Contact></Contact>
          <FAQ></FAQ>
        </section>
      </>
    );
  } else {
    return redirect("/login");
  }
}
