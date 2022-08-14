import React from "react";
import "./about.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import image1 from "../../assets/about/about-img1.jpg";
import image2 from "../../assets/about/about-img2.jpg";
import image3 from "../../assets/about/about-img3.jpg";
import * as Fi from "react-icons/fi";
import * as Fa from "react-icons/fa";
import imgfirst from "../../assets/about/imageFirst.jpg";
import imgSecond from "../../assets/about/imgSecond.jpg";
import imgThird from "../../assets/about/imageThird.jpg";
import imgFourd from "../../assets/about/imageFourd.jpg";
import partnersOne from "../../assets/about/Our-partners/partners-one.png";
import partnersTwo from "../../assets/about/Our-partners/partnerstwo.png";
import partnersThree from "../../assets/about/Our-partners/partners-three.png";
import partnersFour from "../../assets/about/Our-partners/partners-four.png";
import partnersFive from "../../assets/about/Our-partners/partners-five.png";
const About = () => {
  return (
    <div>
    <div className="c-about__banner">
    <div className="c-about-title">
      <h1>About Seven Shop</h1>
    </div>
  </div>
      <div className="c-about">
       
        <div className="c-about__container">
          {/* start company */}
          <div className="c-about__title">
            <h2
              style={{
                fontFamily: "Barlow Semi Condensed, sans-serif",
                fontSize: "2.4rem",
                fontWeight: "500",
                marginBottom: "15px",
                marginTop: "60px",
              }}
            >
              The company
            </h2>

            <span className="c-about__divider"></span>
          </div>

          <div className="c-about__company">
            <div className="c-about__company-text">
              <h3>
                Duis volutpat, mi id cursus rhoncus, purus augue aliquam arcu,
                sit amet rhoncus tellus neque aliquet sapien.
              </h3>
              <div className="c-about__company-content">
                <p>
                  Fusce quam risus, facilisis et molestie non, feugiat in
                  tortor. Duis volutpat, mi id cursus rhoncus, purus augue
                  aliquam arcu, sit amet rhoncus tellus neque aliquet sapien.
                  Donec sit amet sodales eros.
                </p>
                <p>
                  Suspendisse potenti. In scelerisque libero id eleifend
                  consectetur. Sed lacinia tempor orci, non lacinia purus
                  faucibus non. Aliquam gravida risus nec velit lacinia dapibus.
                  Phasellus at magna id elit tristique lacinia.
                </p>
                <p>
                  Integer a justo vitae arcu fermentum consequat. Duis volutpat,
                  mi id cursus rhoncus, purus augue aliquam arcu, sit amet
                  rhoncus tellus neque aliquet sapien. Donec sit amet sodales
                  eros.
                </p>
              </div>
            </div>
          <div className="c-about__picture">
          <div className="c-about__company-img">
          <img src={image1} alt="no images" width="100%" height="auto" />
        </div>

        <div className="c-about__company-img">
          <div className="c-about__company-img1">
            <img src={image2} alt="no images" width="100%" />
          </div>
          <div className="c-about__company-img2">
            <img src={image3} alt="no images" width="80%" />
          </div>
        </div>
          </div>

         
          </div>
        </div>
        {/* end company */}
        <div className="widgets">
          <div className="widgets__divider">
            <span className="widgets__divider--separator"></span>
          </div>
        </div>
        {/* start target */}
        <section className="c-about__target">
          <div className="c-about__target-container">
            <div className="c-about__target-item">
              <div className="c-about__elementor">
                <Fi.FiGlobe className="c-about__icon" />
              </div>
              <div className="c-about__target-content">
                <h3>Ecology</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
            <div className="c-about__target-item">
              <div className="c-about__elementor">
                <Fi.FiTrendingUp className="c-about__icon" />
              </div>
              <div className="c-about__target-content">
                <h3>Innovations</h3>
                <p>
                  Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                  dapibus leo. Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>
            <div className="c-about__target-item">
              <div className="c-about__elementor">
                <Fi.FiUsers className="c-about__icon" />
              </div>
              <div className="c-about__target-content">
                <h3>People</h3>
                <p>
                  Dolor ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum
                  dolor sit amet, consectetur. Ut elit tellus luctus nec!
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* end target */}
        <div className="widgets">
          <div className="widgets__divider">
            <span className="widgets__divider--separator"></span>
          </div>
        </div>
        {/* start collections */}
        <div className="c-about__title">
          <h2
            style={{
              fontFamily: "Barlow Semi Condensed, sans-serif",
              fontSize: "2.4rem",
              fontWeight: "500",
              marginBottom: "15px",
              marginTop: "60px",
            }}
          >
            Collections
          </h2>

          <span className="c-about__divider"></span>
        </div>
        <div className="c-about__collections">
          <p className="c-about__collections-title">
            Fusce quam risus, facilisis et molestie non, feugiat in tortor. Duis
            volutpat, mi id cursus rhoncus, purus augue aliquam arcu, sit amet
            rhoncus tellus neque aliquet sapien.
          </p>
          <div className="c-about__items">
            <div className="c-about__item">
              <div
                className="c-about__image"
                style={{ backgroundImage: `url(${imgfirst})` }}
              ></div>
              <div className="c-about__content">
                <h3 className="c-about__content-title">Accessories</h3>
                <p className="c-about__content-text">
                  Nulla amet ipsum dolor sit amet consectetur.
                </p>
                <div className="c-about__content-btn">View collections</div>
              </div>
            </div>
            <div className="c-about__item item-marginTop">
              <div
                className="c-about__image"
                style={{ backgroundImage: `url(${imgSecond})` }}
              ></div>
              <div className="c-about__content">
                <h3 className="c-about__content-title">Furniture</h3>
                <p className="c-about__content-text">
                  Lorem ipsum dolor sit adipiscing elit.
                </p>
                <div className="c-about__content-btn">View collections</div>
              </div>
            </div>
            <div className="c-about__item">
              <div
                className="c-about__image"
                style={{ backgroundImage: `url(${imgThird})` }}
              ></div>
              <div className="c-about__content">
                <h3 className="c-about__content-title">Decor</h3>
                <p className="c-about__content-text">
                  Dolor sit amet consectetur adipiscing elit.
                </p>
                <div className="c-about__content-btn">View collections</div>
              </div>
            </div>
            <div className="c-about__item item-marginTop">
              <div
                className="c-about__image"
                style={{ backgroundImage: `url(${imgFourd})` }}
              ></div>
              <div className="c-about__content">
                <h3 className="c-about__content-title">Lighting</h3>
                <p className="c-about__content-text">
                  Lorem ipsum dolor sit amet consectetur dolor.
                </p>
                <div className="c-about__content-btn">View collections</div>
              </div>
            </div>
          </div>
        </div>

        {/* end collections */}
        <div className="widgets">
          <div className="widgets__divider">
            <span className="widgets__divider--separator"></span>
          </div>
        </div>
        {/* start quote */}
        <section className="c-about__quote">
          <div>
            <Fa.FaQuoteRight className="c-about__quote-icon" />
          </div>
          <h3 className="c-about__quote-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </h3>
          <p className="c-about__quote-author">
            Tiffany Swift - <span>Director Seven Shop</span>
          </p>
        </section>
        <div className="widgets">
          <div className="widgets__divider">
            <span className="widgets__divider--separator"></span>
          </div>
        </div>

        {/* start Our partners */}
        <section className="c-about__partners">
          <div className="c-about__title">
            <h2
              style={{
                fontFamily: "Barlow Semi Condensed, sans-serif",
                fontSize: "2.4rem",
                fontWeight: "500",
                marginBottom: "15px",
                marginTop: "60px",
              }}
            >
              Our partners
            </h2>

            <span className="c-about__divider"></span>
          </div>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          
          
          >
            <SwiperSlide>
              <div className="c-about__partners-content">
                <img src={partnersOne} alt="no results"></img>
                <h3>Zants</h3>
                <p>Design magazine</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="c-about__partners-content">
                <img src={partnersTwo} alt="no results"></img>
                <h3>Keane Benson</h3>
                <p>Furmiture & accessories</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="c-about__partners-content">
                <img src={partnersThree} alt="no results"></img>
                <h3>Aromatique</h3>
                <p>Home aromas</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="c-about__partners-content">
                <img src={partnersFour} alt="no results"></img>
                <h3>Rouge Waves</h3>
                <p>Bath & soap</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="c-about__partners-content">
                <img src={partnersFive} alt="no results"></img>
                <h3>Susan Bradley</h3>
                <p>Design bureau</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default About;
