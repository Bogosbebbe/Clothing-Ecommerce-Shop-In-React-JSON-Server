import React from "react";
import { SectionTitle, WishItem } from "../components";
import { useDispatch, useSelector } from "react-redux";


const Wishlist = () => {
    const { wishItems } = useSelector((state) => state.wishlist); 
    console.log(wishItems);
    const dispatch = useDispatch();
  return (
    <>
      <SectionTitle title="Wishlist" path="Home | Wishlist" />
      <div className="max-w-7xl mx-auto">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Size</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              { wishItems.map((item, index) => (
                <WishItem item={item} key={index} counter={index} />
              )) }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
