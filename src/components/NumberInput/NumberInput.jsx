import React from 'react';

import styles from "./NumberInput.module.scss";

// TODO: Test this component

const NumberInput = ({
  error = false,
  label,
  onChange,
  placeholder="",
  setValue = () => {},
  value = "",
  warning = false,
}) => {
  const inputClassNames = `
    common-input
    ${error ? "error" : ""}
    ${warning ? "warning" : ""}
  `;

  const handleInput = (e) => {
    const valueIsNumber = !isNaN(parseInt(e.target.value));

    if (setValue && typeof setValue === "function" && valueIsNumber) {
      setValue(e.target.value);
    }

    if (onChange && typeof onChange === "function") {
      onChange(e);
    }
  };

  return (
    <div className={`input-wrapper ${styles.wrapper}`}>
      {
        label && (<label>{label}</label>)
      }
      <input
        className={inputClassNames}
        onChange={e => handleInput(e)}
        placeholder={placeholder}
        type="number"
        value={value}
      />
    </div>
  );
}
 
export default NumberInput;
