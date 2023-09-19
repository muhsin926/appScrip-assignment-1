import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import image1 from "../../assets/Images/Image 1.png";
import image2 from "../../assets/Images/Image 2.png";
import Button from "../Elements/Button";

const LearnMore = () => {
  return (
    <div className={style.container}>
      <Image height={432} width={400} className={style.img} src={image1} />
      <Image height={432} width={390} className={style.img} src={image2} />
      <div className={style.circle1} />
      <div className={style.circle2} />
      <div className={style.circle3} />
      <div className={style.circle4} />
      <div className={style.textBox}>
        <h1>Join the ABC Community</h1>
        <p>
          Become part of a vibrant and supportive community of like-minded
          creators by joining ABC's exclusive platform. Collaborate, learn, and
          connect with fellow creators who share your passion for adult content
          creation.
        </p>
        <Button className="btn">Learn More</Button>
      </div>
    </div>
  );
};

export default LearnMore;
