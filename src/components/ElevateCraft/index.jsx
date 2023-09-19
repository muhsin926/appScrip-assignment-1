import React from "react";
import style from "./style.module.css";
import { ELEVATE_CRAFT, MINI_CARDS } from "@/constants";
import Image from "next/image";
import MainCard from "./partials/MainCard";
import MiniCard from "./partials/MiniCard";

const ElevateCraft = () => {
  return (
    <section className={style.mainSection}>
      <h1 className={style.title}>Elevate Your Craft</h1>
      <div className={style.wrapper}>
        {ELEVATE_CRAFT?.map(item => <MainCard item={item} /> )}
      </div>
      <div className={style.miniContainer}>
        {MINI_CARDS?.map(item => <MiniCard item={item} /> )}
      </div>
    </section>
  );
};

export default ElevateCraft;
