import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);
  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.qty;
    });
    return total;
  };

  return (
    <div className="container w-full flex justify-between">
      <div className="logo">Shopping</div>
      <div className="navbar">
        <ul className="flex">
          <Link to="/">
            <li className="mx-2">Home</li>
          </Link>
          <Link to="/cart">
            <li className="mx-2">
              Cart
              <span className="rounded-full	 mx-2 p-2 bg-orange-400 w-[50px] h-[50px]">
                {getTotalQuantity() || 0}
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
