import React from 'react';
import Modal from 'react-modal';
import styles from "./CustomModal.module.css";

const CustomModal = ({ isOpen, onRequestClose, title, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={title}
      className={styles.modal}
      overlayClassName={styles.customOverlay}
    >
      <span className={styles.title}>{title}</span>
      {children}
    </Modal>
  );
};

export default CustomModal;
