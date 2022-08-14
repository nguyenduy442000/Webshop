import React, { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import Button from "../../components/Button/Button";
import "./productDetail.scss";
import { useParams } from "react-router-dom";
import API from "../../api/apiConfig";
import { ProductContext } from "../../../Context/ProductContext";
const Cart = () => {
  let { id } = useParams();
  const [detailProduct, setDetailProduct] = useState({});
  const [isAdded,setAdded]=useState(false)
  const {addMyProduct}= useContext(ProductContext)
  const {setTotal} = useContext(ProductContext)
  useEffect(() => {
    API.get(`api/product/find/${id}`)
      .then((res) => {
        const details = res.data;
        setDetailProduct(details);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const handleAdded =()=>{
      setAdded(true);
      const newItem ={
        title:detailProduct.title,
        img:detailProduct.firstimg,
        price:detailProduct.price
      };
      addMyProduct((item)=>[...item,newItem])
      setTotal((total)=>total +=  Number(detailProduct.price))
    }
  return (
    <section className="c-productDetail">
      <div className="c-productDetail__gallrey">
        <div className="gallrey__img">
          <div className="col-1">
            <img src={detailProduct.firstimg} alt="" className="col-1__img" />
            <img src={detailProduct.secondimg} alt="" className="col-1__img" />
          </div>
          <div className="col-2">
            <img src={detailProduct.firstimg} alt="" className="col-2__img" />
          </div>
        </div>
        <div className="gallrey__description">
          <h1 className="c-productDetail-headingTitle">
            {detailProduct.title}
          </h1>
          <p className="c-productDetail-price">${detailProduct.price}</p>
          <ul className="c-productDetail__listdesc">
            <li>{detailProduct.desc}</li>
          </ul>
          <div className="c-productDetail__color">
            <div className="c-productDetail__btncolor btn-title">
              <p>Color :</p>
            </div>
            <div className="c-productDetail__btncolor">
              <p>White</p>
            </div>
            <div className="c-productDetail__btncolor">
              <p>Black</p>
            </div>
            <div className="c-productDetail__btncolor">
              <p>Black</p>
            </div>
          </div>
          <div className="c-productDetail__button">
            <div>
              <input type="button" value="-" className="input-btn" />
              <input type="number" className="input-number" />
              <input type="button" value="+" className="input-btn" />
            </div>
         
            {
              isAdded ?(
                <div onClick={handleAdded}><Button name="Added"/></div>
              ):(
                <div onClick={handleAdded}><Button name="Add to cart"/></div>
              )
            }


         
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
