import React from 'react';
import { useSelector } from 'react-redux';
import MainLayout from '../../layout/MainLayout';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <MainLayout>
      <div className="container mx-auto p-10">
        <h1 className="font-bold text-2xl">Cart</h1>
        <table className="table-fixed w-full mx-auto">
          <thead>
            <tr>
              <th>Items</th>
              <th>Quatity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
};

export default Cart;
