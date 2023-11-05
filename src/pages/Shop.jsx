import React, { useEffect, useState } from "react";
import { Pagination, ProductElement, SectionTitle } from "../components";
import "../styles/Shop.css";
import axios from "axios";



const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios(`http://localhost:8080/products?_page=${currentPage}`);
        const data = response.data;
        setProducts(data);
      }catch(error){
        console.log(error.response);
      }
    }

    fetchData();
  }, [currentPage]);

  return (
   <>
      <SectionTitle title="Shop" path="Home | Shop" />
      <div className="grid grid-cols-4 px-2 max-w-7xl mx-auto gap-y-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 shop-products-grid">
        {products && products.map((product) => (
          <ProductElement
            key={product.id}
            id={product.id}
            title={product.name}
            image={product.imageUrl}
            rating={product.rating}
            price={product.price.current.value}
            brandName={product.brandName}
          />
        ))}
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
};

export default Shop;
