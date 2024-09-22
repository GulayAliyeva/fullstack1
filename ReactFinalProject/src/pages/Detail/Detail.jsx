import React from 'react'
import HeaderTop from '../../Components/HeaderTop/HeaderTop';
import Navbar from '../../Components/Navbar/Navbar';
import Menu from '../../Components/Menu/Menu';
import styles from "./Detail.module.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useParams } from 'react-router-dom';
import item1 from '../../assets/items1.jpg'
import item2 from '../../assets/items2.jpg'
import item3 from '../../assets/items3.jpg'


    
    function Detail() {
        const { id } = useParams();
        const productId = parseInt(id) - 1;
       
        const products = [
            { id: 1, title: "Men's Fashion", image: item1 },
            { id: 2, title: "Women's Fashion", image: item2 },
            { id: 3, title: "Baby's Fashion", image: item3 },
        ];

        const product = products[productId];
    
        console.log("Product ID from URL:", id);
        console.log("Retrieved Product:", product);






        
  return (
    <div>
       <HeaderTop/>
       <Navbar/>
       <Menu/>
       <div  className='pinkSection' >
    <div class=" d-flex align-items-center justify-content-center">
<div class="hero-caption hero-caption2">
<h2>Product Details</h2>
<nav aria-label="breadcrumb">
<ol class="breadcrumb justify-content-center">
<li class="breadcrumb-item"><a href="index.html">Home</a></li>
<li class="breadcrumb-item"><a href="#">Product Deatils</a></li>
</ol>
</nav>
</div>
</div>
    </div>

    <div className={`${styles.singleServices} d-flex align-items-center mb-0`}>
      <div className={styles.featuresImg}>
        <img src={product.image} alt="The Rage of Dragons" />
      </div>
      <div className={styles.featuresCaption}>
        <h3> {product.title} </h3>
       
        <div className={styles.price}>
          <span>{product.price}</span>
        </div>
        <div className={styles.review}>
          <div className={styles.rating}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
          <p>{product.reviews}</p>
        </div>
        <a href="#" className={`${styles.whiteBtn} mr-10`}>Add to Cart</a>
        <a href="#" className={`${styles.borderBtn} ${styles.shareBtn}`}>
          <i className="fas fa-share-alt"></i>
        </a>
      </div>
    </div>

    </div>
  )
}

export default Detail
