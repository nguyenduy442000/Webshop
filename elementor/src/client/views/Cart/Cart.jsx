import React, { useContext,useEffect,useState } from 'react'
import'./cart.scss'

import { ProductContext } from '../../../Context/ProductContext'
import Button from '../../components/Button/Button'

const Cart = () => {
  const {myProduct,total}= useContext(ProductContext);
 
 
  return (
    <section className="c-Cart">
    <div className='c-Cart__Container'>
    {
     
      myProduct.slice(1).map((item,index)=>(
        <>
        <div style={{display:'flex',gap:'20px'}} key={index}>
        <div className="c-Cart__img"><img src={item.img} alt="" width="100%" height="100%" style={{backgroundSize:"cover"}}/></div>
        
        <div className="c-Cart__content">
         <h1 className="c-Cart__title">{item.title}</h1>
         <p className="c-Cart__price">${item.price}</p>
         <div  ><Button name="Xóa"/> </div>
        </div>
       
        </div>
        
        </>
     
      ))
    
    }
    </div>
   
    <div className="c-Cart__Buy">
    <h1>ToTal Cart</h1>
    <div className="C-Cart__Totals"> 
    <p className="c-Cart__price">Price:</p>
    <p className="c-Cart__price">${total}</p>
    </div>
    <Button name="Buy"/>

   
    
   </div>
   
    </section>
  )
}

export default Cart