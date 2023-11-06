import { nanoid } from "nanoid";
import parse from "html-react-parser";
import React, { memo } from "react";

const SingleProductRating = ({rating, productData}) => {
  return (
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
  );
};

export default memo(SingleProductRating);
