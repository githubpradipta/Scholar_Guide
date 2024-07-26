import React from 'react'
import './Button.css'
export default function Button(props) {
  return (
    <button className={`btn ${props.varient=='filled'?'filled':'outlined'}`}
    >{props.children}</button>
  )
}
