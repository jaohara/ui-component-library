import React from 'react';

import styles from "./List.module.scss";

// TODO: Implement this component

const List = ({
  label="",
  ordered = false,
  listItems = [],
}) => {
  const getListItems = () => listItems.map((item) => (
    <li>{item}</li>
  ));

  return (
    <div
      // style={styles.}
    >
      {
        ordered ? (
          <ol>
            {getListItems()}
          </ol>
        ) : (
          <ul>
            {getListItems()}    
          </ul>
        )
      }
    </div>
  );
}
 
export default List;
