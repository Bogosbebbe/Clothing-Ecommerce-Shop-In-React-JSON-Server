import React from "react";
import { FaHeartCrack } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../features/wishlist/wishlistSlice";
const WishItem = ({ item, counter }) => {
    const dispatch = useDispatch();
  return (
    <tr className="hover cursor-pointer">
      <th>{ counter + 1 }</th>
      <td>{ item.title }</td>
      <td>{ item.selectedSize }</td>
      <td>
        <button className="btn btn-xs btn-error text-sm" onClick={() => dispatch(removeFromWishlist(item.id))}>
          <FaHeartCrack />
          remove from the wishlist
        </button>
      </td>
    </tr>
  );
};

export default WishItem;
