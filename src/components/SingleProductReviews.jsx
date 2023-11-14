import React from 'react'
import SingleReview from './SingleReview'
import RatingPercentage from './RatingPercentage'
import { nanoid } from 'nanoid'

const SingleProductReviews = ({ rating, productData }) => {
  return (
    <div className="product-reviews max-w-7xl mt-10 mx-auto">
        <RatingPercentage rating={rating} productData={productData} />

        <div className="product-reviews-comments mt-20 px-10">
            { productData.reviews.map(item => (
                <SingleReview key={nanoid()} reviewObj={item} />
            )) }

        </div>
      </div>
  )
}


export default SingleProductReviews