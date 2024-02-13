import React from 'react';

import styles from "./Checkbox.module.scss";

// TODO: Implement this component

const Checkbox = ({
  key,
  label = "",
  setValue = () => {},
  value,
}) => {
  const handleCheckboxChange = (e) => {
    if (setValue && typeof setValue === "function") {
      setValue(e.target.checked);
    }
  }

  const checkboxJSX = (
    <input 
      checked={value}
      onChange={(e) => handleCheckboxChange(e)}
      type="checkbox" 
    />
  );


  return (
    <div className={styles.wrapper} key={key}>
      {
        label ? (
          <label>{checkboxJSX}{label}</label>
        ) : (
          {checkboxJSX}
        )
      }
    </div>
  );
}
 
export default Checkbox;
