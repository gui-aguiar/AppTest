import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import styles from "./ActionButtons.module.css";

const ActionButton = ({ children, iconName, onClick, ...props }) => {
  const icon = Icons[iconName];
  return (
    <button className={styles.actionButton} {...props}
      onClick={onClick}>
      <FontAwesomeIcon icon={icon}/> {children}
    </button>
  );
};

export default ActionButton;
