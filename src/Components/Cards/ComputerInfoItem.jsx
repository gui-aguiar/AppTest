import React from "react";
import styles from "./ComputerInfoItem.module.css";

const ComputerInfoItem = ({ label, value, hideOnCollapse = false }) => {
  return (
    <div
      className={`${styles.infoItem} ${
        hideOnCollapse ? styles.hiddenOnCollapse : ""
      }`}
    >
      <span className={styles.label}>{label}:</span>
      <span className={styles.value}>{value || "N/A"}</span>
    </div>
  );
};
  
export default ComputerInfoItem;