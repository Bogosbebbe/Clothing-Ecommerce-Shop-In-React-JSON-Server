import axios from "axios";
import React, { useState } from "react";
import {
  QuantityInput,
  SectionTitle,
  SelectSize,
  SingleProductRating,
} from "../components";
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";

import { useLoaderData } from "react-router-dom";
import parse from "html-react-parser";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../features/wishlist/wishlistSlice";
import { toast } from "react-toastify";

export const singleProductLoader = async ({ params }) => {
  const { id } = params;

  const response = await axios(`http://localhost:8080/products/${id}`);

  return { productData: response.data };
};

const SingleProduct = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(0);
  const { wishItems } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  const [rating, setRating] = useState([
    "empty star",
    "empty star",
    "empty star",
    "empty star",
    "empty star",
  ]);

  const { productData } = useLoaderData();

  const product = {
    id: productData?.id + size,
    title: productData?.name,
    image: productData?.imageUrl,
    rating: productData?.rating,
    price: productData?.price?.current?.value,
    brandName: productData?.brandName,
    amount: quantity,
    selectedSize: size || productData?.availableSizes[0],
    isInWishList:
      wishItems.find((item) => item.id === productData?.id + size) !==
      undefined,
  };
  console.log(product);

  for (let i = 0; i < productData?.rating; i++) {
    rating[i] = "full star";
  }

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
          <SingleProductRating rating={rating} productData={productData} />
          <p className="text-3xl text-error">
            ${productData?.price?.current?.value}
          </p>
          <div className="text-xl max-sm:text-lg">
            {parse(productData?.description)}
          </div>
          <div className="text-2xl">
            <SelectSize
              sizeList={productData?.availableSizes}
              size={size}
              setSize={setSize}
            />
          </div>
          <div>
            <label htmlFor="Quantity" className="sr-only">
              {" "}
              Quantity{" "}
            </label>

            <div className="flex items-center gap-1">
              <QuantityInput quantity={quantity} setQuantity={setQuantity} />
            </div>
          </div>
          <div className="flex flex-row gap-x-2 max-sm:flex-col max-sm:gap-x">
            <button
              className="btn bg-blue-600 hover:bg-blue-500 text-white"
              onClick={() => {
                if (loginState) {
                  dispatch(addToCart(product));
                } else {
                  toast.error(
                    "You must be logged in to add products to the cart"
                  );
                }
              }}
            >
              <FaCartShopping className="text-xl mr-1" />
              Add to cart
            </button>

            {product?.isInWishList ? (
              <button
                className="btn bg-blue-600 hover:bg-blue-500 text-white"
                onClick={() => {
                  if (loginState) {
                    dispatch(removeFromWishlist(product?.id));
                  } else {
                    toast.error(
                      "You must be logged in to remove products from the wishlist"
                    );
                  }
                }}
              >
                <FaHeart className="text-xl mr-1" />
                Remove from wishlist
              </button>
            ) : (
              <button
                className="btn bg-blue-600 hover:bg-blue-500 text-white"
                onClick={() => {
                  if(loginState){
                    dispatch(addToWishlist(product));
                  }else{
                    toast.error(
                      "You must be logged in to add products to the wishlist"
                    );
                  }

                }}
              >
                <FaHeart className="text-xl mr-1" />
                Add to wishlist
              </button>
            )}
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
