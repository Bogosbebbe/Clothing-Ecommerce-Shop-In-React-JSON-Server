import React from "react";
import "../styles/Landing.css";
import { Hero, ProductElement, Stats } from "../components";
import { useLoaderData } from "react-router-dom";
import axios from "axios";


export const landingLoader = async () => {
  
    const response = await axios(`http://localhost:8080/products?_page=1&_limit=8`);
    const data = response.data;
    
    
    return { products: data };
  
};

const Landing = () => {
  const { products } = useLoaderData();
  return (
    <main>
      <Hero />
      <Stats />

      <div className="selected-products">
        <h2 className="text-6xl text-center my-12 max-md:text-4xl">
          Trending Products
        </h2>
        <div className="selected-products-grid max-w-7xl mx-auto">
          {products.map((product) => (
            <ProductElement
              key={product.id}
              id={product.id}
              title={product.name}
              image={product.imageUrl}
              rating={product.rating}
              price={product.price.current.value}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Landing;
