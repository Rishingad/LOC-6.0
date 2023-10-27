import React from "react";
import LoginSignup from "../../components/LoginSignup/LoginSignup";
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";
const Login = () => {
  return (
    <>
      <Navbar disableLinks={true}></Navbar>
      <LoginSignup></LoginSignup>
    </>
  );
};

export default Login;
