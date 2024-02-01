import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const product = useSelector((state) => state.products.singleProduct);
  // console.log("singleProduct:", product);
  const { id } = useParams();

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
                  <div className="">
                    <label htmlFor="countries" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white pb-4'>Pick a size</label>
                    <select name="" id="" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pb-4'>
                      {el.size.map((item, index) => {
                        return(
                          <option value={item} key={index}>{item}</option>
                        )                        
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default SingleProduct;