import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";

const ProductElement = ({ id, title, image, rating, price, brandName }) => {
  const product = {
    id, title, image, rating, price, brandName, amount: 1
  };
  const dispatch = useDispatch();
  return (
    <div className="max-w-2xl">
      <div className="shadow-md rounded-lg max-w-sm bg-gray-800 border-gray-700">
        <Link to={`/shop/product/${id}`}>
          <img
            className="rounded-t-lg p-8"
            src={`https://${image}`}
            alt="product image"
          />
        </Link>
        <div className="px-5 pb-5">
          <Link to={`/shop/product/${id}`} onClick={() => window.scrollTo(0, 0)}>
            <h3 className="font-semibold text-xl tracking-tight text-white mb-5">
              {title}
            </h3>
          </Link>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-white">${price}</span>
            <button
              className="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductElement;
