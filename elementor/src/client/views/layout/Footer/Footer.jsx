import React from 'react';
import {MdFacebook} from 'react-icons/md';
import {FaYoutube,FaTiktok} from 'react-icons/fa';
import {IoLogoInstagram} from 'react-icons/io';
import {FiCheck} from'react-icons/fi';
import './footer.scss';
const Footer = () => {
  return (
    <div className='footer'>
     {/* col-1*/}
    <div className='footer__colfirst'>
    <h1 style={{fontSize:'2.4rem',lineheight:'3.1rem',fontWeight:'500',fontFamily:'Barlow Semi Condensed ,sans-serif'}}>001-2345-67-89</h1>
    <p style={{fontSize:'1.3rem',lineHeight:'1.8rem',fontWeight:'400',fontFamily:'Roboto ,sans-serif',color:'#6768ab'}}>Mon. - Fri. 10:00 - 20:00</p>
    <div className="icon" >
     <MdFacebook/>
     <FaYoutube/>
     <FaTiktok/>
     <IoLogoInstagram/>
    </div>
    </div>

 {/* col-2*/}
    <div className='footer__col'>
    <p>About shop</p>
    <p>About</p>
    <p>Contact</p>
    <p>Blog</p>
    <p>Sitemap</p>
    </div>

     {/* col-3*/}
    <div className='footer__col'>
    <p>Customer info</p>
    <p>Payment</p>
    <p>Delivery</p>
    <p>Order tracking</p>
    <p>Exchanges & returns</p>
    <p>Terms & conditions</p>  
    </div>

 {/* col-4*/}
    <div className='footer__col'>
    <p>Catalogue</p>
    <p>New incomes</p>
    <p>Bestsellers</p>
    <p>Sale</p>
    <p>Size guide</p>
    </div >

    
   {/* col-5*/}
    <div className='footer__col'>
    <p>Newsletter signup</p>
    <input placeholder='Enter your email...'style={{padding:'12px 50px 12px 17px',border:'none',marginBottom:'10px'}}/>
    <button style={{padding:'11px 77px',border:'none',background:'#6768ab'}}><span style={{color:'white',fontSize:'1.3rem',fontWeight:'500'}}>Sign me up</span> <FiCheck style={{color:'white'}}/></button>
    <p style={{fontWeight:'400',color:'#63626c',fontSize:'1.4rem',lineHeight:'2.1rem'}}>Be the first to know about our new arrivals and exclusive offers.</p>
    </div>
    </div>
  )
}

export default Footer