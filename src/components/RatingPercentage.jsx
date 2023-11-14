import React from 'react'
import { Link } from 'react-router-dom'
import SingleProductRating from './SingleProductRating'

const RatingPercentage = ({ rating, productData }) => {
  return (
    <>
    <div className="flex items-center mb-2 justify-center">
          <SingleProductRating rating={rating} productData={productData} />
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            5 star
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "70%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-accent-content">70%</span>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            4 star
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "17%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-accent-content">17%</span>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            3 star
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "8%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-accent-content">8%</span>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            2 star
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "4%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-accent-content">4%</span>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            1 star
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "1%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-accent-content">1%</span>
        </div>
        </>
  )
}

export default RatingPercentage