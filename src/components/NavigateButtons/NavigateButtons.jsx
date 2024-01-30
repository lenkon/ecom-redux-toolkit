import { Button, ButtonGroup } from '@material-tailwind/react';
import React from 'react';
import clothes from '../../assets/images/clothes.jpg';
import { filteredProducts } from '../../features/slices/productsSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const NavigateButtons = () => {
  const buttons = [
    "Hoodies", 
    "Dresses", 
    "Suits", 
    "Shoes", 
    "T-Shirts", 
    "Jeans", 
    "Jackets", 
    "Bags"
  ];
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex items-center justify-center py-8 mt-4 mb-4">
        {
          buttons.map((button, index) => {
            return (
              <div key={index} className='mr-4'>
                <Link to={"filteredProducts/" + button}>
                  <ButtonGroup color='blue-gray'>                
                    <Button 
                      size='md'  
                      variant='outlined' 
                      ripple={true} 
                      className='hover:bg-green-900 duration-300 ease-in-out'
                      onClick={() => dispatch(filteredProducts(button))}
                    >
                      {
                        button
                      }
                    </Button>
                  </ButtonGroup>               
                </Link>                   
              </div>
            );
          })}
      </div>
      <div className='bg-green-300 p-2 w-[55%] mx-auto rounded-md'>
        <h3 className="text-orange-900 bg-green-300 text-center text-lg font-inter font-bold tracking-normal leading-none">SALES UP TO 50%</h3>
      </div>
      <div className="flex justify-center items-center py-4">
        <img className="h-[700px] w-[70%] rounded-md shadow-lg shadow-gray-600" src={clothes} alt='clothes'></img>
      </div>
    </div>
  );
};

export default NavigateButtons