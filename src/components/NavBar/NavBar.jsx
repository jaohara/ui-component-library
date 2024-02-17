import React from 'react';

import styles from "./NavBar.module.scss";

const NavBar = ({
  bgColor,
  children,
  fixed = false,
  topBorder = false, // whether to have a cosmetic top border
}) => {
  /*
    NavBar should be able to have stacked child components, optionally allowing
    for multiple page-width bars to be stacked on top. See the npm site for an 
    example of this.
    - How will I handle this? Is it a "NavBarContainer" class that contains these
      "NavBar" elements, or should I create a "NavBarRow" class?

    There should also be an option for a "topBorder", which could either be a 
    solid-colored stripe for branding or a gradient. Again, the npm site does this
    with a gradient.
  */

  const navBarClassNames = `
    ${styles["nav-bar"]}
    ${fixed ? styles["fixed"] : ""}
  `;

  const parsedBgColor = (() => {
    // TODO: Check to see whether or not the bgColor is a valid color string
    // TODO: Extract this "isValidColorString" function to its own module in `./src/utils`
    if (bgColor) return bgColor;
    return null;
  })();

  return (
    <div
      className={navBarClassNames}
      style={parsedBgColor ? { "background-color": parsedBgColor } : null}
    >
      {children}
    </div>
  );
}
 
export default NavBar;
