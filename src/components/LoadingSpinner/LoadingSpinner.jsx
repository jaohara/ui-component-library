import React from 'react';

import "./LoadingSpinner.scss";

import { TbLoader } from "react-icons/tb";

// TODO: Figure out a way to handle this without an external JS constants?
//  alternatively, use this file as well for certain cases like this, 
//  where the size prop is used on the icon JSX
// import {
//   LARGE_ICON_SIZE
// } from "../../constants";

const LoadingSpinner = () => {
  return ( 
    <div className="loading-spinner">
      <div className="loading-spinner-wrapper">
        <TbLoader 
          // size={LARGE_ICON_SIZE}
        />
      </div>
    </div>
  );
}
 
export default LoadingSpinner;