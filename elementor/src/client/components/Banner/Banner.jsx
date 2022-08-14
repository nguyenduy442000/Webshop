import React from "react";
import "./banner.scss";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__item">
        <div className="background-img1">
        </div>
        <div className="banner__content">
            <div>
              <h1>New sofas collection</h1>
              <p>New forms & materials</p>
              <button><span>Shop now</span></button>
            </div>
          </div>
      </div>

      <div className="banner__item">
        <div className="background-img2"></div>
         <div className="banner__content">
      <div>
        <h1>Home decor collection</h1>
        <p>Exclusive trendy items</p>
        <button><span>Shop now</span></button>
      </div>
    </div>
      </div>
     

      <div className="banner__item">
        <div className="background-img3"></div>
        <div className="banner__content">
        <div style={{color:'black'}}>
          <h1>Sign up now & get 10% off</h1>
          <p>be the first to know about new arrivals and exclusive offers</p>
          <button style={{border:'1px solid black'}}><span style={{color:'black'}}>Shop now</span></button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Banner;
