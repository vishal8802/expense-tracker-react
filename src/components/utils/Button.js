import React from 'react';
import './Button.css'
function Button(props) {
    let classes = 'button ' + props.className;
    const value = props.value;
   
    return <button onClick={props.onClick} className={classes}>{value}</button>;
}

export default Button;
