import React, { useEffect } from 'react';

import styles from './Select.module.scss';

const isFunction = (input) => input && typeof input === "function";

const Select = ({
  disabled = false,
  label,
  options = [],
  optionField = null, // key name to use for value if "options" is an array of js objects
  setValue = () => {},
  value = "",
}) => {
  /*
    Plans for Select:

    - Remove default input dropdown arrow and use own implementation
    - Override default system dropdown UI and create custom appearance
      - Make dropdown know to go upwards if the list would go off the bottom
        of the page
          - What if it would go off the edge of both?
  */

  const getClassNames = () => `
    select-input
    common-input
  `;

  const handleSelect = (e) => {
    isFunction(setValue) && setValue(e.target.value);
  };

  useEffect(() => {
    if (options && Array.isArray(options) && options.length > 0) {
      isFunction(setValue) && setValue(options[0]);
    }
  }, []);

  return (
    <div className={`${styles.wrapper} input-wrapper`}>
      {
        label && (<label>{label}</label>)
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
