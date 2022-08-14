import React from "react";
import {sliderItems} from '../../.././data'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";



// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
import './slide.scss'

const Slide = () => {
  
  return (
    <div>
    <Swiper
    spaceBetween={30}
    effect={"fade"}
    navigation={true}
    pagination={{
      clickable: true,
      
    }}
    modules={[EffectFade, Navigation, Pagination]}
    className="mySwiper"
    loop={true}
     

  >


  {sliderItems.map((item) => (
    <SwiperSlide key={item.id}>
    
    <div style={{background:`url(${item.img}) center center no-repeat`,height:'560px',position:'relative',display:'flex',width:'100%',backgroundSize:'cover'}}>
    <div className="background-overlay"></div>
    <div className="slider-container">
    <h1>{item.title}</h1>
    <p>{item.desc}</p>
    <div><button>{item.btn}</button></div>
    
 
 </div>
    
    </div>
  
  
   
     

    </SwiperSlide>
    ))}
  
   
    
  </Swiper>
    </div>
  )
}

export default Slide