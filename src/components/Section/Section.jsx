import React, {
  useContext,
  useEffect,
} from 'react';

import styles from "./Section.module.scss";

import { ThemeContext } from '../../contexts/ThemeContext';

const bgShadeTypes = ["dark", "normal", "light", "lighter", "darker", "transparent"];

// hex codes for opacity for the color strings
const bgShadeOpacities = {
  // 0
  "transparent": "00",
  // .1
  "lighter": "19",
  // .3
  "light": "4c",
  // .5
  "normal": "7f",
  // .65
  "dark": "a5",
  // .8
  "darker": "cc",
};

const buildHexColorString = (hexColorString, opacityString = "normal") => {
  const color = hexColorString.includes("#") ? hexColorString : `#${hexColorString}`;
  const alpha = Object.keys(bgShadeOpacities).includes(opacityString) 
    ? bgShadeOpacities[opacityString]
    : bgShadeOpacities["normal"]; 

  return `${color}${alpha}`;
};

const Section = ({
  // string to modify the shade of the bg
  bgShade = "normal",
  // hex color to tint background
  bgTint,
  children,
  className,
  hero,
  morePadding = false,
  noPadding = false,
  noPaddingBottom = false,
  noPaddingTop = false,
  transparent = false,
}) => {
  const {
    setHasHero,
  } = useContext(ThemeContext);

  useEffect(() => {
    setHasHero(hero);
  }, [hero])

  const sectionClassNames = `
    ${styles.section}
    ${hero ? `${styles.hero} app-hero` : ""}
    ${morePadding ? styles["more-padding"] : ""}
    ${noPadding ? styles["no-padding"] : ""}
    ${noPaddingBottom ? styles["no-padding-bottom"] : ""}
    ${noPaddingTop ? styles["no-padding-top"] : ""}
    ${transparent ? styles["transparent-bg"] : ""}
    ${className ? className : ""}
  `;

  const bgColorString = bgTint ? buildHexColorString(bgTint, bgShade) : null;

  const style = bgColorString ? {
    backgroundColor: bgColorString,
  } : {};

  return ( 
    <div 
      className={sectionClassNames}
      style={style}
    >
      {children}
    </div>
  );
}
 
export default Section;