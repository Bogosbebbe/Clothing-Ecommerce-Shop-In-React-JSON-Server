import React from "react";
import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";



const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-10 max-md:px-0">
      <nav className="grid grid-flow-col max-sm:grid-flow-row gap-4">
        <Link to="/" className="link link-hover text-2xl max-md:text-xl">Home</Link>
        <Link to="/shop" className="link link-hover text-2xl max-md:text-xl">Shop</Link>
        <Link to="/about" className="link link-hover text-2xl max-md:text-xl">About us</Link>
        <Link to="/contact" className="link link-hover text-2xl max-md:text-xl">Contact</Link>
        <Link to="/login" className="link link-hover text-2xl max-md:text-xl">Login</Link>
        <Link to="/register" className="link link-hover text-2xl max-md:text-xl">Register</Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
        <FaSquareXTwitter className="text-6xl max-sm:text-4xl" />
          <FaSquareFacebook className="text-6xl max-sm:text-4xl"  />
          <FaSquareInstagram className="text-6xl max-sm:text-4xl"  />
          <FaSquareYoutube className="text-6xl max-sm:text-4xl"  />
        </div>
      </nav>
      <aside>
        <p className="text-2xl max-sm:text-sm">Copyright © 2023 - All right reserved by Kuzma Clothing Shop</p>
      </aside>
    </footer>
  );
};

export default Footer;
