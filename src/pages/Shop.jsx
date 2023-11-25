import React, { useEffect, useState } from "react";
import {
  Filters,
  Pagination,
  ProductElement,
  SectionTitle,
} from "../components";
import "../styles/Shop.css";
import axios from "axios";
import { useLoaderData, useNavigate, useSearchParams } from "react-router-dom";
import { nanoid } from "nanoid";

export const shopLoader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  // /posts?title=json-server&author=typicode
  // GET /posts?_sort=views&_order=asc
  // GET /posts/1/comments?_sort=votes&_order=asc

  let mydate = Date.parse(params.date);
  
  if (mydate && !isNaN(mydate)) {
    // The date is valid
    mydate = new Date(mydate).toISOString();
  } else {
    mydate = "";
  }

  const filterObj = {
    brand: params.brand ?? "all",
    category: params.category ?? "all",
    date:  mydate || new Date('05 October 2010 14:48 UTC').toISOString(), 
    gender: params.gender ?? "all",
    order: params.order ?? "asc",
    price: params.price ?? 2000,
    search: params.search ?? "",
    in_stock: params.stock === undefined ? false : true,
    current_page: Number(params.page) || 1
  };



  // izbacio sam iz URL-a trenutno gte_date=filterObj.date i takodje trenutno iz filterObj-a

  try {
    const response = await axios(
      `http://localhost:8080/products?${
        filterObj.brand === "all" ? "" : `brandName=${params.brand}`
      }&${filterObj.category === "all" ? "" : `category=${params.category}`}&${
        filterObj.gender === "all" ? "" : `gender=${params.gender}`
      }&${
        filterObj.order === "asc" || filterObj.order === "desc"
          ? `_sort=name&_order=${filterObj.order}`
          : filterObj.order === "price low"
          ? `_sort=price.current.value&_order=asc`
          : `_sort=price.current.value&_order=desc`
      }&${filterObj.search && `q=${filterObj.search}`}&${
        filterObj.price && `price.current.value_lte=${filterObj.price}`
      }&${filterObj.in_stock === true && `isInStock=${filterObj.in_stock}`}&${`_page=${filterObj.current_page}&_limit=10&productionDate_gte=${filterObj.date}`}`
    );
    const data = response.data;
    return {productsData: data, productsLength: data.length, page: filterObj.current_page};
  } catch (error) {
    console.log(error.response);
  }
  // /posts?views_gte=10

  return null;
};




const Shop = () => {

  const productLoaderData = useLoaderData();


  return (
    <>
      <SectionTitle title="Shop" path="Home | Shop" />
      <div className="max-w-7xl mx-auto mt-5">
        <Filters />
        { productLoaderData.productsData.length === 0 && <h2 className="text-accent-content text-center text-4xl my-10">No products found for this filter</h2> }
        <div className="grid grid-cols-4 px-2 gap-y-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 shop-products-grid">
          {productLoaderData.productsData.length !== 0 &&
            productLoaderData.productsData.map((product) => (
              <ProductElement
                key={nanoid()}
                id={product.id}
                title={product.name}
                image={product.imageUrl}
                rating={product.rating}
                price={product.price.current.value}
                brandName={product.brandName}
              />
            ))}
        </div>
      </div>

      <Pagination />
    </>
  );
};

export default Shop;
