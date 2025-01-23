import React from "react";
import styles from "./Radio.module.css";

const Radio = ({ options, value, setValue, ...props }) => {
  return (
    <div className={styles.radioGroup}>
      {options.map((option) => (
        <label key={option} className={styles.radioLabel}>
          <input
            className={styles.radioInput}
            type="radio"
            value={option.toLowerCase()}
            checked={value === option.toLowerCase()}
            onChange={({ target }) => setValue(target.value)}
            {...props}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Radio;
  