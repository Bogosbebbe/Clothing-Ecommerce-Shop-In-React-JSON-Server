import axios from "axios";
import React, { useState } from "react";
import { QuantityInput, SectionTitle } from "../components";
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";

import { useLoaderData } from "react-router-dom";
import parse from "html-react-parser";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export const singleProductLoader = async ({ params }) => {
  const { id } = params;

  const response = await axios(`http://localhost:8080/products/${id}`);

  return { productData: response.data };
};

const SingleProduct = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const [rating, setRating] = useState([
    "empty star",
    "empty star",
    "empty star",
    "empty star",
    "empty star",
  ]);

  const dispatch = useDispatch();

  const { productData } = useLoaderData();

  const product = {
    id: productData?.id,
    title: productData?.name,
    image: productData?.imageUrl,
    rating: productData?.rating,
    price: productData?.price?.current?.value,
    brandName: productData?.brandName,
    amount: quantity,
  };

  for (let i = 0; i < productData?.rating; i++) {
    rating[i] = "full star";
  }

  
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
    <>
      <SectionTitle title="Product page" path="Home | Shop | Product page" />
      <div className="grid grid-cols-2 max-w-7xl mx-auto mt-5 max-lg:grid-cols-1 max-lg:mx-5">
        <div className="product-images flex flex-col justify-center max-lg:justify-start">
          <img
            src={`https://${productData?.additionalImageUrls[currentImage]}`}
            className="w-96 text-center border border-gray-600 cursor-pointer"
            alt={productData.name}
          />
          <div className="other-product-images mt-1 grid grid-cols-3 w-96 gap-y-1 gap-x-2 max-sm:grid-cols-2 max-sm:w-64">
            {productData?.additionalImageUrls.map((imageObj, index) => (
              <img
                src={`https://${imageObj}`}
                key={nanoid()}
                onClick={() => setCurrentImage(index)}
                alt={productData.name}
                className="w-32 border border-gray-600 cursor-pointer"
              />
            ))}
          </div>
        </div>
        <div className="single-product-content flex flex-col gap-y-5 max-lg:mt-2">
          <h2 className="text-5xl max-sm:text-3xl">{productData?.name}</h2>
          <div className="rating">
            {rating[0] === "empty star"
              ? parse("<p className='text-2xl'>No rating</p>")
              : rating.map((item) => {
                  return (
                    <input
                      type="button"
                      key={nanoid()}
                      name="rating-1"
                      className={
                        item === "full star"
                          ? `mask mask-star bg-orange-400`
                          : `mask mask-star bg-gray-400`
                      }
                    />
                  );
                })}
            {rating[0] === "full star" &&
              parse(
                `<p className='text-xl ml-2'>(${productData?.totalReviewCount} reviews)</p>`
              )}
          </div>
          <p className="text-3xl text-error">
            ${productData?.price?.current?.value}
          </p>
          <div className="text-xl max-sm:text-lg">
            {parse(productData?.description)}
          </div>
          <div className="text-2xl">
            <select className="select select-info w-full max-w-xs select-md">
              <option disabled className="text-lg">
                Pick your size
              </option>
              {productData?.availableSizes.map((item) => (
                <option value={item} key={nanoid()} className="text-xl">
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="Quantity" className="sr-only">
              {" "}
              Quantity{" "}
            </label>

            <div className="flex items-center gap-1">
              <QuantityInput onQuantityChange={handleQuantityChange} />
            </div>
          </div>
          <div className="flex flex-row gap-x-2 max-sm:flex-col max-sm:gap-x">
            <button
              className="btn bg-blue-600 hover:bg-blue-500 text-white"
              onClick={() => dispatch(addToCart(product))}
            >
              <FaCartShopping className="text-xl mr-1" />
              Add to cart
            </button>
            <button className="btn bg-blue-600 hover:bg-blue-500 text-white">
              <FaHeart className="text-xl mr-1" />
              Add to wishlist
            </button>
          </div>
          <div className="other-product-info flex flex-col gap-x-2">
            <div className="badge bg-gray-700 badge-lg font-bold text-white">
              Brand: {productData?.brandName}
            </div>
            <div className="badge bg-gray-700 badge-lg font-bold text-white">
              Gender: {productData?.gender}
            </div>
            <div
              className={
                productData?.isInStock
                  ? "badge bg-gray-700 badge-lg font-bold text-white"
                  : "badge bg-gray-700 badge-lg font-bold text-white"
              }
            >
              In Stock: {productData?.isInStock ? "Yes" : "No"}
            </div>
            <div className="badge bg-gray-700 badge-lg font-bold text-white">
              SKU: {productData?.productCode}
            </div>
            <div className="badge bg-gray-700 badge-lg font-bold text-white">
              Category: {productData?.category}
            </div>
            <div className="badge bg-gray-700 badge-lg font-bold text-white">
              Production Date: {productData?.productionDate}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
