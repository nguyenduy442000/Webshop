import React,{useState} from 'react'
import Input from '../../components/Input/Input'
import './auth.scss'
import Button from '../../components/Button/Button'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../../redux/apiRequest'
const Register = () => {
  const [register,setRegister]= useState({
    username:'',
    email:'',
    password:'',
    age:'',
    fullname:'',
    img:''
  })
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleInput =(event, id)=>{
    let copyRegister = {...register}
    copyRegister[id] =event.target.value;
    setRegister({...copyRegister})
  }
  
  const handleRegister =(e)=>{
    e.preventDefault();
    registerUser(register,dispatch,navigate)
  }

  return (
    <div className='c-login'>
    <p className="c-login__title">Đăng Ký</p>
    <Input type="text" name="Username" onChange={(event)=>{handleInput(event,'username')}}/>
    <Input type="text" name="Password" onChange={(event)=>{handleInput(event,'password')}}/>
    <Input type="text" name="Email" onChange={(event)=>{handleInput(event,'email')}}/>
    <Input type="text" name="Fullname" onChange={(event)=>{handleInput(event,'fullname')}}/>
    <Input type="text" name="Age" onChange={(event)=>{handleInput(event,'age')}}/>
    <Input type="text" name="Avatar" onChange={(event)=>{handleInput(event,'img')}}/>
    <div className='c-login__buttons'>
    <Button name="Đăng Ký" className="btn btn--red" onClick={handleRegister}/>
    <Link to="/"> 
    <Button name="Quay lại" className="btn btn--green"/>
    </Link>
    </div>
    
    </div>
  )
}

export default Register