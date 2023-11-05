import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const QuantityInput = React.memo(({ onQuantityChange }) => {
    const [quantity, setQuantity] = useState(1);

    const handleInputChange = (event) => {
      const newQuantity = event.target.value;
      setQuantity(newQuantity);
  
      // Call the callback function with the new quantity
      onQuantityChange(newQuantity);
    };
    
  return (
    <>
      <button
        type="button"
        className="h-10 w-10 border-gray-600 flex justify-center items-center border leading-10 text-gray-600 transition hover:opacity-75"
        onClick={() => setQuantity(quantity - 1)}
      >
        <FaMinus className="text-2xl" />
      </button>

      <input
        type="number"
        id="Quantity"
        value={quantity}
        className="h-10 w-24 rounded border-gray-400 border text-xl indent-3"
        readOnly={true}
      />

      <button
        type="button"
        className="h-10 w-10 border-gray-600 flex justify-center items-center border leading-10 text-gray-600 transition hover:opacity-75"
        onClick={() => setQuantity(quantity + 1)}
      >
        <FaPlus className="text-2xl" />
      </button>
    </>
  );
});

export default QuantityInput;
