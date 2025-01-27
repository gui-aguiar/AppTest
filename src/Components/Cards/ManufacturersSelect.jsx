import React, { useEffect, useState } from "react";
import Select from "../Form/Select";
import { getManufacturers } from "../API/Api";

const ManufacturerSelect = ({ onChange }) => {
  const [manufacturers, setManufacturers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchManufacturers = async () => {
      const data = await getManufacturers();
      setManufacturers(
        data.map((manufacturer) => ({
          id: manufacturer.id,
          name: manufacturer.name,
          serialRegex: manufacturer.serialRegex,
        }))
      );
      setIsLoading(false);
    };

    fetchManufacturers();
  }, []);

  const handleSelectChange = (selectedId) => {
    const selectedManufacturer = manufacturers.find(
      (manufacturer) => manufacturer.id === parseInt(selectedId, 10)
    );
    if (selectedManufacturer) {
      onChange(selectedManufacturer);
    }
  };

  return (
    <div>
      <Select
        options={manufacturers}
        onChange={(value) => handleSelectChange(value)}
        placeholder={isLoading ? "Loading manufacturers..." : "Select a manufacturer"}
        disabled={isLoading}
      />
    </div>
  );
};

export default ManufacturerSelect;
