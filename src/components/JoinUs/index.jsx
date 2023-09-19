import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import bubblesRight from "../../assets/Images/Bubbles - Right.png";
import bubblesLeft from "../../assets/Images/Bubbles - Left.png";
import Button from "../Elements/Button";

const JoinUs = () => {
  return (
    <section className={style.container}>
      <Image className={style.img} src={bubblesLeft} alt="Bubbles-left" />
      <Image className={style.img} src={bubblesRight} alt="Bubbles-right"/>
      <div className={style.circle} />
      <div className={style.textBox}>
        <p>Don't miss out on ABC's Incredible features and Opportunities.</p>
        <h1>Join us today and unlock your <br/> full potential as a creator</h1>
        <Button className='btn'>Join Now</Button>
      </div>
    </section>
  );
};

export default JoinUs;
