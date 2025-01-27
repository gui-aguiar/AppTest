import React from "react";
import styles from "./Header.module.css";
import Logo from "./Logo";
import Button from "../Form/Button";
import CustomModal from "../Modal/CustomModal";
import ModalFormFields from "../Modal/ModalFormFields";
import { createComputer } from "../API/Api";

const Header = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);

  const openCreateModal = () => setIsCreateModalOpen(true);
  const closeCreateModal = () => setIsCreateModalOpen(false);

  const [formData, setFormData] = React.useState({
    manufacturerId: null,
    serialNumber: "",
    specifications: "",
    imageUrl: "",
    purchaseDate: "",
    warrantyExpirationDate: "",
  });

  const handleSubmit = async () => {
    try {
      const response = await createComputer(formData);
      console.log("Computer created successfully:", response);
      closeCreateModal();
      setFormData({});
    } catch (error) {
      console.error("Error creating computer:", error);
    }
  };

  return (
    <header className={styles.header}>
      <Logo />
      <Button
        id="btnAddComputer"
        onClick={openCreateModal}
        disabled={false}
        disabledStyle={false}
      >
        + Add Computer
      </Button>
      <CustomModal
        isOpen={isCreateModalOpen}
        onRequestClose={closeCreateModal}
        title="Register Computer"
      >
        <ModalFormFields
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
        />
      </CustomModal>
    </header>
  );
};

export default Header;
