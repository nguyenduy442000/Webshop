import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Category } from "../../.././data";
import Slider from "react-slick";
import "./Categories.scss"
const Categories = () => {
  const settings = {
    className: "center",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{

      breakpoint: 739,
      settings: {
        slidesToShow: 2,
        infinite: true
      }

    }]
  };
  return (
    <div className="categories--row">
      <div className="categories__column1">
        <span >Categories</span>
      </div>
      <div className="categories__column2">
      <Slider {...settings}>
      {Category.map((categories) => (
        <div key={categories.id} className="items" >
          <div className="items__img">
            <img src={categories.img} alt="textitle & decor" width="100%" height="100%"/>
          </div>
          <div className="items__content">
            <p className="items__content--title">{categories.title}</p>
            <p className="items__content--quantity">{categories.quantity} Products</p>
          </div>
        </div>
      ))}
      </Slider>
      </div>
      
    </div>
  );
};

export default Categories;
