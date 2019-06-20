import React from 'react';
import './InputButtons.css';

//Checks if button is a operator or not.
const isOperator = val => {
    //If it is a number, decimal, or = return true.
    return !isNaN(val) || val === '.' || val === '=';
}

export const InputButtons = props => (
    <div className= {`button-wrapper ${
        isOperator(props.children) ? null : 'operator'
    }`}
    //Defines the handleClick method called by each button.
    onClick= { () => props.handleClick(props.children)}
    >
        {props.children}
    </div>
)