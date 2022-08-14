import React,{useState,useEffect} from "react";
import "./account.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import API from "../../api/apiConfig"
const Account = () => {
  const [login,setLogin]= useState({
    username:'',
    password:''
  })
  const [user ,setUser] = useState({
    username:'',
    email:'',
    password:'',
    age:'',
    fullname:'',
    img:'',

  })

  const getAllUser =()=>{
    API.get(`api/user`)
    .then((res)=>{
      const users = res.data;
     
    })
  }
  useEffect(()=>{
    getAllUser();
  })
  //Register
  const handleOnChangeInput = (event,id)=>{
    let copyUser ={...user}
    copyUser[id] = event.target.value
    setUser({...copyUser})
  }

  //Login
  const handleOnChangeInputLogin=(event,id)=>{
    let copyLogin = {...login}
    copyLogin[id] = event.target.value;
    setLogin({...copyLogin})
  }
  
//Register
  const handleOnClick =()=>{
    API.post('auth',user)
    .then((res)=>{
      alert("Thêm thành công User")
    })
    .catch((err)=>{
      console.log(err.msg)
    })
  }

  const handleLogin =()=>{
    console.log(login)
  }

  return (
    <section className="c-account">
      <div className="c-account__container">
        <div className="c-account__heading-title">
          <h1>My account</h1>
        </div>
        <div className="c-account__authentication">
          {/* Login*/}
          <div className="c-account__form">
            <h2 className="c-account-title">Login</h2>
            <label className="c-account-label">
              Username or email address *
            </label>
            <Input type="text" onChange={(event)=>handleOnChangeInputLogin(event,'username')} />
            <label className="c-account-label">Password *</label>
            <Input type="text" onChange={(event)=>{handleOnChangeInputLogin(event,'password')}}/>
            <Button  name="Log in" onClick={handleLogin}/>
            <div className="c-account-remember">
              <Input type="checkbox" />
              <span>Remember me</span>
            </div>
            <span className="c-account-forgot">Lost your password ?</span>
          </div>


          {/* Register */}
          <div className="c-account__form">
            <h2 className="c-account-title">Register</h2>
            <label className="c-account-label">Username *</label>
            <Input type="text" onChange={(event)=>handleOnChangeInput(event,'username')} />

            <label className="c-account-label">Password *</label>
            <Input type="text" onChange={(event)=>handleOnChangeInput(event,'password')}/>

            <label className="c-account-label">Email address *</label>
            <Input type="text" onChange={(event)=>handleOnChangeInput(event,'email')}/>

            <label className="c-account-label">Full Name *</label>
            <Input type="text" onChange={(event)=>handleOnChangeInput(event,'fullname')}/>


            <label className="c-account-label">Age *</label>
            <Input type="text" onChange={(event)=>handleOnChangeInput(event,'age')}/>

          
            <label className="c-account-label">Img *</label>
            <Input type="text" onChange={(event)=>handleOnChangeInput(event,'img')}/>


            <p className="c-account-remember">
              A password will be sent to your email address
            </p>
            <Button name="Register" onClick={handleOnClick}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
