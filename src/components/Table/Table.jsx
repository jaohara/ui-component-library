import React from 'react';

import styles from "./Table.module.scss";

// TODO: Implement this component

const Table = ({
  caption,
  data,
  headers,
}) => {
  /*
    Both data and headers expect to be an Array of Objects. 

    Header objects must contain a "key" and "label", which refer
    to the key in the data object and the display labe, respectively:

      {
        key: name, label: "Name", rowLabel: true,
                                  // not yet implemented
      },
      {
        key: age, label: "Age (in Years)",
      }, //...

    The data array contains the data in objects there the 
  */

  const cellKeys = [];

  const tableHeaders = headers.map((headerData) => {
    // TODO: Parse more options here (column fixed with, sorting, etc.)
    cellKeys.push(headerData["key"]);

    return (
      <th
        key={headerData["key"]}
        scope='col'
      >
        {headerData["label"]}
      </th>
    )
  });

  const dataRows = data.map((row, rowIndex) => {
    const cells = row.map((cell, keyColumn) => {
      const cellKey = cellKeys[keyColumn]; 

      return (
        <td
          key={`${cellKey}-col-${keyColumn}`}
          // code for scope='row' if cell is marked as rowLabel in headers
        >
          {cell[cellKey]}
        </td>
      );
  })

    return (
      <tr
        key={`row-${rowIndex}`}
      >
        {cells}
      </tr>
    )
  })

  return (
    <div
      className={styles.wrapper}
    >
      <table>
        { 
          caption && (<caption>{caption}</caption>)
        }
        <thead>
          <tr>
            {tableHeaders}
          </tr>
        </thead>

        <tbody>
          {dataRows}
        </tbody>
      </table>
    </div>
  );
}
 
export default Table;
