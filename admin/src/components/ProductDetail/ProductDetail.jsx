import React ,{useState,useEffect} from 'react'
import {useParams} from"react-router-dom";
import API from "../../api/apiConfig"
import './productdetail.scss'
const ProductDetail = () => {
    let {id} = useParams();
    const [product ,setProduct] =useState({});
 
   
    function getProduct () {
        API.get(`api/product/find/${id}`)
        .then((res)=>{
          const item = res.data;
          setProduct(item)
        })
     }
    useEffect(()=>{
         getProduct();
    },[])




  return (
    <section className="c-ProductDetail">
   
     <div className="c-ProductDetail__content">
     <h1 className="c-ProductDetail__text">Title: {product.title} </h1>
     <p  className="c-ProductDetail__text"> Description: {product.desc}</p>
     <p  className="c-ProductDetail__text"> Categories: {product.categories} </p>
     <p  className="c-ProductDetail__text"> Color: {product.color}</p>
    <p  className="c-ProductDetail__text">Price: {product.price}</p>
    <p  className="c-ProductDetail__text">createdAt: {product.createdAt}</p>
     </div>
     <div className="c-ProductDetail__picture">
     <div className='c-ProductDetail__img'>  <img src={product.firstimg} alt='no results' width='100%' height='100%'/></div>
     <div className='c-ProductDetail__img'> <img src={product.secondimg} alt='no results'  width='100%' height='100%'/></div>

   
     
     </div>
   
    
    
    </section>
  )
}

export default ProductDetail