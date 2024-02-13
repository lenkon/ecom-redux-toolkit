import React from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react";
import { useSelector, useDispatch } from 'react-redux';

const Cart = ({ openModal, setOpen }) => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <>
      {cart.length > 0 ? (
        <Dialog
        className='border-0 outline-0'
          open={openModal}
          handler={() => setOpen(false)}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader>Shopping Bag</DialogHeader>
          <DialogBody 
            divider 
            className='flex flex-col justify-center items-start'
          >
            {cart.map((item, index) => {
              return (
                <div key={index}>
                  <div className="grid grid-cols-2 py-4">
                    <div>
                      <img className="h-[125px] rounded-md" 
                        src={item.img} 
                        alt={item.name}></img>
                    </div>
                  </div>
                </div>
              );
            })}
          </DialogBody>
          {/* <DialogFooter> </DialogFooter> */}
        </Dialog>
      ) : (
        <Dialog
          className='border-0 outline-0'
          open={openModal}
          handler={() => setOpen(false)}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader>Shopping Bag</DialogHeader>
          <DialogBody>
            <div className="">
              <h1 className="text-black text-3xl font-inter font-bold tracking-normal leading-none py-4">Your bag is empty</h1>
              <p className="text-black text-base font-inter tracking-normal leading-none">Add some products</p>
            </div>
          </DialogBody>
        </Dialog>
      )}
    </>
  )
}

export default Cart;