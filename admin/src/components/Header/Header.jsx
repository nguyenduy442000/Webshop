import React from "react";
import { BsList, BsFillCaretDownFill } from "react-icons/bs";
import { FaSearch, FaUser } from "react-icons/fa";
import "./header.scss";
import {useState,useEffect} from "react";
import {Link, useNavigate } from "react-router-dom"
import {useSelector,useDispatch} from 'react-redux';
import { logOut } from "../../redux/apiRequest";
const Header = () => {
 const [open,setOpen]=useState(false);
 const user = useSelector((state)=>state.auth.login?.currentUser)
 const accessToken = user?.accessToken;
 const id = user?._id;
 const dispatch = useDispatch();
 const navigate = useNavigate();

const handleOnclick = ()=>{
  setOpen(!open)
  
}
const handleLogout =()=>{
  logOut(dispatch, id , accessToken,navigate);
}

  return (
    <section>
      <div className="c-header">
        <div className="c-header__col1">
          <h1 className="c-header__headertitle">Quản Lý Bán Hàng</h1>
          <BsList className="c-header__icon"/>
        </div>
        <div className="c-header__col2" onClick={handleOnclick}>
        <h1 style={{color:'white'}}>Your Role : {user?.isAdmin ? 'Admin' : 'User'}</h1>
          <h1 style={{color:'white'}}>{user?.username}</h1>
          <div >
            <FaUser  className="c-header__icon"/>
            <BsFillCaretDownFill  className="c-header__icon" />
          </div>
         {open ? <div className="c-header__auth">
         <Link to="/login" style={{textDecoration:'none',color:'white'}}>  <h1>Login</h1></Link>
       
         <hr width="80px" style={{marginLeft:'10px'}}/>
         <Link  to="/Register" style={{textDecoration:'none',color:'white'}}>
         <h1>Register</h1>
         </Link>

         <hr width="80px" style={{marginLeft:'10px'}}/>
         <h1 onClick={handleLogout}>Logout</h1>
       
        </div>:null}
        </div>
        
      </div>
    </section>
  );
};

export default Header;
