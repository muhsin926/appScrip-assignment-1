import React from "react";
import backgroundImage from "../../assets/Images/Motion Background.webp";
import bgLayer from "../../assets/Images/Images.png";
import style from "./style.module.css";
import Image from "next/image";
import GoogleIcon from "@/assets/Icons/GoogleIcon";
import Button from "../Elements/Button";
import TextField from "../Elements/TextField";

const Hero = () => {
  return (
    <section className={style.heroSection}>
      <Image className={style.bgLayer} src={bgLayer} />
      <div className={style.textBox}>
        <h1>A Creator’s Paradise</h1>
        <p>Were Creativity Meets Success</p>
      </div>
      <div className={style.signUpBox}>
        <Button className={style.signInWithGoogle}>
          <div className={style.googleIcon}>{<GoogleIcon />}</div> Continue With
          Google{" "}
        </Button>
        <hr className={style.hr} />
        <form id={style.registerForm} action="#">
          <div className="flex">
            <TextField
              type={"text"}
              placeholder={"First Name*"}
              style={{ width: "10rem" }}
            />
            <TextField
              type={"text"}
              placeholder={"Last Name*"}
              style={{ width: "10rem" }}
            />
          </div>
          <TextField
            style={{ width: "100%" }}
            type={"email"}
            placeholder={"Email*"}
          />
          <TextField type={"password"} placeholder={"Password*"} />
        </form>
        <select className={style.dropdown}>
          <option value="#">(GMT+05:30) india standard Time - Calcutta </option>
        </select>
        <Button className={style.signUpAsUser}>Signup as a user</Button>
        <p className={style.pera}>
          By signing up you agree to our Terms & Conditions and Privacy Policy.
          and confirm that you are at least 18 years old.
        </p>
        <hr className={style.ORhr} />
        <Button className={style.signUpAsCreator}>Signup as a creator</Button>
        <p className={style.pera}>
          Already have an account?
          <span style={{ color: "#7421F4", marginLeft: "2px" }}>Login</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
