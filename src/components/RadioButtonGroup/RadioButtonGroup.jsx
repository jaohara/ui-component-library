import React from 'react';

import styles from "./RadioButtonGroup.module.scss";

// TODO: Implement this component

const RadioButtonGroup = ({
  label="",
  setValue = () => {},
  value,
}) => {
  return (
    <div
      className={styles.wrapper}
    >
      <em>I'm a <strong>RadioButtonGroup</strong> and I need to be implemented.</em>
    </div>
  );
}
 
export default RadioButtonGroup;
