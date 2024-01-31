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
                <h5 className="text-2xl font-inter font-bold tracking-normal leading-none">{el.name}</h5>
                <p className="text-orange-700 text-xl font-inter font-bold tracking-normal leading-none pb-4">15% OFF</p>
                <p className="text-gray-600 text-xl font-inter font-bold tracking-normal leading-none pb-4">{el.text}</p>
              </div>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default SingleProduct;