import React from "react";

const Select = ({ options, onChange, placeholder = "Select an option", disabled = false }) => {
  return (
    <select onChange={(e) => onChange(e.target.value)} disabled={disabled}>
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
