import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Swiper from 'swiper';

import { Navigation, Pagination } from 'swiper/modules';
import { useEffect,useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperComponent from '../Components/Swiper/Swiper';
import Categories from '../Components/Categories/Categories';
import CustomerTerminal from '../Components/CustomerTerminal/CustomerTerminal';
import YouMayLike from '../Components/YouMayLikeSection/YouMayLike';
import Services from '../Components/Services/Services';
import Footer from '../Components/Footer/Footer';
import HeaderTop from '../Components/HeaderTop/HeaderTop';
import Category from '../Components/Category/Category';
import Menu from '../Components/Menu/Menu';
export default function Home() {


  return (
    <div>
 
   
  <HeaderTop/>
  <Navbar/>
  <Menu/>
    <SwiperComponent/>
    <Categories/>
    <CustomerTerminal/>
     <YouMayLike/>
     <Services/>
     <Footer/>
     </div>



    
  )
}
