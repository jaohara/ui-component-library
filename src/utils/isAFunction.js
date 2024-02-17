/**
 * Checks whether or not a provided argument exists and is
 * a function.
 * @param {any} func the potential function to check
 * @returns whether or not the argument is a function
 */
export default function isAFunction(func) {
  return func && typeof func === 'function';
};