import React from "react";
import StarIcon from "@/assets/Icons/StarIcon";
import dummyImage from "../../../assets/Images/demmi card.png";
import style from "../style.module.css";
import Image from "next/image";

const MainCard = ({ item }) => {
  return (
    <div key={item.id} className={style.itemBox}>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <div className='circle' />
      {item.singleImg ? (
        <div className={style.imageBox}>
          <Image src={item.images[0]} className={style.phoneImg} alt="phone-image" />
          <Image src={item.images[1]} className={style.dollarImg} alt="dollar-image"/>
        </div>
      ) : (
        <div className={style.cardWrapper}>
          <div className={style.card}>
            <Image src={dummyImage} className={style.cardImage} alt="Dummy-Image" />
          </div>
          {item?.cards.map((card) => (
            <div key={card.name} className={style.card}>
              <Image src={card.image} className={style.cardImage} alt={card.name} />
              <div className={style.cardContent}>
                <h5>{card.name}</h5>
                <div className={style.priceDiv}>
                  <h2>{card.price}</h2>
                  <p>
                    <StarIcon /> {card.rate}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainCard;
