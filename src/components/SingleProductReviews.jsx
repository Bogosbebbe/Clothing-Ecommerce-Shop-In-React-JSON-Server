import React from "react";
import SingleReview from "./SingleReview";
import RatingPercentage from "./RatingPercentage";
import { nanoid } from "nanoid";

const SingleProductReviews = ({ rating, productData }) => {
  return (
    <div className="product-reviews max-w-7xl mt-10 mx-auto">
      <RatingPercentage rating={rating} productData={productData} />

      <div className="product-reviews-comments mt-20 px-10">
        <div className="add-review py-16">
          <h2 className="text-4xl text-accent-content text-center mb-5 max-sm:text-2xl">
            Add Your Review
          </h2>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-accent-content">Review title</span>
            </label>
            <input
              type="text"
              placeholder="Type your review title here..."
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-accent-content">Review text</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Type your review here..."
            ></textarea>
          </div>
          <div className="add-reviews-stars flex items-center">
            <p className="text-accent-content text-2xl mr-5 max-sm:text-base max-sm:mr-2">How many stars would you give: </p>
            <div className="rating rating-lg text-center my-5 max-sm:rating-md">
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn bg-blue-600 hover:bg-blue-500 text-white my-5 w-full"
          >
            Add review
          </button>
        </div>
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
