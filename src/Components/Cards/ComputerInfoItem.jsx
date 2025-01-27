import React from "react";
import styles from "./ComputerInfoItem.module.css";

const ComputerInfoItem = ({ label, value, warrantyColor, hideOnCollapse = false }) => {
  const styleClass =  `${styles.infoItem} ${hideOnCollapse ? styles.hiddenOnCollapse : "" }`;
  const valueStyle = warrantyColor ? { color: warrantyColor } : {}; // css condicional? mas ai teria que mudar todo o projeto pra seguir o mesmo padrao

  return (
    <div className={styleClass}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value} style={valueStyle}>{value || "N/A"}</span>
    </div>
  );
};
  
export default ComputerInfoItem;