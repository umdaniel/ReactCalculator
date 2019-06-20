import React from 'react';
import './ClearButton.css';

export const ClearButton = (props) => (
    //OnClick class the handleClear function.
    <div className= 'clear-button' onClick= {props.handleClear}>
        {props.children}
    </div>
);