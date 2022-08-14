import React, { useState, useRef,useEffect } from "react";

import API from '../../api/apiConfig'
import "./catalogue.scss";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { Product } from "./../../../data";
import * as Bs from "react-icons/bs";
import * as Fa from "react-icons/fa";
import * as Gr from "react-icons/gr";
import {FiSliders}from 'react-icons/fi';
import {AiOutlineClose} from 'react-icons/ai'
import Button from "../../components/Button/Button";
import {Link} from "react-router-dom"
const Catalogue = (props) => {
  const {ismobile} = props;
  const [openfilter,setOpenFilter] = useState(false);
  const handleOpenFilter =()=>{
    setOpenFilter(!openfilter);
  }
  const [product,setProduct] =useState([])
  // isChev
  const [isChevCategory, setisChevCategory] = useState(false);
  const [isChevColor, setischevColor] = useState(false);
  const [isChevSize, setisChevSize] = useState(false);
  const [isChevPrice, setisChevPrice] = useState(false);

  //values inputRange
  const [val, setVal] = useState({ min: 0, max: 1650 });

  //isPlusLg
  const [Apparel, setApparel] = useState(false);
  const [decor, setDecor] = useState(false);

  //useRef
  const openCategory = useRef(null);
  const openColor = useRef(null);
  const openSize = useRef(null);
  const openApparel = useRef(null);
  const openDecor = useRef(null);
  const openPrice = useRef(null);

  const handleChev = () => {
    setisChevCategory(!isChevCategory);
    if (!isChevCategory) {
      openCategory.current.classList.add("active");
    } else {
      openCategory.current.classList.remove("active");
      openApparel.current.classList.remove("active");
    }
  };
  const handleColor = () => {
    setischevColor(!isChevColor);
    if (!isChevColor) {
      openColor.current.classList.add("active");
    } else {
      openColor.current.classList.remove("active");
    }
  };
  const handleSize = () => {
    setisChevSize(!isChevSize);
    if (!isChevSize) {
      openSize.current.classList.add("active");
    } else {
      openSize.current.classList.remove("active");
    }
  };
  const handlePrice = () => {
    setisChevPrice(!isChevPrice);
    if (!isChevPrice) {
      openPrice.current.classList.add("active");
    } else {
      openPrice.current.classList.remove("active");
    }
  };
  const handleApparel = () => {
    setApparel(!Apparel);
    if (!Apparel) {
      openApparel.current.classList.add("active-item");
    } else {
      openApparel.current.classList.remove("active-item");
    }
  };

  const handleDecor = () => {
    setDecor(!decor);
    if (!decor) {
      openDecor.current.classList.add("active-item");
    } else {
      openDecor.current.classList.remove("active-item");
    }
  };
  useEffect(()=>{
        API.get(`api/product`)
        .then(res=>{
          const products = res.data;
          setProduct(products)
        })
        .catch(err=>console.log(err))
  },[])

   

  return (
    <div>
      <div className="c-catalogue">
        {
          ismobile ?(
            <div className="icon__filter" onClick={handleOpenFilter}><FiSliders style={{fontSize:'2rem'}}/></div>
          ):(

            <>
            <div className="c-catalogue__left">
            {/* start Category*/}
            <div className="filter">
              <div>
                <h2 className="filter__title">Category</h2>
              </div>
              <div>
                {isChevCategory ? (
                  <HiOutlineChevronUp
                    className="filter__icon"
                    onClick={handleChev}
                  />
                ) : (
                  <HiOutlineChevronDown
                    className="filter__icon"
                    onClick={handleChev}
                  />
                )}
              </div>
            </div>
            <ul ref={openCategory} className="list">
              {/* start li-1 */}
              <li>
                <p> Apparel</p>
                <span className="count">9</span>
                {Apparel ? (
                  <Fa.FaMinus className="next-list" onClick={handleApparel} />
                ) : (
                  <Bs.BsPlusLg className="next-list" onClick={handleApparel} />
                )}
              </li>
              <ul ref={openApparel} className="list-item">
                <li>
                  <p>Coats & jackets</p>
                  <span className="count">3</span>
                </li>
                <li>
                  <p>Dresses</p>
                  <span className="count">1</span>
                </li>
                <li>
                  <p>Knitwear</p>
                  <span className="count">2</span>
                </li>
                <li>
                  <p>Suits</p>
                  <span className="count">4</span>
                </li>
              </ul>
  
              {/* end li-1 */}
  
              {/* start li-2*/}
              <li>
                Home decor
                <span className="count">15</span>
                {decor ? (
                  <Fa.FaMinus className="next-list" onClick={handleDecor} />
                ) : (
                  <Bs.BsPlusLg className="next-list" onClick={handleDecor} />
                )}
              </li>
              <ul ref={openDecor} className="list-item">
                <li>
                  <p>Furniture</p>
                  <span className="count">5</span>
                </li>
                <li>
                  <p>Lighting</p>
                  <span className="count">5</span>
                </li>
                <li>
                  <p>Textile & decor</p>
                  <span className="count">7</span>
                </li>
              </ul>
              {/* end li-2 */}
  
              {/*start li-3*/}
              <li>
                Uncategorized <span className="count">0</span>
              </li>
              {/*end li-3*/}
            </ul>
            {/* end Category*/}
  
            <div className="widgets">
              <div className="widgets__divider">
                <span className="widgets__divider--separator"></span>
              </div>
            </div>
  
            {/* start color*/}
            <div className="filter">
              <div>
                <h2 className="filter__title">Color</h2>
              </div>
              <div>
                {isChevColor ? (
                  <HiOutlineChevronUp
                    className="filter__icon"
                    onClick={handleColor}
                  />
                ) : (
                  <HiOutlineChevronDown
                    className="filter__icon"
                    onClick={handleColor}
                  />
                )}
              </div>
            </div>
            <ul ref={openColor} className="list ">
              <li>
                <div>
                  <Gr.GrCheckbox />
                </div>
                <p>White</p>
                <span className="count">5</span>
              </li>
              <li>
                <div>
                  <Gr.GrCheckbox />
                </div>
                <p>Black</p>
                <span className="count">9</span>
              </li>
              <li>
                <div>
                  <Gr.GrCheckbox />
                </div>
                <p>Brown</p>
                <span className="count">3</span>
              </li>
              <li>
                <div>
                  <Gr.GrCheckbox />
                </div>
                <p>Beige</p>
                <span className="count">3</span>
              </li>
              <li>
                <div>
                  <Gr.GrCheckbox />
                </div>
                <p>Gray</p>
                <span className="count">6</span>
              </li>
              <li>
                <div>
                  <Gr.GrCheckbox />
                </div>{" "}
                <p>Neutral</p>
                <span className="count">5</span>
              </li>
              <li>
                <div>
                  <Gr.GrCheckbox />
                </div>
                <p>Red</p>
                <span className="count">3</span>
              </li>
              <li>
                <div>
                  <Gr.GrCheckbox />
                </div>
                <p>Yellow</p>
                <span className="count">1</span>
              </li>
            </ul>
            {/* end color*/}
  
            <div className="widgets">
              <div className="widgets__divider">
                <span className="widgets__divider--separator"></span>
              </div>
            </div>
  
            {/* start Size*/}
            <div className="filter">
              <div>
                <h2 className="filter__title">Size</h2>
              </div>
              <div>
                {isChevSize ? (
                  <HiOutlineChevronUp
                    className="filter__icon"
                    onClick={handleSize}
                  />
                ) : (
                  <HiOutlineChevronDown
                    className="filter__icon"
                    onClick={handleSize}
                  />
                )}
              </div>
            </div>
            <div ref={openSize} className="openSize">
              <div className="Size">
                <div>
                  <span>One size</span>
                </div>
                <div>
                  <span>XS</span>
                </div>
                <div>
                  <span>S</span>
                </div>
                <div>
                  <span>M</span>
                </div>
                <div>
                  <span>L</span>
                </div>
                <div>
                  <span>XL</span>
                </div>
              </div>
            </div>
  
            {/* end Size*/}
            <div className="widgets">
              <div className="widgets__divider">
                <span className="widgets__divider--separator"></span>
              </div>
            </div>
  
            {/* start Price*/}
            <div className="filter">
              <div>
                <h2 className="filter__title">Price</h2>
              </div>
              <div>
                {isChevPrice ? (
                  <HiOutlineChevronUp
                    className="filter__icon"
                    onClick={handlePrice}
                  />
                ) : (
                  <HiOutlineChevronDown
                    className="filter__icon"
                    onClick={handlePrice}
                  />
                )}
              </div>
            </div>
  
            <div ref={openPrice}></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <p>
                  Min:$<span id="rangeValue">{val.min}</span>
                </p>
              </div>
              <div>
                <p>
                  Max:$<span>{val.max}</span>
                </p>
              </div>
            </div>
            <div>
              <input
                type="range"
                id="vol"
                name="vol"
                min="0"
                max="1650"
                style={{ width: "100%" }}
              />
            </div>
  
           <Button name="Filter"/>
  
            {/* end Price*/}
  
            <div className="widgets">
              <div className="widgets__divider">
                <span className="widgets__divider--separator"></span>
              </div>
            </div>
  
            {/* start Recently viewed*/}
            <div className="filter">
              <div>
                <h2 className="filter__title">Recently viewed</h2>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "70px", height: "70px", marginRight: "10px" }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/ecommerce-elementor.appspot.com/o/newproduct%2Fes0066-600x800.jpg?alt=media&token=932bba6e-3a0a-4a88-b80e-75625d20a06f"
                  alt="no results"
                  width="100%"
                  height="100%"
                />
              </div>
  
              <div className="filter__viewed">
                <p>Sofa</p>
                <span>$250.00</span>
              </div>
            </div>
  
            {/* end Recently viewed*/}
  
            <div className="widgets">
              <div className="widgets__divider">
                <span className="widgets__divider--separator"></span>
              </div>
            </div>
          </div>
          {/* end c-catalogue__lef*/}
            </>
          )
        }
        {
          openfilter &&(
            <div className="openfilter__left">
            <div style={{fontSize:'3rem',textAlign:'end'}} onClick={handleOpenFilter}><AiOutlineClose /></div>
            
            <div className="c-catalogue__left">
            {/* start Category*/}
            <div className="filter">
              <div>
                <h2 className="filter__title">Category</h2>
              </div>
              <div>
                {isChevCategory ? (
                  <HiOutlineChevronUp
                    className="filter__icon"
                    onClick={handleChev}
                  />
                ) : (
                  <HiOutlineChevronDown
                    className="filter__icon"
                    onClick={handleChev}
                  />
                )}
              </div>
            </div>
            <ul ref={openCategory} className="list">
              {/* start li-1 */}
              <li>
                <p> Apparel</p>
                <span className="count">9</span>
                {Apparel ? (
                  <Fa.FaMinus className="next-list" onClick={handleApparel} />
                ) : (
                  <Bs.BsPlusLg className="next-list" onClick={handleApparel} />
                )}
              </li>
              <ul ref={openApparel} className="list-item">
                <li>
                  <p>Coats & jackets</p>
                  <span className="count">3</span>
                </li>
                <li>
                  <p>Dresses</p>
                  <span className="count">1</span>
                </li>
                <li>
                  <p>Knitwear</p>
                  <span className="count">2</span>
                </li>
                <li>
                  <p>Suits</p>
                  <span className="count">4</span>
                </li>
              </ul>
  
              {/* end li-1 */}
  
              {/* start li-2*/}
              <li>
                Home decor
                <span className="count">15</span>
                {decor ? (
                  <Fa.FaMinus className="next-list" onClick={handleDecor} />
                ) : (
                  <Bs.BsPlusLg className="next-list" onClick={handleDecor} />
                )}
              </li>
              <ul ref={openDecor} className="list-item">
                <li>
                  <p>Furniture</p>
                  <span className="count">5</span>
                </li>
                <li>
                  <p>Lighting</p>
                  <span className="count">5</span>
                </li>
                <li>
                  <p>Textile & decor</p>
                  <span className="count">7</span>
                </li>
              </ul>
              {/* end li-2 */}
  
              {/*start li-3*/}
              <li>
                Uncategorized <span className="count">0</span>
              </li>
              {/*end li-3*/}
            </ul>
            {/* end Category*/}
  
            <div className="widgets">
              <div className="widgets__divider">
                <span className="widgets__divider--separator"></span>
              </div>
            </div>
  
            {/* start color*/}
            <div className="filter">
              <div>
                <h2 className="filter__title">Color</h2>
              </div>
              <div>
                {isChevColor ? (
                  <HiOutlineChevronUp
                    className="filter__icon"
                    onClick={handleColor}
                  />
                ) : (
                  <HiOutlineChevronDown
                    className="filter__icon"
                    onClick={handleColor}
                  />
                )}
              </div>
            </div>
            <ul ref={openColor} className="list ">
              <li>
                <div>
                  <Gr.GrCheckbox />
                </div>
                <p>White</p>
                <span className="count">5</span>
              </li>
              <li>
                <div>
                  <Gr.GrCheckbox />
                </div>
                <p>Black</p>
                <span className="count">9</span>
              </li>
              <li>
                <div>
                  <Gr.GrCheckbox />
                </div>
                <p>Brown</p>
                <span className="count">3</span>
              </li>
              <li>
                <div>
                  <Gr.GrCheckbox />
                </div>
                <p>Beige</p>
                <span className="count">3</span>
              </li>
              <li>
                <div>
                  <Gr.GrCheckbox />
                </div>
                <p>Gray</p>
                <span className="count">6</span>
              </li>
              <li>
                <div>
                  <Gr.GrCheckbox />
                </div>{" "}
                <p>Neutral</p>
                <span className="count">5</span>
              </li>
              <li>
                <div>
                  <Gr.GrCheckbox />
                </div>
                <p>Red</p>
                <span className="count">3</span>
              </li>
              <li>
                <div>
                  <Gr.GrCheckbox />
                </div>
                <p>Yellow</p>
                <span className="count">1</span>
              </li>
            </ul>
            {/* end color*/}
  
            <div className="widgets">
              <div className="widgets__divider">
                <span className="widgets__divider--separator"></span>
              </div>
            </div>
  
            {/* start Size*/}
            <div className="filter">
              <div>
                <h2 className="filter__title">Size</h2>
              </div>
              <div>
                {isChevSize ? (
                  <HiOutlineChevronUp
                    className="filter__icon"
                    onClick={handleSize}
                  />
                ) : (
                  <HiOutlineChevronDown
                    className="filter__icon"
                    onClick={handleSize}
                  />
                )}
              </div>
            </div>
            <div ref={openSize} className="openSize">
              <div className="Size">
                <div>
                  <span>One size</span>
                </div>
                <div>
                  <span>XS</span>
                </div>
                <div>
                  <span>S</span>
                </div>
                <div>
                  <span>M</span>
                </div>
                <div>
                  <span>L</span>
                </div>
                <div>
                  <span>XL</span>
                </div>
              </div>
            </div>
  
            {/* end Size*/}
            <div className="widgets">
              <div className="widgets__divider">
                <span className="widgets__divider--separator"></span>
              </div>
            </div>
  
            {/* start Price*/}
            <div className="filter">
              <div>
                <h2 className="filter__title">Price</h2>
              </div>
              <div>
                {isChevPrice ? (
                  <HiOutlineChevronUp
                    className="filter__icon"
                    onClick={handlePrice}
                  />
                ) : (
                  <HiOutlineChevronDown
                    className="filter__icon"
                    onClick={handlePrice}
                  />
                )}
              </div>
            </div>
  
            <div ref={openPrice}></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <p>
                  Min:$<span id="rangeValue">{val.min}</span>
                </p>
              </div>
              <div>
                <p>
                  Max:$<span>{val.max}</span>
                </p>
              </div>
            </div>
            <div>
              <input
                type="range"
                id="vol"
                name="vol"
                min="0"
                max="1650"
                style={{ width: "100%" }}
              />
            </div>
  
           <Button name="Filter"/>
  
            {/* end Price*/}
  
            <div className="widgets">
              <div className="widgets__divider">
                <span className="widgets__divider--separator"></span>
              </div>
            </div>
  
            {/* start Recently viewed*/}
            <div className="filter">
              <div>
                <h2 className="filter__title">Recently viewed</h2>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "70px", height: "70px", marginRight: "10px" }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/ecommerce-elementor.appspot.com/o/newproduct%2Fes0066-600x800.jpg?alt=media&token=932bba6e-3a0a-4a88-b80e-75625d20a06f"
                  alt="no results"
                  width="100%"
                  height="100%"
                />
              </div>
  
              <div className="filter__viewed">
                <p>Sofa</p>
                <span>$250.00</span>
              </div>
            </div>
  
            {/* end Recently viewed*/}
  
            <div className="widgets">
              <div className="widgets__divider">
                <span className="widgets__divider--separator"></span>
              </div>
            </div>
          </div>
          {/* end c-catalogue__lef*/}
          </div>
          )
        }

       

        <div className="c-catalogue__right">
          <div className="c-catalogue-category">
            <span>Products</span>
          </div>
          <div className="c-catalogue__list">
            {product.map((item) => (
              <div className="c-catalogue__item" key={item._id} >
              <Link to={`/productDetail/${item._id}`}   style={{ textDecoration: "none", color: "black" }}>
              <div className="c-catalogue__content">
              <figure className="c-catalogue__img">
                <img src={item.firstimg} alt="no results" />
              </figure>
              <div className="c-catalogue__info">
                <h4 className="c-catalogue__title">{item.title}</h4>
                <p className="c-catalogue__price">${item.price}</p>
              </div>
            </div>
              </Link>
             
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Catalogue;
