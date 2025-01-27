import styles from "./Button.module.css";

const Button = ({ children, disabled, disabledStyle, handleClick, extraClasses, ...props }) => {
  return (
    <button  className={`${styles.button} ${disabledStyle ? styles.disabled : styles.enabled} ${extraClasses}`}               
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
    {children}
    </button>      
  );
};

export default Button;
