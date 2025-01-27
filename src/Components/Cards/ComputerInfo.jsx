import React from "react";
import styles from "./ComputerInfo.module.css";
import ComputerInfoItem from "./ComputerInfoItem";
import { getUserById, getStatusById, getManufacturerById } from "../API/Api";

const ComputerInfo = ({ data }) => {
  const visibleOnCollapse = ["serialNumber", "specification", "purchasedOn", "OS"];

  const friendlyLabels = {
    id: "Id",
    serialNumber: "Serial Number",
    specifications: "Specifications",
    purchaseDate: "Purchase Date",
    assignedTo: "Assigned To",
    warranty: "Warranty",
    manufacturerId: "Manufacturer Id",
    model: "Model",
    os: "Operating System",
    warrantyExpirationDate: "Warranty Expiration Date",
    userId: "User Id",
    statusId: "Status Id",
  };

  const calculateWarrantyColor = (expirationDate) => {
    if (!expirationDate) return null;

    const currentDate = new Date();
    const expiryDate = new Date(expirationDate);
    const differenceInDays = (expiryDate - currentDate) / (1000 * 60 * 60 * 24);

    if (differenceInDays < 0) return "red";
    if (differenceInDays <= 30) return "yellow";
    return "green";
  };

  const [userName, setUserName] = React.useState(null);
  const [statusName, setStatusName] = React.useState(null);
  const [manufacturerName, setManufacturerName] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      if (data.userId) {
        const user = await getUserById(data.userId);
        if (user) setUserName(`${user.firstName} ${user.lastName}`);
      }

      if (data.statusId) {
        const status = await getStatusById(data.statusId);
        if (status) setStatusName(status.localizedName || "Unknown");
      }

      if (data.manufacturerId) {
        const manufacturer = await getManufacturerById(data.manufacturerId);
        if (manufacturer) setManufacturerName(manufacturer.name);
      }
    };

    fetchData();
  }, [data.userId, data.statusId, data.manufacturerId]);

  const transformedData = Object.entries(data).map(([key, value]) => {
    let displayValue = value;

    if (key === "userId" && userName) displayValue = userName;
    if (key === "statusId" && statusName) displayValue = statusName;
    if (key === "manufacturerId" && manufacturerName) displayValue = manufacturerName;

    const warrantyColor =
      key === "warrantyExpirationDate" ? calculateWarrantyColor(value) : null;

    return {
      label: friendlyLabels[key] || key,
      value: displayValue,
      hideOnCollapse: !visibleOnCollapse.includes(key),
      warrantyColor,
    };
  });

  return (
    <div className={styles.computerInfo}>
      {transformedData.map(({ label, value, warrantyColor, hideOnCollapse }, index) => (
        <ComputerInfoItem
          key={index}
          label={label}
          value={value}
          hideOnCollapse={hideOnCollapse}
          warrantyColor={warrantyColor}
        />
      ))}
    </div>
  );
};

export default ComputerInfo;
