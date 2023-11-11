import React, { useState } from "react";
import FormInput from "./FormInput";
import { Form, Link } from "react-router-dom";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";
import FormSelect from "./FormSelect";
import FormDatePicker from "./FormDatePicker";

const Filters = () => {
    const [ selectList, setSelectList ] = useState(["item1", "item2", "item3"]);
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue="Search here"
      />
      {/* CATEGORIES */}
      <FormSelect
        label="select category"
        name="category"
        list={selectList}
        size="select-sm"
        defaultValue="item1"
      />
      {/* COMPANIES */}
      <FormSelect
        label="select company"
        name="company"
        list={selectList}
        size="select-sm"
        defaultValue="item1"
      />
      {/* ORDER */}
      <FormSelect
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue="a-z"
      />
      {/* SIZES */}
      <FormSelect
        label="Select size"
        name="size"
        list={["XS", "S", "M", "L","XL",36,37,38,39,40,41,42,43,44,45,46,47]}
        size="select-sm"
        defaultValue="XS"
      />
      {/* Producer */}
      <FormSelect
        label="Select producer"
        name="producer"
        list={["Nike", "Adidas", "Puma", "Reebok"]}
        size="select-sm"
        defaultValue="Nike"
      />
      {/* PRICE */}
      <FormRange
        name="price"
        label="select price"
        size="range-sm"
        price={2000}
      />
      {/* Date Picker */}
      <FormDatePicker label="select minimum production date" name="date" />
      {/* BUTTONS */}
      <button type="submit" className="btn bg-blue-600 hover:bg-blue-500 text-white btn-sm">
        search
      </button>
      <Link to="/products" className="btn btn-primary btn-sm">
        reset
      </Link>
    </Form>
  );
};

export default Filters;
