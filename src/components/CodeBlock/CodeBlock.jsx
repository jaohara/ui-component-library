import React from 'react';

import styles from "./CodeBlock.module.scss";

// TODO: Implement this component


/*
  Check this link out: https://www.npmjs.com/package/react-syntax-highlighter#light-build

  I think what you want to do here is use the light build of this module and just
  import + register your own common languages (js/css/html/ts/jsx/bash/etc.),
  and then provide the option to 
*/

const CodeBlock = ({
  children, 
  language,
}) => {
  return (
    <div
      className={styles.wrapper}
    >
      <em>I'm a <strong>CodeBlock</strong> and I need to be implemented.</em>
    </div>
  );
}
 
export default CodeBlock;
