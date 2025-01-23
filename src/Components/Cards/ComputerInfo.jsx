import React from "react";
import styles from "./ComputerInfo.module.css";
import ComputerInfoItem from "./ComputerInfoItem";

const ComputerInfo = ({ data }) => {
  const visibleOnCollapse = ["serianNumber", "specification", "purchasedOn", "OS"];
  
  const teste = {
    serianNumber: "XXXXXX",
    specification: "16GB RAM, 512GB SSD",
    purchasedOn: "01/01/2023",
    assignedTo: "John Doe",
    warranty: "2 Years",
    manufacturer: "Dell",
    model: "XPS 15",
    os: "Windows 11",
  };

  return (
    <div className={styles.computerInfo}>
      {Object.entries(teste).map(([key, value]) => (
        <ComputerInfoItem
          key={key}
          label={key}
          value={value}
          hideOnCollapse={!visibleOnCollapse.includes(key)}
        />
      ))}
    </div>
  );
};

export default ComputerInfo;
