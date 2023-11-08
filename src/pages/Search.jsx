import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductElement, SearchPagination, SectionTitle } from "../components";
import { nanoid } from "nanoid";

const Search = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // na klik dugmeta paginacije zelim da pozovem handleSearch
  // ali problem je sto kada se klikne paginacija event vise ne postoji
  // onda ce mi trebati nova funkcija da bih fetchovao rezultate i pozivao current page
  // naravno trebacu da sacuvam vrednost search Terma 
  // POSTOJI PROBLEM SA SEARCH PAGINACIJOM
  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchTerm(e.target.search.value);
    try {
      const response = await axios(
        `http://localhost:8080/products?q=${e.target.search.value}&&_page=${currentPage}`
      );
      const data = response.data;
      setProducts(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleSearchPagination = async () => {
    try {
        const response = await axios(
          `http://localhost:8080/products?q=${searchTerm}&&_page=${currentPage}`
        );
        const data = response.data;
        setProducts(data);
      } catch (error) {
        console.log(error.response);
      }
  }

  return (
    <>
      <SectionTitle title="Search" path="Home | Search" />
      <form
        className="form-control max-w-7xl mx-auto py-10"
        onSubmit={handleSearch}
      >
        <div className="input-group">
          <input
            type="text"
            placeholder="Search here…"
            className="input input-bordered input-lg w-full outline-0 focus:outline-0"
            name="search"
          />
          <button
            type="submit"
            className="btn btn-square btn-lg bg-blue-600 hover:bg-blue-500 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>
      <div className="grid grid-cols-4 px-2 max-w-7xl mx-auto gap-y-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 shop-products-grid">
        {products &&
          products.map((product) => (
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
      <SearchPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        products={products}
        handleSearchPagination={handleSearchPagination}
      />
    </>
  );
};

export default Search;
