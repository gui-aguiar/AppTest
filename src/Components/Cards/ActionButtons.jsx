import React from 'react';
import Styles from './ActionButtons.module.css';
import ActionButton from './ActionButton';

const ActionButtons = () => {
  return (
    <div className={Styles.actionButtons}>
      <ActionButton iconName="faUser"></ActionButton>
      <ActionButton iconName="faEdit"></ActionButton>
      <ActionButton iconName="faTimes"></ActionButton>      
    </div>
  );
};

export default ActionButtons;
