import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import AddProducts from './components/AddProducts';
import EditProducts from './components/EditProducts';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />  {/* ✅ Navbar always visible */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/add-product" element={<AddProducts />} />
        <Route path="/edit-product" element={<EditProducts />} />
      </Routes>
    </Router>
  );
}

export default App;

