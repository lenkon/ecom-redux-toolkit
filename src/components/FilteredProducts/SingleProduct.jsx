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
          </div>
        })
      }
    </div>
  )
}

export default SingleProduct;