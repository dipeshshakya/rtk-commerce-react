import React from 'react';
import { useSelector } from 'react-redux';

const Total = () => {
  const { cart } = useSelector((state) => state.cart);
  //   console.log(cart);
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.qty;
      totalPrice += item.price * item.qty;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <>
      <p className="container w-1/4 float-right">
        total ({getTotal().totalQuantity} items) :
        <strong>${getTotal().totalPrice}</strong>
      </p>
    </>
  );
};

export default Total;
