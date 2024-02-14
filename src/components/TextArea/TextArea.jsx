import React from 'react';

import styles from "./TextArea.module.scss";

// TODO: Implement this component

const TextArea = ({
  className,
  error = false, // TODO: make this conditionally add a classname/style appropriately
  label,
  placeholder = "",
  setValue = () => {},
  value,
}) => {
  const handleInput = (e) => {
    if (setValue && typeof setValue === "function") {
      setValue(value);
    }
  };

  return (
    <div
      className={`${className} ${styles["textarea-wrapper"]}`}
    >
      {
        label && (<label>{label}</label>)
      }
      <textarea
        onChange={handleInput}
        placeholder={placeholder}
        value={value}
      >
      </textarea>
    </div>
  );
}
 
export default TextArea;
