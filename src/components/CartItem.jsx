import { useDispatch } from "react-redux";
import { removeItem, updateCartAmount } from "../features/cart/cartSlice";


const CartItem = ({ cartItem }) => {
  const { id, title, price, image, amount, brandName, selectedSize } =
    cartItem;

    const dispatch = useDispatch();

  return (
    <article
      key={id}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      {/* IMAGE */}
      <img
        src={`https://${image}`}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      {/* INFO */}
      <div className="sm:ml-16 sm:w-48">
        {/* TITLE */}
        <h3 className="capitalize font-medium">{title}</h3>
        {/* COMPANY */}
        <h4 className="mt-2 capitalize text-sm text-neutral-content">
          Brand: { brandName }
        </h4>
        <h4 className="mt-2 capitalize text-sm text-neutral-content">
          Size: { selectedSize }
        </h4>
      </div>
      <div className="sm:ml-12">
        {/* AMOUNT */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <input
            name="number"
            id="amount"
            className="mt-2 input input-bordered input-sm w-full max-w-xs"
            value={amount}
           onChange={(event) => dispatch(updateCartAmount({id: id, amount: event.target.value}))}
            />
        </div>
        {/* REMOVE */}
        <button
          className="mt-2 link link-warning link-hover text-sm"
          onClick={()=> dispatch(removeItem(id))}
        >
          remove
        </button>
      </div>

      {/* PRICE */}
      <p className="font-medium sm:ml-auto">${ (price * amount).toFixed(2) }</p>
    </article>
  );
};

export default CartItem;
