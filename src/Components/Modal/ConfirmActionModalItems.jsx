import React from 'react';
import styles from './CustomModal.module.css';
import Button from '../Form/Button';

const ConfirmActionModalItems = ({ message, onConfirm, onCancel }) => {
  return (
    <div className={styles.confirmActionModalItems}>
      <p className={styles.description}>{message}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
      <Button
          onClick={onCancel}
          disabled={false}
          disabledStyle={true}
          extraClasses={styles.button}
          >
            No
        </Button>

        <Button
          onClick={onConfirm}
          disabled={false}
          disabledStyle={false}
          extraClasses={styles.button}
          >
            Yes
        </Button>        
      </div>
    </div>
  );
};

export default ConfirmActionModalItems;


// coisa pra caralho inline, tirar essas merdas 
// estilizar essas bosta