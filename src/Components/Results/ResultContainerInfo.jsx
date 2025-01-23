import React from "react";
import styles from "./ResultContainerInfo.module.css";

const ResultContainerInfo = ({ children }) => {
  return <p className={styles.info}>{children}</p>;
};

export default ResultContainerInfo;
