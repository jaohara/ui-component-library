import React from 'react';

import styles from './SideBar.module.scss';

import navItemsAreValid from '../../utils/navItemsAreValid';

const SideBar = ({
  children,
  left = true,
  navItems,
  right = false,
  toggle = () => {},
  isVisible,
}) => {
  const sideBarClassNames = `
    ${styles["side-bar"]}
    ${right ? styles["right"] : styles["left"]}
    ${isVisible ? styles["visible"] : styles["hidden"]}
  `;

  // TODO: Genericize some of the shared nav-list construction logic between
  //  this component and NavBar (the `navElement` function)
  const navElement = (() => {
    if (!navItemsAreValid(navItems)) return null;

    const navListClassNames = `
      ${styles["nav-list"]}
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

  const orientationString = right ? "Right" : "Left";
  
  return (
    <div
      className={sideBarClassNames}
      onClick={toggle}
    >
      {navElement}
      {children}
      <h1>{orientationString} SideBar Test</h1>
      <p>I'm a temporary implementation of the <strong>SideBar</strong>, but I'm here!</p>
    </div>
  );
}
 
export default SideBar;