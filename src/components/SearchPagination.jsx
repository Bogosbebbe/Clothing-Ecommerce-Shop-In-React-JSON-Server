import React from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

const SearchPagination = ({ currentPage, setCurrentPage, products, handleSearchPagination }) => {
  return (
    <>
      <div className="pagination flex justify-center mt-10">
        <div className="join">
          <button
            className="join-item btn text-4xl flex justify-center"
            onClick={() => {
              if (currentPage === 1) {
                return;
              }
              setCurrentPage(currentPage - 1);
              handleSearchPagination();
              window.scrollTo(0, 0);
            }}
          >
            <FaCircleArrowLeft />
          </button>
          <button className="join-item btn text-2xl">Page {currentPage}</button>
          <button
            className="join-item btn text-4xl flex justify-center"
            onClick={() => {
              if (products.length < 10) {
                return;
              }

              setCurrentPage(currentPage + 1);
              handleSearchPagination();
              window.scrollTo(0, 0);
            }}
          >
            <FaCircleArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchPagination;
