import React, { 
  useEffect,
  useState,
} from 'react';

import "./LoadingSpinner.scss";

import { TbLoader } from "react-icons/tb";

import getCSSCustomProperty from '../../utils/getCSSCustomProperty';

// TODO: Figure out a way to handle this without an external JS constants?
//  alternatively, use this file as well for certain cases like this, 
//  where the size prop is used on the icon JSX
// import {
//   LARGE_ICON_SIZE
// } from "../../constants";

const ICON_SIZE_CUSTOM_PROPERTY = "--large-icon-size";
const FALLBACK_ICON_SIZE = "16px";

const LoadingSpinner = () => {
  const [ iconSize, setIconSize ] = useState();

  // TODO: Move the code that pulls and stores the custom property for icon 
  //  size into ThemeContext
  useEffect(() => {
    const currentIconSize = getCSSCustomProperty(ICON_SIZE_CUSTOM_PROPERTY);
    console.log(`LoadingSpinner: pulled '${currentIconSize}' from custom properties.`);
    setIconSize(currentIconSize);
  }, []);

  return ( 
    <div className="loading-spinner">
      <div className="loading-spinner-wrapper">
        <TbLoader 
          size={iconSize ? iconSize : FALLBACK_ICON_SIZE}
        />
      </div>
    </div>
  );
}
 
export default LoadingSpinner;