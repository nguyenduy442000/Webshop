import React from 'react'
import './button.scss'
const CButton = (props) => {
  return (
    <div>
    <button className={props.className} onClick={props.onClick}>{props.name}</button>
    </div>
  )
}


export default CButton