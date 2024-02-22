import React from 'react';
import Navbar from '../navbar/Navbar';
import Slider from '../slider/Slider';
import NavigateButtons from '../NavigateButtons/NavigateButtons';
import ProductSection from '../productSection/ProductSection';


const Main = () => {
  return (
    <div>
      <Navbar />
      <Slider></Slider >
      <NavigateButtons />
      <ProductSection />
    </div>
  )
}

export default Main