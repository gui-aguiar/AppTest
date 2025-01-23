import React from "react";
import styles from "./Input.module.css";

const Input = ({ id, placeholder, setValue, ...props }) => {
  return (
    <>
      <input className={styles.inputField}
        id={id}
        name={id}
        placeholder={placeholder}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  );
};

export default Input;
