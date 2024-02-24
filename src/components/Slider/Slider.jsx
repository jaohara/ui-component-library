import React, {
  useMemo,
  // useState,
} from 'react';

import styles from "./Slider.module.scss";

import isAFunction from '../../utils/isAFunction';


// TODO: Implement this component

const Slider = ({
  max = 10,
  min = 0,
  setValue,
  step = 1,
  value,
  width,
}) => {
  const handleChange = (e) => {
    if (isAFunction(setValue)) {
      setValue(e.target.value);
    }    
  };
  
  const sliderStyle = useMemo(() => {
    const styleObject = {
      WebkitAppearance: 'none',
      borderRadius: "var(--slider-track-border-radius)",
      // height: "var(--slider-track-height)",
      height: ".4rem",
    };

    const fillPercentage = (value - min) / (max - min) * 100;

    const backgroundValue = `\
      linear-gradient(to right, \
        var(--slider-track-filled-color) ${fillPercentage}%,\
        var(--slider-track-empty-color) ${fillPercentage}%)\
    `;

    styleObject.background = backgroundValue;

    if (width) {
      styleObject.width = width;
    }

    return styleObject;
  }, [value]);

  return (
    <input
      className={styles.slider} 
      max={max}
      min={min}
      onChange={handleChange}
      step={step}
      // style={width ? { width } : null}
      style={sliderStyle}
      type="range"
      value={value}
    />
  );
}
 
export default Slider;
