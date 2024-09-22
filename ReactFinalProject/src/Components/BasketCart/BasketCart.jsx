import React, { useState,useEffect } from 'react';
import './BasketCart.css'; 


const BasketCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedBasket = localStorage.getItem('basket');
    if (savedBasket) {
      setCartItems(JSON.parse(savedBasket));
    }
  }, []);

  const handleQuantityChange = (id, increment) => {
    const updatedCart = cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(0, item.quantity + increment) }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('basket', JSON.stringify(updatedCart));
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);







  return (
    <section className="cart_area">
      <div className="container">
        <div className="cart_inner">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id}>
                    <td>
                      <div className="media">
                        <div className="d-flex">
                          <img src={item.image} alt={item.title} />
                        </div>
                        <div className="media-body">
                          <p>{item.title}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>${item.price.toFixed(2)}</h5>
                    </td>
                    <td>
                      <div className="product_count">
                        <span 
                          className="input-number-decrement" 
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          <i className="ti-minus"></i>
                        </span>
                        <input 
                          className="input-number" 
                          type="text" 
                          value={item.quantity} 
                          min="0" 
                          readOnly
                        />
                        <span 
                          className="input-number-increment" 
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          <i className="ti-plus"></i>
                        </span>
                      </div>
                    </td>
                    <td>
                      <h5>${(item.price * item.quantity).toFixed(2)}</h5>
                    </td>
                  </tr>
                ))}
                <tr className="bottom_button">
                  <td>
                    <a className="btn" href="#">Update Cart</a>
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="cupon_text float-right">
                      <a className="btn" href="#">Close Coupon</a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <h5>Subtotal</h5>
                  </td>
                  <td>
                    <h5>${subtotal.toFixed(2)}</h5>
                  </td>
                </tr>
                <tr className="shipping_area">
                  <td></td>
                  <td></td>
                  <td>
                    <h5>Shipping</h5>
                  </td>
                  <td>
                    <div className="shipping_box">
                      <ul className="list">
                        <li>
                          Flat Rate: $5.00
                          <input type="radio" aria-label="Flat Rate: $5.00" />
                        </li>
                        <li>
                          Free Shipping
                          <input type="radio" aria-label="Free Shipping" />
                        </li>
                        <li>
                          Flat Rate: $10.00
                          <input type="radio" aria-label="Flat Rate: $10.00" />
                        </li>
                        <li className="active">
                          Local Delivery: $2.00
                          <input type="radio" aria-label="Local Delivery: $2.00" />
                        </li>
                      </ul>
                      <h6>
                        Calculate Shipping
                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                      </h6>
                      <select className="shipping_select">
                        <option value="1">Bangladesh</option>
                        <option value="2">India</option>
                        <option value="4">Pakistan</option>
                      </select>
                      <input className="post_code" type="text" placeholder="Postcode/Zipcode" />
                      <a className="btn" href="#">Update Details</a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="checkout_btn_inner float-right">
              <a className="btn" href="#">Continue Shopping</a>
              <a className="btn checkout_btn" href="#">Proceed to checkout</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasketCart;
