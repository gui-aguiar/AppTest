import React from "react";
import styles from "./ComputerImage.module.css";

const ComputerImage = ({ imageUrl }) => {
  const defaultImage = "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko="; // "https://via.placeholder.com/150/FFFFFF/FFFFFF?text=+";
  return (
    <div className={styles.imagePlaceholder}>
      <img className={styles.image}
        src={imageUrl || defaultImage}
        alt="Computer Image"
      />
    </div>
  );
};

export default ComputerImage;
