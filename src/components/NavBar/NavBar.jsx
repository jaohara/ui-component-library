import React from 'react';

import styles from "./NavBar.module.scss";

import isAFunction from '../../utils/isAFunction';
import Button from '../Button/Button';

// TODO: Test this when you implement navItems
const navItemsAreValid = (navItems) => {
  if (!navItems || Array.isArray(navItems)) return false;

  for (let i = 0; i < navItems.length; i++) {
    if (!navItems[i].label || !navItems[i].action) return false; 
  }
}

const NavBar = ({
  bgColor,
  children,
  fixed = false,
  logoElement,
  menuElement,
  navItems,
  toggleLeftSidebar,
  toggleRightSidebar,
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
    ${topBorder ? styles["top-border"] : ""}
  `;

  const parsedBgColor = (() => {
    // TODO: Check to see whether or not the bgColor is a valid color string
    // TODO: Extract this "isValidColorString" function to its own module in `./src/utils`
    if (bgColor) return bgColor;
    return null;
  })();

  const leftSidebarButton = isAFunction(toggleLeftSidebar) ? (
    <div className={styles["side-bar-button-wrapper"]}>
      <Button 
        onClick={toggleLeftSidebar}
        sidebarToggle
      >
        Left
      </Button>
    </div>
  ) : (<></>);

  const rightSidebarButton = isAFunction(toggleRightSidebar) ? (
    <div className={styles["side-bar-button-wrapper"]}>
      <Button 
        onClick={toggleRightSidebar}
        sidebarToggle
      >
        Right
      </Button>
    </div>
  ) : (<></>);

  const parsedLogoElement = (() => {
    // TODO: expand upon this - what other checks need to be done?
    return logoElement;
  })();

  const navElement = (() => {
    if (!navItemsAreValid(navItems)) return null;

    // TODO: Attach the nav action to the navListItems
    // TODO: How do I handle "action" here? Just an onClick?
    const navListItems = navItems.map((navItem) => (
      <li>
        {navItem.label}
      </li>
    ));

    return (
      <nav>
        <ul>{navListItems}</ul>
      </nav>
    );
  })();

  const subNavBars = (() => {

  })();

  const parsedMenuElement = (() => {
    // TODO: expand upon this - what other checks need to be done?
    return menuElement;
  })();

  return (
    <div className={styles["nav-bar-group"]}>
      <div
        className={navBarClassNames}
        style={parsedBgColor ? { "background-color": parsedBgColor } : null}
      >
        {leftSidebarButton}
        {parsedLogoElement}
        {navElement}
        {parsedMenuElement}
        {rightSidebarButton}
      </div>
      {subNavBars}
    </div>
  );
}

const SubNavBar = ({
  
}) => {
  //TODO: Implement SubNavBar behavior:
  //  - optionally shown/hidden based on boolean prop
  //  - 

};
 
export default { NavBar, SubNavBar };
