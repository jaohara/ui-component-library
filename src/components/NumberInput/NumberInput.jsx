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
    ${error ? "error" : ""}
    ${warning ? "warning" : ""}
  `;

  const handleInput = (e) => {
    setValue(e.target.value);

    if (onChange && typeof onChange === "function") {
      onChange(e);
    }
  };

  return (
    <div className={styles.wrapper}>
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
