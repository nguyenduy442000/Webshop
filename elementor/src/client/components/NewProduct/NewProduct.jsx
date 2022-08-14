import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./newproduct.scss";
import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import { Product } from "../../../data";
const customeSlider = React.createRef();

const NewProduct = () => {
 
  const settings = {
    className: "center",
    // CenterPadding:"20px",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [{

      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        infinite: true
      }

    }, {

      breakpoint: 739,
      settings: {
        slidesToShow: 2,
        infinite: true
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
   
  };
  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };


  return (
    <div className="section__newproduct">
      <div className="title">
        <h3
          style={{
            fontFamily: "Barlow Semi Condensed, sans-serif",
            fontSize: "2.4rem",
            fontWeight: "500",
            marginBottom: "20px",
          }}
        >
          New items
        </h3>

        <span className="title__divider"></span>
      </div>
      <div className="newproduct__btn">
        <span onClick={() => gotoPrev()} className="newproduct__btn--next">
          <GrFormPrevious />
        </span>
        <span onClick={() => gotoNext()} className="newproduct__btn--prev">
          <GrFormNext />
        </span>
      </div>

      <Slider {...settings} ref={customeSlider}>
        {Product.map((products) => (
          <div className="items" >
            {products.sale === "sale!" ? (
              <span className="items--sale">{products.sale}</span>
            ) : null}
            <div className="items__img" >
              <img src={products.firstimg} alt="Glass vase" width="99%"
              onMouseOver={e => (e.currentTarget.src = products.lastimg)}
              onMouseOut={e => (e.currentTarget.src = products.firstimg)}
              />
            </div>
            <div className="items__contents">
              <h1 className="items__contents--title">{products.title}</h1>
              <span className="items__contents--price">${products.price}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewProduct;
