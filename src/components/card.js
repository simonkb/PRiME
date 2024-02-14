import React from "react";
import styles from "./card.module.css";

const Card = ({ image, topBarColor, title, description }) => {
  return (
    <div className={styles.card} style={{ boxShadow: topBarColor }}>
      <img className={styles.image} alt="" src={image} />
      <div className={styles.cardContent}>
        <div className={styles.title}>{title}</div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
export default Card;
