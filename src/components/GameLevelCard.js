import React from "react";
import PropTypes from "prop-types";
import styles from "./GameLevelCard.module.css";

const GameLevelCard = ({
  image,
  title,
  description,
  points,
  difficulty,
  isLocked,
}) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={title} />
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.points}>Points: {points}</p>
        <p className={styles.difficulty}>Difficulty: {difficulty}</p>
      </div>
      <button className={styles.playButton} disabled={isLocked}>
        {isLocked ? (
          <>
            <span className={styles.lockIcon}>&#x1F512;</span> Locked
          </>
        ) : (
          "Play Now!"
        )}
      </button>
    </div>
  );
};

GameLevelCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  difficulty: PropTypes.string.isRequired,
  isLocked: PropTypes.bool.isRequired,
};

export default GameLevelCard;
