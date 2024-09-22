import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';


import Navbar from '../Components/Navbar/Navbar';
import Category from '../Components/Category/Category';
import WishlistPage from '../pages/Wishlist/Wishlist';
import Basket from '../pages/Basket/Basket';
import Detail from '../pages/Detail/Detail';
import Login from '../pages/Login/Login';
import AdminDashboard from '../pages/AdminPage/AdminPage';
function AppRoutes() {
  return (

    <Router>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Category />} />
        <Route path="/women" element={<Category />} />
        <Route path="/baby-collection" element={<Category />} />
        <Route path="/favorites" element={<WishlistPage />} />
        <Route path="/basket" element={<Basket />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
