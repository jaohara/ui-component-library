import React, { useEffect } from 'react';

import "./Select.scss";

const isFunction = (input) => input && typeof input === "function";

const Select = ({
  disabled = false,
  label,
  options = [],
  optionField = null, // key name to use for value if "options" is an array of js objects
  setValue = () => {},
  value = "",
}) => {
  const getClassNames = () => `
    select-input
  `;

  const handleSelect = (e) => {
    isFunction(setValue) && setValue(e.target.value);
  };

  useEffect(() => {
    if (options && Array.isArray(options) && options.length > 0) {
      isFunction(setValue) && setValue(options[0]);
    }
  }, [])

  return (
    <div className="select-wrapper input-wrapper">
      {
        label && (<label className="select-lable">{label}</label>)
      }
      <select 
        className={getClassNames()}
        disabled={disabled}
        onChange={e => handleSelect(e)}
        value={value}
      >
        {
          options && options.map((option) => (
            <option
              key={optionField ? option[optionField] : option} 
              value={optionField ? option[optionField] : option} 
            >
              {optionField ? option[optionField] : option}
            </option>
          ))
        }
      </select>
    </div>
  )
};

export default Select;
