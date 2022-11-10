// import { set } from 'immer/dist/internal';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { singleProduct } from '../feature/productSlice';
function SingleProduct() {
  const [singleProduct, setsingleProduct] = useState([]);
  const { products } = useSelector((state) => state.product);
  //   const [singleProduct, setSingleProduct] = useState({});
  const { id } = useParams();

  const [product] = products.filter(function (ele) {
    // eslint-disable-next-line eqeqeq
    return ele.id == id;
  });

  const { image, title, description, price, category } = product;

  console.log(product);
  useEffect(() => {
    setsingleProduct(product);
    console.log(singleProduct);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container columns-2 gap-4 mx-auto p-40">
        <div className="aspect-square object-contain">
          <img src={image} alt="" />
        </div>
        <div className="product__detail">
          <h1 className="font-bold text-2xl mb-2">{title}</h1>
          <span className="font-medium text-base capitalize decoration-slate-200">
            {category}
          </span>
          <p className="font-normal text-base capitalize">{description}</p>
          <p>
            <strong className="font-extra text-3xl text-orange-400	my-3">
              ${price}
            </strong>
          </p>
          <div className="container">
            <input type="number" defaultValue={1} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
