import React from 'react';
import './input.scss';
const Input = (props) => {
       const {type,name ,onChange, value, placeholder} = props;
  return (
   
    <div className="form__group field">
     <input className="form__field" type={type} name={name} onChange={onChange} value={value} />
     <label htmlFor={name} className="form__label">{name}</label>
    </div>
  )
}

export default Input