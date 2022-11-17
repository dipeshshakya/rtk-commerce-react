import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../../components/CartItem';
import MainLayout from '../../layout/MainLayout';

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <MainLayout>
      <div className="container mx-auto p-10">
        <h1 className="font-bold text-2xl">Cart</h1>
        <table className="table-fixed w-full mx-auto">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Product</th>
              <th>Quatity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                qty={item.qty}
              />
            ))}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
};

export default Cart;
