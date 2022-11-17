import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementQty, decrementQty, removeItem } from '../feature/cartSlice';
const CartItem = ({ id, image, title, qty, price }) => {
  const dispatch = useDispatch();
  return (
    <>
      <tr>
        <td>
          <button onClick={() => dispatch(removeItem(id))}>X</button>
        </td>
        <td>
          <img src={image} alt="" className="w-[100px] h-[100px]" />
        </td>
        <td className="text-sm text-center font-bold">
          <h3>{title}</h3>
        </td>
        <td>
          <div className="container text-center flex flex-row justify-evenly items-center">
            <button
              onClick={() => dispatch(incrementQty(id))}
              className="border-1 bg-orange-400 p-3"
            >
              +
            </button>
            <p>{qty}</p>
            <button
              className="border-1 bg-orange-400 p-3"
              onClick={() => dispatch(decrementQty(id))}
            >
              -
            </button>
          </div>
        </td>
        <td className="text-sm mx-auto text-center font-bold">{price}</td>
      </tr>
    </>
  );
};

export default CartItem;
