import React from "react";
import Input from "../Form/Input";
import styles from "./CustomModal.module.css";
import ManufacturerSelect from "../Cards/ManufacturersSelect";
import Button from "../Form/Button";

const ModalFormFields = ({ formData, setFormData, onSubmit }) => {
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const isWarrantyDateValid = () => {    
    if (!formData.purchaseDate || !formData.warrantyExpirationDate) return true;
    return new Date(formData.warrantyExpirationDate) > new Date(formData.purchaseDate);
  };

  const isSerialValid = () => {    
    if (!formData.serialRegex || !formData.serialNumber) return true;
    const regex = new RegExp(formData.serialRegex);
    console.log("Regex:", formData.serialRegex);
    console.log("Serial Number:", formData.serialNumber);
    console.log("Validation Result:", regex.test(formData.serialNumber));
    return regex.test(formData.serialNumber);
  };

  const isFormInvalid =
    Object.values(formData).some((value) => !value) ||
    !isWarrantyDateValid() ||
    !isSerialValid();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormInvalid) {
      onSubmit();
    }
  };

  return (
    <form className={styles.editModalForm} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.editModalInnerDiv}>
      <ManufacturerSelect
        value={formData.manufacturerId || 1}
        onChange={(selectedManufacturer) =>
          setFormData({
            ...formData,
            manufacturerId: selectedManufacturer.id,
            serialRegex: selectedManufacturer.serialRegex,
          })
        }
      />
        <Input
          placeholder="Serial Number"
          value={formData.serialNumber || ""}
          onChange={(e) => handleChange("serialNumber", e.target.value)}
          error={!isSerialValid() && "Invalid Serial Number for selected manufacturer"}
        />

        <Input
          placeholder="Specifications"
          value={formData.specifications || ""}
          onChange={(e) => handleChange("specifications", e.target.value)}
        />

        <Input
          placeholder="Image URL"
          value={formData.imageUrl || ""}
          onChange={(e) => handleChange("imageUrl", e.target.value)}
        />

        <Input
          type="datetime-local"
          placeholder="Purchase Date"
          value={formData.purchaseDate || ""}
          onChange={(e) => handleChange("purchaseDate", e.target.value)}
        />

        <Input
          type="datetime-local"
          placeholder="Warranty Expiration Date"
          value={formData.warrantyExpirationDate || ""}
          onChange={(e) => handleChange("warrantyExpirationDate", e.target.value)}
          error={!isWarrantyDateValid() && "Warranty date must be later than purchase date"}
        />
      </div>

      <Button
        type="submit"
        onClick={handleSubmit}
        disabled={isFormInvalid}
        disabledStyle={isFormInvalid}
      >
        Submit
      </Button>
    </form>
  );
};

export default ModalFormFields;
