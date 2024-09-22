import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../../assets/logo.png'
import  './Navbar.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="menu-wrapper">
   
      <div className="logo">
       
          <img src={logo} alt="Logo" />
  
      </div>

    
      <div className="main-menu d-none d-lg-block">
        <nav>
          <ul id="navigation">
          <li><Link to="/">Home</Link></li>
            <li><Link to="/men">Men</Link></li>
            <li><Link to="/women">Women</Link></li>
            <li className="new"><Link to="/baby-collection">Baby Collection</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
           
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>

     
      <div className="header-right">
        <ul>
        
          <li>
            <div className="nav-search search-switch hearer_icon">
              <a id="search_1" href="#">
              <span className="flaticon-user"><SearchOutlinedIcon/> </span>   
              </a>
            </div>
          </li>

    
          <li>
          
          <span className="flaticon-shopping-cart"><Link to="/login"><PersonOutlineOutlinedIcon/></Link></span>
      
   
          </li>

       
          <li className="cart">
       
          <span className="flaticon-search"><Link to="/basket"><AddShoppingCartIcon/></Link> </span>  
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;



