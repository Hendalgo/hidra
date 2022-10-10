import React from 'react'
import './Button.css';

/* This component gets his class throught props
    To know what styles apply,
    same gets action to execute, 
    A link, open modal,
    or other any action
*/

const Button = ({type, text}) => {
  /* the class name is trimed
    in case of type button isnt defined
    delete blank spaces in the class name
  */
  return (
    <button className={(type + ' button').trim()}>
        {text}
    </button>
  )
}

export default Button;