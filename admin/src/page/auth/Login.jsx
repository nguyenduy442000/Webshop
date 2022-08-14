import React,{useState} from 'react'
import Input from '../../components/Input/Input'
import './auth.scss'
import Button from '../../components/Button/Button'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../redux/apiRequest'
const Login = () => {
  const [login,setLogin]= useState({
    username:'',
    password:''

  })
  const dispatch = useDispatch();
  const navigate = useNavigate();
const handleInput =(event, id)=>{
    let copyLogin = {...login}
    copyLogin[id] = event.target.value;
    setLogin({...copyLogin})
}

const handleLogin = (e)=>{
  e.preventDefault();
  loginUser(login,dispatch,navigate);
}
  return (
    <div className='c-login'>
    <p className="c-login__title">Đăng Nhập</p>
    <Input type="text" name="Username" onChange={(event)=>handleInput(event,'username')}/>
    <Input type="text" name="Password" onChange={(event)=>handleInput(event,'password')}/>
    <div className='c-login__buttons'>
    <Button name="Đăng Nhập" className="btn btn--red" onClick={handleLogin}/>
    <Link to="/">  <Button name="Quay lại" className="btn btn--green"/></Link>
  
    </div>
  
    </div>
  )
}

export default Login