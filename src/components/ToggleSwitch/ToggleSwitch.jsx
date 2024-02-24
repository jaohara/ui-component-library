import React from 'react';

import styles from "./ToggleSwitch.module.scss";

import { LIBRARY_NAME } from '../../globals';

import isAFunction from '../../utils/isAFunction';

const DEFAULT_LABELS = ["On", "Off"];

const ToggleSwitch = ({
  className,
  onClick,
  setValue = () => {},
  labels = DEFAULT_LABELS,
  value,
}) => {
  const handleClick = (e) => {
    // prioritize onClick if provided
    if (isAFunction(onClick)) {
      onClick();
    }

    // if (setValue && typeof setValue === "function") {
    if (isAFunction(setValue)) {
      setValue((oldValue) => !oldValue);
    }
  };

  const parsedLabels = (() => {
    const labelsAreValid = Array.isArray(labels) && labels.length === 2;

    if (labelsAreValid) {
      return labels;
    }

    console.error(
      `${LIBRARY_NAME}:ToggleSwitch: Provided labels are invalid, please provide\
      an array of two labels as strings.`
    );
    
    return DEFAULT_LABELS;
  })();

  const toggleSwitchClassNames = `
    ${styles["toggle-switch"]}
    ${className ? className : ""}
  `;

  return (
    <button
      aria-checked={value}
      className={toggleSwitchClassNames}
      onClick={(e) => handleClick(e)}
      role='switch'
    >
      {/* {
        value ? parsedLabels[0] : parsedLabels[1]
      } */}
      <span
        className={styles["toggle-slider"]}
      ></span>
    </button>
  );
}
 
export default ToggleSwitch;
