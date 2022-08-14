import React from 'react'
import styled from 'styled-components'

const ButtonAccount = styled.button`
  padding:10px 16px;
  margin:10px 0;
  border:none;
  background-color:#6768ab;
  color:white;
  font-size:1.4rem;
  font-weight:500;
  font-family:'Barlow',sans-serif;
  lineHeight:1.4rem;


`

const Button = (props) => {
      const {name , onClick}= props;
  return (
    <div>
    
  <ButtonAccount onClick={onClick}>{name}</ButtonAccount>
    </div>
  )
}

export default Button