import React, { useState, useEffect } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <div className="wishlist-area pt-50 pb-50">
      <div className="container">
        <h2>My Wishlist</h2>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <div className="row">
            {wishlist.map((product) => (
              <div className="col-md-4 mb-4" key={product.id}>
                <div className="imageContainer2">
                  <img src={product.image} className="item-img" alt={product.title} />
                  <div className="icons">
                    <div className="icon">
                      <AddShoppingCartIcon sx={{ fontSize: 24 }} />
                    </div>
                    <div className="icon" onClick={() => removeFromWishlist(product.id)}>
                      <FavoriteIcon sx={{ color: 'red' }} />
                    </div>
                    <div className="icon">
                      <ZoomInIcon />
                    </div>
                  </div>
                  <h5>{product.title}</h5>
               
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
