import React from 'react';
import styles from './CustomModal.module.css';

const ModalButton = ({ label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
        <span className={styles.buttonLabel}>{ label }</span>
    </button>
  );
};

export default ModalButton;
