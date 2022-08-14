import React from 'react'
import * as Bi from 'react-icons/bi';
import * as Ai from 'react-icons/ai'
import * as Fi from 'react-icons/fi'
import * as Bs from 'react-icons/bs'
import './shopinfo.scss'
const ShopInfo = () => {
  return (
    <section className="c-ShopInfo">
      <div >
      <div className="c-ShopInfo-header">
      <div >
      <h1 className="c-ShopInfo-header__title">Shop Info</h1>
      </div>
      <div className="c-ShopInfo-header__textsmall">
       <p>Home <Bi.BiChevronRight/> Shop info</p>
      </div>
      </div>

      <div className="c-ShopInfo-container">
      <div className="c-ShopInfo-container__item">
      <span className="item__icon"><Ai.AiOutlineInfoCircle /></span>
       <h2 className="content-title">About Shop</h2>
      </div>
      <div className="c-ShopInfo-container__item">
     <span className="item__icon"><Fi.FiMail /></span>
      <h2 className="content-title">Contact</h2>
      </div>
      <div className="c-ShopInfo-container__item">
     <span className="item__icon"><Fi.FiCreditCard /></span>
      <h2 className="content-title">Payment</h2>
      </div>
      <div className="c-ShopInfo-container__item">
     <span className="item__icon"><Bs.BsTruck /></span>
      <h2 className="content-title">Delivery</h2>
      </div>
      <div className="c-ShopInfo-container__item">
     <span className="item__icon"><Fi.FiRepeat /></span>
      <h2 className="content-title">Exchanges & returns</h2>
      </div>
      <div className="c-ShopInfo-container__item">
     <span className="item__icon"><Fi.FiPackage /></span>
      <h2 className="content-title">Order tracking</h2>
      </div>
      <div className="c-ShopInfo-container__item">
     <span className="item__icon"><Fi.FiBarChart /></span>
      <h2 className="content-title">Size guide</h2>
      </div>
      <div className="c-ShopInfo-container__item">
     <span className="item__icon"><Fi.FiBookOpen /></span>
      <h2 className="content-title">Terms & conditions</h2>
      </div>
      <div className="c-ShopInfo-container__item">
     <span className="item__icon"><Fi.FiPenTool /></span>
      <h2 className="content-title">Blog</h2>
      </div>
      <div className="c-ShopInfo-container__item">
     <span className="item__icon"><Fi.FiMap /></span>
      <h2 className="content-title">Sitemap</h2>
      </div>
      <div className="c-ShopInfo-container__item">
     <span className="item__icon"><Fi.FiLayers /></span>
      <h2 className="content-title">Demo design system</h2>
      </div>
      </div>
      </div>
    
    
    </section>
  )
}

export default ShopInfo