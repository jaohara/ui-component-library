import React from 'react';

// TODO: Move to TextInput.module.scss
import "./TextInput.scss";

const TextInput = ({
  email = false,
  error = false,
  label,
  onChange,
  password = false,
  placeholder ="",
  setValue = () => {},
  value = "",
}) => {
  const inputClassNames = `
    common-input
    text-input
    ${error ? "error" : ""}
  `;

  const handleInput = (e) => {
    setValue(e.target.value);

    if (onChange && typeof onChange === "function") {
      onChange(e);
    }
  };

  const inputType = (() => {
    if (password) return "password";
    if (email) return "email";
    return "text";
  })();

  return ( 
    <div className="text-input-wrapper input-wrapper">
      {
        label && (<label>{label}</label>)
      }
      <input 
        className={inputClassNames}
        // onChange={e => setValue(e.target.value)}
        onChange={e => handleInput(e)}
        placeholder={password ? "" : placeholder}
        type={inputType}
        value={value}
      />
    </div>
  );
}
 
export default TextInput;