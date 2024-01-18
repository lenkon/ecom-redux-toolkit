import React from 'react';
import { nextSlide, prevSlide, dotSlide } from '../../features/slices/sliderSlice';
import { useSelector, useDispatch } from 'react-redux';
import { sliderData } from '../../assets/data/dummyData';

const Slider = () => {
  const slideIndex = useSelector((state) => state.slider.value);
  console.log('slideIndex', slideIndex);  
  const dispatch = useDispatch();
  return (
    <div className='relative pb-4'>
      <div>
        {sliderData.map((item) => {
          return <div key={item.id} 
          className={parseInt(item.id) === slideIndex ? 
            "opacity-100 duration-700 ease-in-out scale-100" :
            "opacity-0 duration-700 ease-in-out scale-95"
            }>
            <div>
              {parseInt(item.id) === slideIndex && (
              <img className='' src={item.img} alt='shoes'></img>
              )}
            </div>
            <div>
              <p className='text-4xl font-inter font-bold tracking-normal leading-none'>
                {parseInt(item.id) === slideIndex && item.text}
              </p>
            </div>
          </div>
        })}
      </div>
      <button onClick={() => dispatch(nextSlide(slideIndex + 1))}>Next</button>
      <button onClick={() => dispatch(prevSlide(slideIndex - 1))}>Prev</button>
    </div>
  )
}

export default Slider;