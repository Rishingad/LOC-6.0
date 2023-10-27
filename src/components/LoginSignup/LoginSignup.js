"use client";
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { IP } from "../../constant";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import styles from './LoginSignup.module.css'
import useStorage from '../../hooks/useSessionStorage'

const LoginSignup = () => {
  const switchRef = useRef(null);
  const loginFormRef = useRef(null);
  const signupFormRef = useRef(null);
  const storage = useStorage();


  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSwitch = () => {
    const switchCheckbox = switchRef.current;
    const loginForm = loginFormRef.current;
    const signupForm = signupFormRef.current;

    if (switchCheckbox.checked) {
      loginForm.style.display = "none";
      signupForm.style.display = "block";
    } else {
      loginForm.style.display = "block";
      signupForm.style.display = "none";
    }
  };

  const handleLoginSubmit = async () => {
    try {
      const response = await axios.post(`${IP}/auth/login`, {
        email: loginData.email,
        password: loginData.password,
      });
      console.log("Login successful", response.data);
      alert("Login successful");

      storage.setItem("token", response.data.token)


      router.push("/");
      toast.success("Login Successful", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      console.error("Login failed", error);
      alert("Login failed");
      toast.error("Login Failed", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const handleSignupSubmit = async () => {
    try {
      const response = await axios.post(`${IP}/auth/register`, {
        email: signupData.email,
        password: signupData.password,
        firstName: signupData.firstName,
        lastName: signupData.lastName,
      });
      console.log("Signup successful", response.data);
      alert("Signup successful");


      storage.setItem("token", response.data.token);

      router.push("/");
      toast.success("SignUp Successful", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      // Handle success response and store the token if needed
    } catch (error) {
      alert("Login failed");
      console.error("Signup failed", error);
      toast.error("Signup Failed", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      // Handle error response
    }
  };

  const handleLoginInputChange = (e) => {
    // alert(loginData.email);
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupInputChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles["form-div"]}>
      <div className={styles["option-text"]}>
        <p>Log In</p>
        <p>Sign Up</p>
      </div>
      <div className={`${styles["switch-wrapper"]} ${styles["absolute"]}`}>
        <input
          type="checkbox"
          name="check"
          id="check"
          className={styles["check"]}
          ref={switchRef}
          onChange={handleSwitch}
        />
      </div>
      <div className={`${styles["login-form"]} ${styles["absolute"]}`} ref={loginFormRef}>
        <div className={`${styles.flex} ${styles.front} ${styles["front-not"]}`}>
          <div className={styles["heading"]}>Log In</div>
          <div className={styles["email-container"]}>
            <input
              type="text"
              name="email"
              id="email"
              className={styles["inputText"]}
              placeholder="abc@xyz.com"
              value={loginData.email}
              onChange={handleLoginInputChange}
            />
            <i className="fas fa-at"></i>
          </div>
          <div className={styles["password-container"]}>
            <input
              type="text"
              className={styles["inputText"]}
              name="password"
              id="pass"
              placeholder="Enter Password"
              value={loginData.password}
              onChange={handleLoginInputChange}
            />
            <i className="fas fa-lock"></i>
          </div>
          <div className={styles["submit-container"]}>
            <button type="submit" onClick={handleLoginSubmit}>
              Log In
            </button>
          </div>
        </div>
      </div>
      <div className={`${styles["login-form"]} ${styles["absolute"]}`} ref={signupFormRef}>
        <div className={`${styles.flex} ${styles.front} ${styles["front-not"]}`}>
          <div className={styles["heading"]}>Sign Up</div>
          <div className={styles["fname-container"]}>
            <input
              type="text"
              className={styles["inputText"]}
              name="firstName"
              id="fname"
              placeholder="Enter Your First Name"
              value={signupData.firstName}
              onChange={handleSignupInputChange}
            />
            <i className="fas fa-user"></i>
          </div>
          <div className={styles["fname-container"]}>
            <input
              type="text"
              className={styles["inputText"]}
              name="lastName"
              id="lname"
              placeholder="Enter Your Last Name"
              value={signupData.lastName}
              onChange={handleSignupInputChange}
            />
            <i className="fas fa-user"></i>
          </div>
          <div className={styles["email-container"]}>
            <input
              type="text"
              className={styles["inputText"]}
              name="email"
              id="email"
              placeholder="abc@xyz.com"
              value={signupData.email}
              onChange={handleSignupInputChange}
            />
            <i className="fas fa-at"></i>
          </div>
          <div className={styles["password-container"]}>
            <input
              type="text"
              className={styles["inputText"]}
              name="password"
              id="pass"
              placeholder="Enter Password"
              onChange={handleSignupInputChange}
            />
            <i className="fas fa-lock"></i>
          </div>
          <div className={styles["submit-container"]}>
            <button type="submit" onClick={handleSignupSubmit}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
