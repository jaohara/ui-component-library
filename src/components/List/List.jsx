import React from 'react';

import styles from "./List.module.scss";

// TODO: Implement this component

const List = ({
  label="", // TODO: use or remove this label (do lists need labels?)
  ordered = false,
  listItems = [],
}) => {
  const getListItems = () => {
    if (Array.isArray(listItems)) {
      return listItems.map((item, index) => (
        <li key={`list-item-${index}`}>{item}</li>
      ));
    }

    // simple case for non-nested objects to list key-value pairs 
    if (typeof listItems === "object") {
      // TODO: include more robust check to not allow nested objects
      const listKeys = Object.keys(listItems);

      return listKeys.map((key, index) => (
        <li key={`list-item-${index}`}>
          <span className={styles["list-key"]}>{key}:</span>&nbsp;
          <span className={styles["list-value"]}>{`${listItems[key]}`}</span>
        </li>
      ));
    }
  };


  return (
    <div
      // className={styles.}
    >
      {
        ordered ? (
          <ol className={styles.list}>
            {getListItems()}
          </ol>
        ) : (
          <ul className={styles.list}>
            {getListItems()}    
          </ul>
        )
      }
    </div>
  );
}
 
export default List;
