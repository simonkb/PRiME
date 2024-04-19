import styles from "./pointsDisplay.module.css";
import { useState, useEffect } from "react";
import { CSSTransition } from 'react-transition-group';
const PointsDisplay = ({ points}) => {
  const [totalPoints, setTotalPoints] = useState(0);

  const [showAnimation, setShowAnimation] = useState(false);
  const [pointChange, setPointChange] = useState(0);
  const [animationType, setAnimationType] = useState("");

  useEffect(() => {
    if (pointChange !== 0) {
      setShowAnimation(true);
      setTimeout(() => {
        setShowAnimation(false);
        setPointChange(0);
      }, 1000);
    }
  }, [pointChange]);

  const handlePointChange = (change) => {
    if (change > 0) {
      setAnimationType("positive");
    } else {
      setAnimationType("negative");
    }
    setPointChange(change);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTotalPoints(points);
    }, 100);

    return () => clearTimeout(timer);
  }, [points, totalPoints]);

  return (
    <div className={styles.pointsContainer}>
      <div className={styles.pointsValue}>
        Points: {totalPoints}
        <CSSTransition
          in={showAnimation}
          timeout={1000}
          classNames={{
            enter: styles[`pointsAnimation-enter-${animationType}`],
            enterActive:
              styles[`pointsAnimation-enter-active-${animationType}`],
            exit: styles[`pointsAnimation-exit-${animationType}`],
            exitActive: styles[`pointsAnimation-exit-active-${animationType}`],
          }}
          unmountOnExit
        >
          <span className={styles.pointsChangeAnimation}>
            {animationType === "positive"
              ? `+${pointChange}`
              : `-${pointChange}`}
          </span>
        </CSSTransition>
      </div>
    </div>
  );
};
export default PointsDisplay;
