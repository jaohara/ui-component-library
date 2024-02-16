import React from 'react';

import styles from "./Badge.module.scss";

const Badge = ({
  children,
  text = "Badge",
}) => {
  const badgeContent = children ? children : text;

  return (
    <span className={styles.badge}>{badgeContent}</span>
  );
};
 
export default Badge;
