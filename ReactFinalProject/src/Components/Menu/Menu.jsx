
import React from 'react'

function Menu() {
  return (
   
<div className="blackPart">
<div className='text-center'> Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer <a href=''>Shop Now</a></div>
<div className="slicknav_menu">
<a href="#" aria-haspopup="true" role="button" tabIndex="0" className="slicknav_btn slicknav_collapsed" style={{ outline: "none" }}>
<span className="slicknav_menutxt">MENU</span>
<span className="slicknav_icon">
  <span className="slicknav_icon-bar"></span>
  <span className="slicknav_icon-bar"></span>
  <span className="slicknav_icon-bar"></span>
</span>
</a>
<ul className="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style={{ display: "none" }}>
<li><a href="index.html" role="menuitem" tabIndex="-1">Home</a></li>
<li><a href="categories.html" role="menuitem" tabIndex="-1">Men</a></li>
<li><a href="categories.html" role="menuitem" tabIndex="-1">Women</a></li>
<li className="new"><a href="categories.html" role="menuitem" tabIndex="-1">Baby Collection</a></li>
 
<li className="slicknav_collapsed slicknav_parent">
  <a href="#" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row" style={{ outline: "none" }}>
    <a href="#" tabIndex="-1">Pages <i className="fas fa-angle-down"></i></a>
    <span className="slicknav_arrow">+</span>
  </a>
  <ul className="submenu slicknav_hidden" role="menu" aria-hidden="true" style={{ display: "none" }}>
    <li><a href="login.html" role="menuitem" tabIndex="-1">Login</a></li>
    <li><a href="cart.html" role="menuitem" tabIndex="-1">Cart</a></li>
    <li><a href="pro-details.html" role="menuitem" tabIndex="-1">Product Details</a></li>
    <li><a href="checkout.html" role="menuitem" tabIndex="-1">Product Checkout</a></li>
  </ul>
</li> 
  



<li><a href="contact.html" role="menuitem" tabIndex="-1">Contact</a></li>
</ul>
</div>

</div>
  )
}

export default Menu







