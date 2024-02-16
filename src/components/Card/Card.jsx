import React from 'react';

import styles from "./Card.module.scss";

// TODO: Implement this component

const Card = ({
  // body = "",
  buttonOnClick,
  buttonText = "",
  children,
  header = "",
  image = "", // TODO: Revise how this is handled, maybe with my actual Image component
  labels = "",
  subHeader = "",
}) => {
  const imageContent = image ? (
    <div className={styles["image-wrapper"]}>

    </div>
  ) : (<></>);


  const headerContent = header ? (
    <div className={styles["header"]}>
      <h1>{header}</h1>
      {subHeader && (<h2>{subHeader}</h2>)}
    </div>
  ) : (<></>);

  // Do I prefer using 'children' or the 'body' prop?
  const bodyContent = children ? (
    <div className={styles["body"]}>
      {children}
    </div>
  ) : (<></>);

  return (
    <div
      className={styles.wrapper}
    >
      {imageContent}
      {headerContent}
      {bodyContent}
    </div>
  );
}
 
export default Card;
