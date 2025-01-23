import React from "react";
import styles from "./ComputerImage.module.css";

const ComputerImage = ({ imageUrl }) => {
  const defaultImage = "https://via.placeholder.com/150/FFFFFF/FFFFFF?text=+";
  return (
    <div className={styles.imagePlaceholder}>
      <img className={styles.image}
        src={imageUrl || defaultImage}
        alt="Content"
      />
    </div>
  );
};

export default ComputerImage;
