import React from "react";
import { FaHeartCrack } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../features/wishlist/wishlistSlice";
import axios from "axios";
import { store } from "../store";
import { toast } from "react-toastify";


const WishItem = ({ item, counter }) => {
    const dispatch = useDispatch();

    const removeFromWishlistHandler = async (product) => {
      const getResponse = await axios.get(
        `http://localhost:8080/user/${localStorage.getItem("id")}`
      );
      const userObj = getResponse.data;
  
      userObj.userWishlist = userObj.userWishlist || [];
  
      const newWishlist = userObj.userWishlist.filter(item => product.id !== item.id);
  
      userObj.userWishlist = newWishlist;
  
      const postResponse = await axios.put(
        `http://localhost:8080/user/${localStorage.getItem("id")}`,
        userObj
      );
  
      // Dispatch the addToWishlist action with the product data
      store.dispatch(removeFromWishlist({ userObj }));
      toast.success("Product removed from the wishlist!");
  
    }
  return (
    <tr className="hover cursor-pointer">
      <th className="text-accent-content">{ counter + 1 }</th>
      <td className="text-accent-content">{ item.title }</td>
      <td className="text-accent-content">{ item.selectedSize }</td>
      <td>
        <button className="btn btn-xs btn-error text-sm" onClick={() => removeFromWishlistHandler(item)}>
          <FaHeartCrack />
          remove from the wishlist
        </button>
      </td>
    </tr>
  );
};

export default WishItem;
