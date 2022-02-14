import React, {useContext} from 'react';
import {ThemeContext,FontSizeContext} from './../App';


const Test = () => {

  const {theme} = useContext(ThemeContext);
  const fontSize = useContext(FontSizeContext)

  return (
    <div
      className="test"
      style={{
        background: theme.background,
        color: theme.textColor,
        borderColor: theme.borderColor,
        fontSize: fontSize.value,
      }}>
      test
    </div>
  )
};

export default Test;
