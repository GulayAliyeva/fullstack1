import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'; // For newer versions
import 'swiper/css/navigation'; // If using Navigation module
import 'swiper/css/pagination'; // If using Pagination module
import styles from './CustomerTerminal.module.css';
import img from '../../assets/founder-img.png';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
const CustomerTerminal = () => {

  useEffect(() => {
    // No need to manually initialize Swiper if using React components
  }, []);
  
  return (
    <div className={styles.testimonialArea}>
      <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`,
        }}
        className={styles.swiperContainer}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.paragraphContainer}>
            <h2 className={styles.captionH2}>Customer Testimonial</h2>
           <div className={styles.paragraph}  ><p>Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p></div> 
            <div className={styles.testimonialFounder}>
              <div className={styles.founderImg}>
                <img src={img} alt="Petey Cruiser" />
              </div>
              <div className={styles.founderText}>
                <span>Petey Cruiser</span>
                <p>Designer at Colorlib</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.paragraphContainer}>
            <h2 className={styles.captionH2}>Customer Testimonial</h2>
            <p>Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
            <div className={styles.testimonialFounder}>
              <div className={styles.founderImg}>
                <img src={img} alt="Petey Cruiser" />
              </div>
              <div className={styles.founderText}>
                <span>Petey Cruiser</span>
                <p>Designer at Colorlib</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
   
      </Swiper>
      <div className={styles.swiperPagination}></div>
      <div className={styles.swiperButtonNext}></div>
      <div className={styles.swiperButtonPrev}></div>
    </div>
  );
};

export default CustomerTerminal;
