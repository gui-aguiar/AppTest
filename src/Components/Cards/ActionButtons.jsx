import React from "react";
import Styles from "./ActionButtons.module.css";
import ActionButton from "./ActionButton";
import CustomModal from "../Modal/CustomModal";
import ModalFormFields from "../Modal/ModalFormFields";
import ConfirmActionModalItems from "../Modal/ConfirmActionModalItems";
import UsersModalFields from "../Modal/UserModalFields";
import { updateComputer } from "../API/Api";

const ActionButtons = ({ item, onDelete, onRemoveUser, onAssignUser, onUpdate }) => {
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = React.useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = React.useState(false);
  const [formData, setFormData] = React.useState(item);

  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  const openUserModal = () => setIsUserModalOpen(true);
  const closeUserModal = () => setIsUserModalOpen(false);

  const openConfirmModal = () => setIsConfirmModalOpen(true);
  const closeConfirmModal = () => setIsConfirmModalOpen(false);

  const handleUpdate = async () => {
    try {
      const updatedComputer = await updateComputer(item.id, formData);
      if (updatedComputer) {
        console.log("Computer updated successfully:", updatedComputer);
        onUpdate(updatedComputer);
        closeEditModal();
      } else {
        alert("Failed to update the computer. Please try again.");
      }
    } catch (error) {
      console.error("Error updating computer:", error);
      // alert("An error occurred while updating the computer.");
    }
  };

  const handleDelete = async () => {
    await onDelete(item.id);
    closeConfirmModal();
  };

  const handleRemoveUser = async () => {
    await onRemoveUser(item.id);
    closeConfirmModal();
  };

  const handleAssignUser = async (userId) => {
    await onAssignUser(item.id, userId);
    closeUserModal();
  };

  const userIcon = item.userId ? "faUserTimes" : "faUserPlus";
  const handleUserClick = () => {
    if (item.userId) {
      openConfirmModal();
    } else {
      openUserModal();
    }
  };

  return (                                                                                      // TODO fazer a logica e classes no css como no hideOnColapse
    <div className={Styles.actionButtons}>
      <ActionButton iconName={userIcon} onClick={handleUserClick} style={{ backgroundColor: item.userId ? "var(--ruby)" : "" }} />  
      <ActionButton iconName="faEdit" onClick={openEditModal} />
      <ActionButton iconName="faTimes" onClick={openConfirmModal} style={{ backgroundColor: "var(--ruby)" }} />
      
      <CustomModal
        isOpen={isEditModalOpen}
        onRequestClose={closeEditModal}
        title="Edit Computer"
      >
        <ModalFormFields
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleUpdate}
        />
      </CustomModal>

      <CustomModal
        isOpen={isConfirmModalOpen}
        onRequestClose={closeConfirmModal}
        title={item.userId ? "Remove User" : "Confirm Deletion"}
      >
        <ConfirmActionModalItems
          message={
            item.userId
              ? `Are you sure you want to unassing the user from this computer?`
              : `Are you sure you want to delete the computer?`
          }
          onConfirm={item.userId ? handleRemoveUser : handleDelete}
          onCancel={closeConfirmModal}
        />
      </CustomModal>

      <CustomModal
        isOpen={isUserModalOpen}
        onRequestClose={closeUserModal}
        title="Assign User"
      >
        <UsersModalFields onAssignUser={handleAssignUser} />
      </CustomModal>
    </div>
  );
};

export default ActionButtons;
