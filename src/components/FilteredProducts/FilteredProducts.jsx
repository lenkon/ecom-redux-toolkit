import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const FilteredProducts = () => {
  const products = useSelector((state) => state.products.FilteredProducts);
  return (
    <div>FilteredProducts</div>
  )
}

export default FilteredProducts;