
import { useMemo, useState, useEffect } from "react";
import styles from "./home_background.module.css";

const HomeBackground = ({
  position,
  top,
  left,
  images,
  transitionDuration = 2000,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, transitionDuration);

    return () => clearInterval(intervalId);
  }, [images, transitionDuration]);

  const frameStyle = useMemo(() => {
    return {
      position,
      top,
      left,
    };
  }, [position, top, left]);

  return (
    <div className={styles.frame} style={frameStyle}>
      <div className={styles.overlay} />
      <img
        className={styles.backgroundIcon}
        alt=""
        src={images[currentImageIndex]}
      />
    </div>
  );
};

export default HomeBackground;
