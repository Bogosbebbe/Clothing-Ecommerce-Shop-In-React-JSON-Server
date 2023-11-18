import React from "react";
import SingleReview from "./SingleReview";
import RatingPercentage from "./RatingPercentage";
import { nanoid } from "nanoid";

const SingleProductReviews = ({ rating, productData }) => {
  return (
    <div className="product-reviews max-w-7xl mt-10 mx-auto">
      <RatingPercentage rating={rating} productData={productData} />

      <div className="product-reviews-comments mt-20 px-10">
        <h2 className="text-4xl text-accent-content text-center mb-5 max-sm:text-2xl">
          Reviews
        </h2>
        {productData.reviews.map((item) => (
          <SingleReview key={nanoid()} reviewObj={item} />
        ))}
        {productData?.totalReviewCount > 3 && (
          <button className="btn bg-blue-600 hover:bg-blue-500 w-full text-white">
            Load more reviews
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProductReviews;
