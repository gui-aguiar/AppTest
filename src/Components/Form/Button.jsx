import styles from "./Button.module.css";

const Button = ({ children, disabled, disabledStyle, handleClick, ...props }) => {
  return (
    <button  className={`${styles.button} ${disabledStyle ? styles.disabled : styles.enabled}`}               
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
    {children}
    </button>      
  );
};

export default Button;
