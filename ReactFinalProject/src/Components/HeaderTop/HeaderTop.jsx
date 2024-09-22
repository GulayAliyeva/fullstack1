import React from 'react';
import './HeaderTop.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function HeaderTop() {
  return (
    <div className="header-top d-none d-sm-block ">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="d-flex justify-content-between flex-wrap align-items-center">
              <div className="leftSide  header-info-left">
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Careers</a></li>
                </ul>
              </div>
              <div className="header-info-right d-flex">
                <ul className="order-list">
                  <li><a href="#">My Wishlist</a></li>
                  <li><a href="#">Track Your Order</a></li>
                </ul>
                <ul className="header-social">
                  <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                  <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  );
}
