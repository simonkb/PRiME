import React from "react";
import styles from "./card.module.css";
import Image from "next/image";

const Card = ({ image, topBarColor, title, description }) => {
  return (
    <div className={styles.card} style={{ boxShadow: topBarColor }}>
      <Image className={styles.image} alt="" src={image} width={100} height={100}/>
      <div className={styles.title}>{title}</div>
      <div className={`container`}>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
export default Card;
