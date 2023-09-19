import Image from "next/image";
import React from "react";
import style from "../style.module.css";

const MiniCard = ({ item }) => {
  return (
    <div key={item.id} className={style.itemBox}>
      <Image src={item.icon} className={style.iconStyle} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.text}</p>
      <div className="circle" />
    </div>
  );
};

export default MiniCard;
