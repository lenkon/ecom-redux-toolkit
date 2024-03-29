import React from 'react';
import './App.css';
import Main from './components/main/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilteredProducts from './components/FilteredProducts/FilteredProducts';
import SingleProduct from './components/FilteredProducts/SingleProduct';
import { useSelector } from 'react-redux';


function App() {
  // const cart = useSelector((state) => state.cart.cart);
  // const totalAmount = useSelector((state) => state.cart.totalAmount);
  // const totalPrice = useSelector((state) => state.cart.totalPrice);

  // console.log('cart', cart);
  // console.log('totalAmount', totalAmount);
  // console.log('totalPrice', totalPrice);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/filteredProducts/:type' element={<FilteredProducts />} />
          <Route path='/filteredProducts/:type/:id' element={<SingleProduct />} />       
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
