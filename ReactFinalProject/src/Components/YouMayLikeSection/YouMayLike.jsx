import React, { useState, useEffect } from 'react';
import './YouMayLike.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import item1 from '../../assets/latest5.jpg';
import item2 from '../../assets/latest6.jpg';
import item3 from '../../assets/latest7.jpg';
import item4 from '../../assets/latest8.jpg';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

const YouMayLike = () => {
  const [wishlist, setWishlist] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }

   
    const savedBasket = localStorage.getItem('basket');
    if (savedBasket) {
      setBasket(JSON.parse(savedBasket));
    }
  }, []);

  const toggleWishlist = (product) => {
    let updatedWishlist;
    if (wishlist.some((item) => item.id === product.id)) {
      updatedWishlist = wishlist.filter((item) => item.id !== product.id);
    } else {
      updatedWishlist = [...wishlist, product];
    }
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };
  const addToBasket = (product) => {
    const existingProduct = basket.find((item) => item.id === product.id);
  
    let updatedBasket;
    if (existingProduct) {
      updatedBasket = basket.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedBasket = [...basket, { ...product, quantity: 1 }];
    }
  
    setBasket(updatedBasket);
    localStorage.setItem('basket', JSON.stringify(updatedBasket));
  };
  

  const products = [
    { id: 1, title: 'Product 1', image: item1, price: 20.0 },
    { id: 2, title: 'Product 2', image: item2, price: 15.5 },
    { id: 3, title: 'Product 3', image: item3, price: 10.99 },
    { id: 4, title: 'Product 4', image: item4, price: 25.0 },
  ];

  return (
    <div className='sectionContainer'>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {products.map((product) => (
            <div className="swiper-slide" key={product.id}>
              <div className='imageContainer2'>
                <img src={product.image} alt={product.title} />
                <div className='icons'>
                  <div className='icon' onClick={() => addToBasket(product)}>
                    <AddShoppingCartIcon />
                  </div>
                  <div className='icon' onClick={() => toggleWishlist(product)}>
                    {wishlist.some((item) => item.id === product.id) ? (
                      <FavoriteIcon sx={{ color: 'red' }} />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </div>
                  <div className='icon'>
                    <ZoomInIcon />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
};

export default YouMayLike;
