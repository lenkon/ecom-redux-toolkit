import React from 'react';
import Navbar from '../navbar/Navbar';
import Slider from '../slider/Slider';
import NavigateButtons from '../NavigateButtons/NavigateButtons';

const Main = () => {
  return (
    <div>
      <Navbar />
      <Slider></Slider >
      <NavigateButtons />
    </div>
  )
}

export default Main