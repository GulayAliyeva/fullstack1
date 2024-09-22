import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import footerLogo from '../../assets/logo2_footer.png'


import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            <div className={styles.footerArea}>
                <section className={styles.subscribeArea}>
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xxl-3 col-xl-3 col-lg-4">
                                <div className={styles.subscribeCaption}>
                                    <h3>Subscribe Newsletter</h3>
                                    <p>Subscribe newsletter to get 5% on all products.</p>
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-9">
                                <div className={styles.subscribeCaption}>
                                    <form action="#">
                                        <input type="text" placeholder="Enter your email" />
                                        <button className={styles.subscribeBtn}>Subscribe</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-xl-2 col-lg-4">
                                <div className={styles.footerSocial}>
                                    <a href="https://bit.ly/sai4ull"><i className="fab fa-facebook"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="row justify-content-between">
                   
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-8">
                            <div className={styles.singleFooterCaption}>
                                <div className={styles.footerLogo}>
                                    <a href="index.html">
                                        <img src={footerLogo} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                      
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                            <div className={styles.singleFooterCaption}>
                                <div className={styles.footerTittle}>
                                    <h4>Shop Men</h4>
                                    <ul>
                                        <li><a href="#">Clothing Fashion</a></li>
                                        <li><a href="#">Winter</a></li>
                                        <li><a href="#">Summer</a></li>
                                        <li><a href="#">Formal</a></li>
                                        <li><a href="#">Casual</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                      
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                            <div className={styles.singleFooterCaption}>
                                <div className={styles.footerTittle}>
                                    <h4>Shop Women</h4>
                                    <ul>
                                        <li><a href="#">Clothing Fashion</a></li>
                                        <li><a href="#">Winter</a></li>
                                        <li><a href="#">Summer</a></li>
                                        <li><a href="#">Formal</a></li>
                                        <li><a href="#">Casual</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                            <div className={styles.singleFooterCaption}>
                                <div className={styles.footerTittle}>
                                    <h4>Baby Collection</h4>
                                    <ul>
                                        <li><a href="#">Clothing Fashion</a></li>
                                        <li><a href="#">Winter</a></li>
                                        <li><a href="#">Summer</a></li>
                                        <li><a href="#">Formal</a></li>
                                        <li><a href="#">Casual</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                  
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                            <div className={styles.singleFooterCaption}>
                                <div className={styles.footerTittle}>
                                    <h4>Quick Links</h4>
                                    <ul>
                                        <li><a href="#">Track Your Order</a></li>
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Carrier</a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottomArea}>
                <div className="container">
                    <div className="footerBorder">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className={styles.footerCopyRight}>
                                    <p>
                                        Copyright ©<script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script>
                                        <script>document.write(new Date().getFullYear());</script> 2024 All rights reserved | This template is made with <i className="fa fa-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="nofollow noopener">Colorlib</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
