import React from "react";
import Styles from "./ComputerCard.module.css";
import ActionButtons from "./ActionButtons";
import ComputerInfo from "./ComputerInfo";
import ComputerImage from "./ComputerImage";
import {
    deleteComputer,
    removeUserFromComputer,
    assignUserToComputer,
  } from "../API/Api";
import Button from "../Form/Button";

export const ComputerCard = ({ data }) => {
  const { imageUrl, ...rawData } = data;

  const handleDelete = async (computerId) => {
    const success = await deleteComputer(computerId);
    if (success) {
      console.log(`Computer ${computerId} deleted successfully`);
      // pesar no que fazer com aqui , se precisa ou nao 
    }
  };

  const handleRemoveUser = async (computerId) => {
    const success = await removeUserFromComputer(computerId);
    if (success) {
      console.log(`User removed from computer ${computerId}`);
      // pesar no que fazer com aqui , se precisa ou nao 
    }
  };

  const handleAssignUser = async (computerId, userId) => {
    const success = await assignUserToComputer(computerId, userId);
    if (success) {
      console.log(`User ${userId} assigned to computer ${computerId}`);
      // pesar no que fazer com aqui , se precisa ou nao 
    }
  };

  return (
    <div className={Styles.computerCard}>
      <div className={Styles.computerCardInnerDiv}>
        <div className={Styles.computerCardInfoInnerDiv}>
          <ComputerImage imageUrl={imageUrl} />
          <ComputerInfo data={rawData} />
        </div>
        <Button extraClasses={Styles.infoButton}>
          See info
        </Button>
      </div>
      <ActionButtons
        item={data}
        onDelete={handleDelete}
        onRemoveUser={handleRemoveUser}
        onAssignUser={handleAssignUser}
      />
    </div>
  );
};

export default ComputerCard;
