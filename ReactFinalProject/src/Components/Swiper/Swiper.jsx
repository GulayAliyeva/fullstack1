import React, { useEffect, useState } from 'react';
import Swiper from 'swiper/bundle'; 
import 'swiper/css/bundle'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import './Swiper.css'
import menPicture from '../../assets/h1_hero1.jpg'
import womanPicture from '../../assets/h1_hero2.jpg'
  const SwiperComponent = () => {

 


 
      new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
  


  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        
          <div className="swiper-slide" >
           
       
           <div className='imageContainer'> 
            <img src={menPicture}  />
              <div className='menText'    >
            <span className='fashion'>Fashion Sale</span>  
             <h1 className='captionH1'>Minimal Menz Style</h1>
        <div className='paragraphContainer'> <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p></div> 
        <button>Shop Now</button>  
              </div>
           
               </div>
     
            
          </div>
          
          <div className="swiper-slide" >
            
          <div className='imageContainer'> 
            <img src={womanPicture}  />
              <div className='womanText'    >
            <span className='fashion'>Fashion Sale</span>  
             <h1 className='captionH1'>Minimal Menz Style</h1>
        <div className='paragraphContainer'> <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p></div> 
        <button>Shop Now</button>  
              </div>
           
               </div>
     
           
          </div>
         
        
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
    
  );
};

export default SwiperComponent;
