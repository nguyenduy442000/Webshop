import React from 'react'
import './navbar.scss'
import { Link } from "react-router-dom";
const Navbar = () => {
  
  return (
    <section >
     <div className="c-navigation">
     
     <ul className='c-navigation__list'>
     <Link to="api/product" style={{ textDecoration: 'none' }}><li>Quản lý sản phẩm</li></Link>
     <Link to="api/user" style={{ textDecoration: 'none' }}><li>Quản lý tài khoản</li></Link>
     <li>Quản lý bán hàng</li>
     <li>Lấy lại mật khẩu</li>

     </ul>
     
     </div>
    
    </section>
  )
}

export default Navbar