import React from 'react';

import "./Content.scss";

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ContentGroup from '../ContentGroup/ContentGroup';

const Content = ({
  card = false,
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
  // whether or not to use internal padding
  noPadding = false,
  onClick,
  onMouseDown,
  onMouseEnter,
  // whether the bg is opaque (replace with strings for degrees of opacity?)
  opaque = true,
  style,
}) => {
  const ContentClassNames = `
    content
    ${card ? "menu-card" : ""}
    ${centered ? "centered" : ""}
    ${fullWidth ? "full-width" : "fixed-width"}
    ${hoverHighlight ? "hover-highlight" : ""}
    ${opaque ? "opaque-bg" : "transparent-bg" }
    ${firstChildSize !== null ? "fixed-first-child" : ""}
    ${noPadding ? "no-padding" : ""}
  `;




  
  // TODO: code out "hover-highlight" class in the stylesheet

  
  

  
  
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