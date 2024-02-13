import React from 'react';

import styles from "./ToggleSwitch.module.scss";

// TODO: Implement this component

const ToggleSwitch = ({
  setValue = () => {},
  label = "",
  value,
}) => {
  const handleClick = (e) => {
    if (setValue && typeof setValue === "function") {
      setValue((oldValue) => !oldValue);
    }
  };

  return (
    <div className={styles.wrapper}>
      {
        label && (<label>{label}</label>)
      }
      {/* Temp implementation */}
      <button
        aria-checked={value}
        onClick={(e) => handleClick(e)}
        role='switch'
      >
        {
          value ? ("ON") : ("OFF")
        }
      </button>
    </div>
  );
}
 
export default ToggleSwitch;
