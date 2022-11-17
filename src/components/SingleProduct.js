// import { set } from 'immer/dist/internal';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addCart } from '../feature/cartSlice';
function SingleProduct() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      // You can await here
      await fetch('https://fakestoreapi.com/products/' + id)
        .then((data) => data.json())
        .then((data) => setData(data))
        .then(setLoading(false))
        .catch((error) => 'no product found');
      // console.log(response);
      // setData(response);
    }
    fetchData();
  }, [id]);

  console.log(data);

  const addtocart = () => {
    dispatch(addCart(data));
  };

  const { image, title, description, price, category } = data;
  return (
    <>
      {loading && <div className="text-bold">loading...</div>}
      {data && (
        <div className="container columns-2 gap-4 mx-auto p-40">
          <div className="aspect-square object-fit clear-both">
            <img src={image} alt="" height={400} width={400} />
          </div>
          <div className="product__detail">
            <h1 className="font-bold text-2xl mb-2">{title}</h1>
            <span className="font-medium text-base capitalize decoration-slate-200">
              {category}
            </span>
            <p className="font-normal text-base capitalize">{description}</p>
            <p className="font-extra text-3xl text-orange-400	my-6">${price}</p>
            <div className="container flex justify-between">
              <input
                type="text"
                defaultValue={1}
                className="border-2 p-1"
                readOnly
              />
              <button
                onClick={addtocart}
                className="p-2 w-full bg-orange-400 text-white"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleProduct;
