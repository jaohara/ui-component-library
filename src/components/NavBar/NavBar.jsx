import React, {
  useEffect,
  useContext,
} from 'react';

import styles from "./NavBar.module.scss";

import Button from '../Button/Button';

import isAFunction from '../../utils/isAFunction';
import navItemsAreValid from '../../utils/navItemsAreValid';

import { ThemeContext } from '../../contexts/ThemeContext';

import {
  NAVBAR_DEFAULT_NAV_ALIGNMENT,
  NAVBAR_DEFAULT_SHADOW,
} from '../../globals';

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
  shadow = NAVBAR_DEFAULT_SHADOW,
  transparent = false,
  toggleLeftSidebar,
  toggleRightSidebar,
  topBorder = false, // whether to have a cosmetic top border
}) => {
  const { setNavBarIsFixed } = useContext(ThemeContext);

  useEffect(() => {
    setNavBarIsFixed(fixed);
  }, [fixed]);

  /*
    NavBar should be able to have stacked child components, optionally allowing
    for multiple page-width bars to be stacked on top. See the npm site for an 
    example of this.
    - How will I handle this? Is it a "NavBarContainer" class that contains these
      "NavBar" elements, or should I create a "NavBarRow" class?

    There should be an option for a "topBorder", which could either be a 
    solid-colored stripe for branding or a gradient. Again, the npm site does this
    with a gradient.
  */

  const navBarGroupClassNames = `
    ${styles["nav-bar-group"]}
    ${fixed ? styles["fixed"] : ""}
    ${shadow ? styles["shadow"] : ""}
    ${topBorder ? styles["top-border"] : ""}
   `;
    
    const navBarClassNames = `
    ${styles["nav-bar"]}
    ${transparent ? `${styles["transparent"]} transparent-nav-bar` : ""}
  `;

  const parsedBgColor = (() => {
    // TODO: Check to see whether or not the bgColor is a valid color string
    // TODO: Extract this "isValidColorString" function to its own module in `./src/utils`
    if (bgColor) return bgColor;
    return null;
  })();

  // TODO: Make a function to build these buttons that reduces code reuse
  const leftSidebarButton = isAFunction(toggleLeftSidebar) ? (
    <div className={styles["side-bar-button-wrapper"]}>
      <Button 
        noMargin
        onClick={toggleLeftSidebar}
        sideBarToggle
      >
        Left
      </Button>
    </div>
  ) : (<></>);
  
  const rightSidebarButton = isAFunction(toggleRightSidebar) ? (
    <div className={styles["side-bar-button-wrapper"]}>
      <Button 
        noMargin
        onClick={toggleRightSidebar}
        sideBarToggle
      >
        Right
      </Button>
    </div>
  ) : (<></>);

  const parsedLogoElement = (() => {
    // TODO: expand upon this - what other checks need to be done?
    return (
      <div
        className={styles["logo-wrapper"]}
      >
        {logoElement}
      </div>
    );
  })();

  const navElement = (() => {
    if (!navItemsAreValid(navItems)) return null;

    const alignment = navListAlignments.includes(navListAlignment) ? 
      navListAlignment : NAVBAR_DEFAULT_NAV_ALIGNMENT;

    const navListClassNames = `
      ${styles["nav-list"]}
      ${styles[alignment]}
    `;

    // TODO: Attach the nav action to the navListItems
    // TODO: How do I handle "action" here? Just an onClick?
    const navListItems = navItems.map((navItem) => (
      <li
        className={navItem.selected ? styles["selected"] : ""}
        onClick={navItem.action}
      >
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
    return (
      <div
        className={styles["menu-wrapper"]}
      >
        {menuElement}
      </div>
    )
  })();

  const mainNavBar = (
    <div
      className={navBarClassNames}
      style={parsedBgColor ? { "background-color": parsedBgColor } : null}
    >
      {leftSidebarButton}
      {parsedLogoElement}
      {/* <div className={styles["nav-list-wrapper"]}>{navElement}</div> */}
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
  );
};
 