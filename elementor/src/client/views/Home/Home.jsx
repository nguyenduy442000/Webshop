import React from "react";
import { FiShield, FiRepeat, FiLifeBuoy, FiTruck } from "react-icons/fi";
import Banner from "../../components/Banner/Banner";
import Bestselles from "../../components/Bestselles/Bestselles";
import Categories from "../../components/Categories/Categories";

import NewProduct from "../../components/NewProduct/NewProduct";
import Slide from "../../components/slide/Slide";



import "./Home.scss";
const Home = () => {
  return (
    <div>
   
      <div>
        <Slide />
      </div>
      <div>
       <Banner/>
      </div>
      <div className="section">
        <div className="section__newitems">
          <NewProduct />
        </div>
      </div>
      <div className="widgets">
        <div className="widgets__divider">
          <span className="widgets__divider--separator"></span>
        </div>
      </div>

      <div className="section">
        <div className="section__category">
          <Categories />
        </div>
      </div>

      <div className="widgets">
        <div className="widgets__divider">
          <span className="widgets__divider--separator"></span>
        </div>
      </div>

      <div className="section">
      <div className="section__newitems">
        <Bestselles/>
      </div>
    </div>

    <div className="widgets">
    <div className="widgets__divider">
      <span className="widgets__divider--separator"></span>
    </div>
  </div>

  <div className="section">
  <div className="section__category">
  <div className="info">
  <div>
    <div className="info__icon">
      <FiShield />
    </div>
    <h1 className="info--title" >Security</h1>
    <p className="info--description">100% save online payments</p>
  </div>

  <div >
    <div className="info__icon">
      <FiRepeat />
    </div>
    <h1 className="info--title">30 days return period</h1>
    <p className="info--description">Easy returns & refunds</p>
  </div>

  <div>
    <div className="info__icon">
      <FiLifeBuoy />
    </div>
    <h1 className="info--title">Customer support</h1>
    <p className="info--description">We are here 24/7</p>
  </div>

  <div>
    <div className="info__icon">
      <FiTruck />
    </div>
    <h1 className="info--title">Flexible shipping</h1>
    <p className="info--description">Maximum comfort</p>
  </div>
</div>
  </div>
</div>


    
    </div>
  );
};

export default Home;
