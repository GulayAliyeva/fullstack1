import React from 'react';
import "./Basket.css"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import HeaderTop from '../../Components/HeaderTop/HeaderTop';
import Navbar from '../../Components/Navbar/Navbar';
import Menu from '../../Components/Menu/Menu';
import BasketCart from '../../Components/BasketCart/BasketCart';
function Basket() {
   return (
    <div>
      <HeaderTop/>
       <Navbar/>
       <Menu/>
    <div  className='pinkSection' >
    <div class=" d-flex align-items-center justify-content-center">
<div class="hero-caption hero-caption2">
<h2>Cart</h2>
<nav aria-label="breadcrumb">
<ol class="breadcrumb justify-content-center">
<li class="breadcrumb-item"><a href="index.html">Home</a></li>
<li class="breadcrumb-item"><a href="#">Cart</a></li>
</ol>
</nav>
</div>
</div>
    </div>

    <BasketCart  />

</div>
   )









}

export default Basket;