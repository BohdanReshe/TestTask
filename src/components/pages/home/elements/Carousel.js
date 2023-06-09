
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from "react";
import { Pagination } from 'swiper';
import { Link } from 'react-router-dom'
import axios from 'axios';

import 'swiper/swiper-bundle.css'

// import 'swiper/swiper.min.css';

export const Carousel = () => {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details"
    }).then(res => {
      // console.log('RESPONSE: ', res);
      setSlides(res.data.Details);
    }).catch(err => {
      // console.log('ERROR: ', err)
    })
  }, [])
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      lazyPreloadPrevNext={0}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.Subtitle} loading="lazy">
          <div className='leftFadeInCarouselImg'></div>
          <img className="carouselImg" src={slide.ImageUrl} alt={slide.Subtitle} />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          <ul className="carouselTxt">
            <li>
              <h1>{slide.Title}</h1>
            </li>
            <li>
              <h2>{slide.Subtitle}</h2>
            </li>
            <li>
              <Link to='/contact-us'><button className="contactUsBtn">Contact us</button></Link>
            </li>
          </ul>
        </SwiperSlide>
      ))}
    </Swiper>
  )
};