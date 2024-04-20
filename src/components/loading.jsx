import React from "react";
import styles from "./loading.module.css";

const Loading = ({ size }) => {
  const containerStyle = {
    width: size,
    height: size,
  };

  return (
    <div style={containerStyle}>
      <div className={styles.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
