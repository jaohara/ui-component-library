import React from 'react';

import styles from "./Slider.module.scss";

// TODO: Implement this component

const Slider = ({
  max = 10,
  min = 0,
  step = 1,
  width,
}) => {
  return (
    <input
      className={styles.slider} 
      max={max}
      min={min}
      step={step}
      style={width ? { width } : null}
      type="range"
    />
  );
}
 
export default Slider;
