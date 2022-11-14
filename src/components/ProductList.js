import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import SingleProduct from './SingleProduct';
function ProductList() {
  const { products } = useSelector((state) => state.product);
  // console.log(products);
  return (
    <>
      <div className="container grid md:grid-cols-4 mx-auto gap-8 p-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="card flex flex-col border-2 justify-center align-middle p-5 hover:drop-shadow-md	"
          >
            <img
              src={product.image}
              alt=""
              className="aspect-square object-contain"
            />
            <h2 className="font-semibold pt-4"> {product.title}</h2>
            <Link to={`/product/${product.id}`}>
              <button className="font-bold mt-4 p-2 flex justify-around bg-orange-200">
                Add to Cart
                <span>${product.price}</span>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
