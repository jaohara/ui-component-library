import React from 'react';

import styles from "./NavBar.module.scss";

import Button from '../Button/Button';

import isAFunction from '../../utils/isAFunction';

import {
  NAVBAR_DEFAULT_NAV_ALIGNMENT,
  SIDEBAR_DEFAULT_SHADOW,
} from '../../globals';

// TODO: Test this when you implement navItems
const navItemsAreValid = (navItems) => {
  if (!navItems || Array.isArray(navItems)) return false;

  for (let i = 0; i < navItems.length; i++) {
    if (!navItems[i].label || !navItems[i].action) return false; 
  }
}

const navListAlignments = ["right", "center", "left"];

export const NavBar = ({
  bgColor,
  children,
  fixed = false,
  logoElement,
  menuElement,
  navItems,
  navListAlignment = NAVBAR_DEFAULT_NAV_ALIGNMENT, 
  noMainNavBar = false,
  shadow = SIDEBAR_DEFAULT_SHADOW,
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

  const navBarGroupClassNames = `
    ${styles["nav-bar-group"]}
    ${shadow ? styles["shadow"] : ""}
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

    const alignment = navListAlignments.includes(navListAlignment) ? 
      navListAlignment : NAVBAR_DEFAULT_NAV_ALIGNMENT;

    const navListClassNames = `
      ${styles["nav-list"]}
      ${alignment}
    `;

    // TODO: Attach the nav action to the navListItems
    // TODO: How do I handle "action" here? Just an onClick?
    const navListItems = navItems.map((navItem) => (
      <li>
        {navItem.label}
      </li>
    ));

    return (
      <nav
        className={navListClassNames}
      >
        <ul>{navListItems}</ul>
      </nav>
    );
  })();

  // const subNavBars = (() => {

  // })();

  const subNavBars = React.Children.map(children, (child) => {
    if (child.type = SubNavBar) {
      return child;
    }

    //TODO: how should I handle this warning? 
    console.warn("NavBar: NavBars can only have SubNavBars as children.");
    return null;
  });

  const parsedMenuElement = (() => {
    // TODO: expand upon this - what other checks need to be done?
    return menuElement;
  })();

  const mainNavBar = (
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
  );

  return (
    <div 
      className={navBarGroupClassNames}
    >
      {!noMainNavBar && mainNavBar}
      {subNavBars}
    </div>
  );
}


// TODO: Implement this component
export const SubNavBar = ({
  
}) => {
  //TODO: Implement SubNavBar behavior:
  //  - optionally shown/hidden based on boolean prop
  //  -
  
  const subNavBarClassNames = `
    ${styles["sub-nav-bar"]}
  `;

  return (
    <div
      className={subNavBarClassNames}
    >
      I'm a <strong>SubNavBar</strong> and I need to be implemented.
    </div>  
  )
};
 