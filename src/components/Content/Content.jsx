import React from 'react';

// import "./Content.scss";

import styles from "./Content.module.scss";

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ContentGroup from '../ContentGroup/ContentGroup';

const Content = ({
  // center the content within the component
  centered = false,
  children,
  // the number of columns to use to display child content
  columns = 1,
  // optional fixed-size for the first child in a ContentGroup
  firstChildSize = null,
  // whether the Content width is fixed and centered (default) or full and dynamic
  fullWidth = false,
  // whether the Content indicates its hover state
  hoverHighlight = false,
  // whether or not the data that the content depends on is loaded 
  loading = false,
  noFlex = false,
  noMargin = false,
  // whether or not to use internal padding
  noPadding = false,
  onClick,
  onMouseDown,
  onMouseEnter,
  // whether the bg is opaque (replace with strings for degrees of opacity?)
  opaque = true,
  style,
  rightAligned = false,
  verticallyCentered = false,
}) => {
  const ContentClassNames = `
    ${styles.content}
    ${centered ? styles["centered"] : ""}
    ${firstChildSize !== null ? styles["fixed-first-child"] : ""}
    ${fullWidth ? styles["full-width"] : styles["fixed-width"]}
    ${hoverHighlight ? styles["hover-highlight"] : ""}
    ${loading ? styles["loading"] : ""}
    ${noFlex ? styles["no-flex"] : ""}
    ${noPadding ? styles["no-padding"] : ""}
    ${opaque ? styles["opaque-bg"] : styles["transparent-bg"] }
    ${rightAligned ? styles["right-aligned"] : ""}
    ${verticallyCentered ? styles["vertically-centered"] : ""}
  `;
  
  const content = (() => {
    if (loading) {
      return (<LoadingSpinner />);
    }

    if (columns === 1) {
      return children;
    }

    return (
      <ContentGroup
        columns={columns}
        firstChildSize={firstChildSize}
        style={style}
      >
        {children}
      </ContentGroup>
    );
  })();

  return (
    <div 
      className={ContentClassNames}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      style={style}
    >
      {content}
    </div>
  )
};
 
export default Content;