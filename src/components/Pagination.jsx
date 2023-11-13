import React, { useState } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const Pagination = () => {

  
  const productsLoaderData = useLoaderData();
  const [ page, setPage ] = useState(productsLoaderData.page);
  
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    setPage((prevState) => pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <>
    <div className="pagination flex justify-center mt-10">
      <div className="join">
        <button
          className="join-item btn text-4xl flex justify-center"
          onClick={() => {
            
            if(page === 1){
              return;
            }
            handlePageChange(page - 1)
            window.scrollTo(0, 0)
          
          }}
        >
          <FaCircleArrowLeft />
        </button>
        <button className="join-item btn text-2xl">Page {page}</button>
        <button
          className="join-item btn text-4xl flex justify-center"
          onClick={() => {

            if(productsLoaderData.productsLength < 10){
              return;
            }

            handlePageChange(page + 1)
            window.scrollTo(0, 0)
          }
          }
        >
          <FaCircleArrowRight />
        </button>
      </div>
    </div>
    </>

  );
};

export default Pagination;
