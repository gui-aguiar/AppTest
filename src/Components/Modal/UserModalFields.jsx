import React, { useState } from "react";
import styles from "./CustomModal.module.css";
import UsersSelect from "../Cards/UsersSelect";
import Button from "../Form/Button";

const UsersModalFields = ({ onAssignUser }) => {
  const [selectedUserId, setSelectedUserId] = useState(null); 

  const handleAssign = () => {
    if (selectedUserId) {
      onAssignUser(selectedUserId);
    } else {
      alert("Please select a user before assigning.");
    }
  };

  return (
    <div className={styles.editModalForm}>
      <div className={styles.editModalInnerDiv}>
        <UsersSelect onChange={(value) => setSelectedUserId(value)} />
      </div>
      <Button onClick={handleAssign} disabled={!selectedUserId}>
        Set User
      </Button>
    </div>
  );
};

export default UsersModalFields;
