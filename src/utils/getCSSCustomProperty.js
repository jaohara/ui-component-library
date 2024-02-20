import { LIBRARY_NAME } from "../globals";

/**
 * Gets the current runtime value of a CSS Custom property from the property name.
 * @param {string} propertyName the custom property value to read
 * @returns {string|null} the value of the property or null for an invalid property name
 */
export default function getCSSCustomProperty (propertyName) {
  if (!typeof propertyName === 'string'){
    console.error(`${LIBRARY_NAME}:getCSSCustomProperty: '${propertyName}' is not a string.`);
    return null;
  }

  const value = getComputedStyle(document.documentElement).getPropertyValue(propertyName).trim();
  return value;
};
