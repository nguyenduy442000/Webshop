import React from 'react'
import styled from 'styled-components'

const InputAccount = styled.input`
 padding: 10px 12px;
 margin: 0 0 10px;
 border: 1px solid rgba(255, 255, 255, .5);
 width:100%;
 margin-top:5px;
 background-color:#ffffff;
`

const Input = (props) => {
  const {type ,value,onChange} = props;
  return (
    <div>
   <InputAccount type={type} value={value} onChange={onChange}/>
 
    </div>
  )
}

export default Input