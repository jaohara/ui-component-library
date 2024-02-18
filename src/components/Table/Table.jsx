import React from 'react';

import styles from "./Table.module.scss";

// TODO: Make this error string more specific to what is invalid
const INVALID_PROPS_STRING = "Sorry, there was an error with the provided data.";

const Table = ({
  caption,
  data,
  headers,
  zebraStriping = false,
}) => {
  // =================
  // FEATURE WISHLIST:
  // =================
  //
  // TODO: Add sorting - use state to hold sort direction and a sort function
  //  to rearrange data based on the column/direction
  // TODO: Add fixed width - take another property in the header object to optionally
  //  set a column to a fixed size via a string
  // TODO: Add a "primary" property or something similar as a boolean in the header object
  //  to determine that <td scope='row'> should be set on that particular cell



  /*
    Both data and headers expect to be an Array of Objects. 

    Header objects must contain a "key" and "label", which refer
    to the key in the data object and the display labe, respectively:

    [
      {
        key: name, label: "Name", isRowHeader: true,
      },
      {
        key: age, label: "Age (in Years)",
      }, //...
    ]

    The data array contains the data in objects that map the header keys to the object
    properties:
    
    [
      { name: "John", age: 32 },
      { name: "Alice", age: 28},
      //...
    ]
  */

  const tableClassNames = `
    ${zebraStriping ? styles["zebra-striping"] : ""}
  `;

  // TODO: Make this check more robust:
  //  - check every item in headers has "key" and "label"
  //    - alternatively, with no label, default to "key" as label
  //  - make sure every data element contains the 
  const hasValidHeadersAndData = 
    headers && data && Array.isArray(headers) && Array.isArray(data); 


  const tableHeaders = hasValidHeadersAndData ? headers.map((headerData) => {
    // TODO: Parse more options here (column fixed with, sorting, etc.)

    return (
      <th
        key={headerData["key"]}
        scope='col'
      >
        {headerData["label"]}
      </th>
    )
  }) : null;

  const dataRows = hasValidHeadersAndData ? data.map((row, rowIndex) => {
    return (
      <tr
        key={`row-${rowIndex}`}
      >
        {
          headers.map((header) => (
            <td
              key={`${header.key}-${rowIndex}`}
            >
              {row[header.key]}
            </td>
          ))
        }
      </tr>
    );
  }) : null;

  return (
    <div
      className={styles.wrapper}
    >
      {
        hasValidHeadersAndData ? (
          <table
            className={tableClassNames}
          >
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
        ) : (
          <p className={styles.invalid}>
            {INVALID_PROPS_STRING}
          </p>
        )
      }
    </div>
  );
}
 
export default Table;
