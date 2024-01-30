import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useDispatch } from 'react-redux';
import { singleProduct } from '../../features/slices/productsSlice';
import { Link, useParams } from 'react-router-dom';


const ProductCard = ({id, name, text, img, price, colors}) => {
  const dispatch = useDispatch();
  const { type } = useParams();

  return (
    <div className="">
      <Card className="mt-6 w-96" onClick={() => dispatch(singleProduct(id))}>
        <CardHeader color="blue-gray" className="relative h-96">
          <img
            src={img}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography>
            {text}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Typography variant='small'>${price}</Typography>
          <Typography variant='small' color='gray' className='flex gap-1'>
            {colors?.map((color, index) => {
              return <i 
                className='fas fa-map-marker-alt fa-sm mt-[3px] p-2 rounded-full mr-4' 
                key={index}
                style={{ backgroundColor: color }}
              ></i>;
            })}
          </Typography>
        </CardFooter>
      </Card>    
    </div>
  );
}

export default ProductCard;