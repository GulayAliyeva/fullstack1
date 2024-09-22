import React from 'react';
import Navbar from '../Navbar/Navbar';
import  './Category.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import HeaderTop from '../HeaderTop/HeaderTop';
import ListingArea from '../ListingArea/ListingArea'
import Menu from '../Menu/Menu';
export default function Category() {


  return (
    <div>
<HeaderTop/>
      <Navbar/>
     <Menu/>
    <div  className='pinkSection' >
    <div class=" d-flex align-items-center justify-content-center">
<div class="hero-caption hero-caption2">
<h2>Category</h2>
<nav aria-label="breadcrumb">
<ol class="breadcrumb justify-content-center">
<li class="breadcrumb-item"><a href="index.html">Home</a></li>
<li class="breadcrumb-item"><a href="#">Category</a></li>
</ol>
</nav>
</div>
</div>
    </div>

     <ListingArea className='listingArea'/>                   
   
     </div>



    
  )
}


