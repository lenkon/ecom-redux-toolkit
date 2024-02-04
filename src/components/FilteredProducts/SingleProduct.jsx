import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Tooltip, Button } from "@material-tailwind/react";

const SingleProduct = () => {
  const product = useSelector((state) => state.products.singleProduct);
  // console.log("singleProduct:", product);
  const productSize = product[0].size[0] ? product[0].size[0] : "";
  const { id } = useParams();
  const [size, setSize] = useState(productSize);
  const productColor = product[0].size[0];
  const [color, setColor] = useState(productColor);
  return (
    <div>
      {
        product.filter((item) => item.id === id).map((el, index) => {
          return <div 
            key={index} 
            className="flex justify-center items-center py-10"
          >
            <div className="pl-44 grow-[2]">
              <img className='h-[850px] rounded-lg' src={el.img} alt={el.name} />
            </div>
            <div className="grow-[3]">
              <div className="max-w-lg">
                <h5 className="text-2xl font-inter font-bold tracking-normal leading-none pb-4">{el.name}</h5>
                <p className="text-orange-700 text-xl font-inter font-bold tracking-normal leading-none pb-4">15% OFF</p>
                <p className="text-gray-600 text-xl font-inter font-bold tracking-normal leading-none pb-4">{el.text}</p>
                <div className="pb-4">
                  {el.size ? (
                    <div className="">
                      <label htmlFor="size" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white pb-4'>Pick a size</label>
                      <select 
                        name="size" 
                        id="size" 
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pb-4'>
                        value={size}
                        onChange{(e) => setSize(e.target.value)}
                        {el.size.map((item, index) => {
                          return(
                            <option value={item} key={index}>{item}</option>
                          )                        
                        })}
                      </select>
                    </div>
                  ) : (
                    <div className="">
                      <label htmlFor="size" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white pb-4'>Pick a size</label>
                      <select 
                        name="size" 
                        id="size" 
                        disabled={true}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pb-4'>
                        value={size}
                        onChange{(e) => setSize(e.target.value)}
                        {el?.size?.map((item, index) => {
                          return(
                            <option value={item} key={index}>{item}</option>
                          )                        
                        })}
                      </select>
                    </div>
                  )}
                </div>
                {/* <div className=""> */}
                  <div className="pb-4">
                    <label htmlFor="color" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white pb-4'>Pick a color</label>
                    <select 
                      name="color" 
                      id="color" 
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pb-4'>
                      value={color}
                      onChange{(e) => setColor(e.target.value)}
                      {el.color.map((item, index) => {
                        return(
                          <option value={item} key={index}>{item}</option>
                        )                        
                      })}
                    </select>
                  </div>
                {/* </div> */}
                <Tooltip content="Add to Cart" placement="bottom">
                  <Button color='gray' size='lg' variant='outlined' ripple={true}>
                    Add to Cart
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default SingleProduct;