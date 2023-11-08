import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHeadphones } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa6";
import { AiFillShopping } from "react-icons/ai";

import "../styles/Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const { amount } = useSelector((state) => state.cart);
  const { total } = useSelector((state) => state.cart);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ id, setId ] = useState(sessionStorage.getItem("id"));
  
  const loginState = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    setIsLoggedIn(loginState);
  }, [loginState]);

  return (
    <>
      <div className="topbar border-b border-gray-800">
        <ul>
          <li>
            <FaHeadphones className="text-2xl max-sm:text-lg" />
            <span className="text-2xl max-sm:text-lg">+381 61/123-456</span>
          </li>
          <li>
            <FaRegEnvelope className="text-2xl max-sm:text-lg" />{" "}
            <span className="text-2xl max-sm:text-lg">support@test.com</span>
          </li>
        </ul>
      </div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-2xl font-black"
          >
            <AiFillShopping />
            Kuzma Clothing Shop
          </Link>
        </div>
        <div className="flex-none">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          <Link to="/wishlist" className="btn btn-ghost btn-circle">
            <FaHeart className="text-xl" />
          </Link>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{amount} Items</span>
                <span className="text-info">Subtotal: ${total.toFixed(2)}</span>
                <div className="card-actions">
                  <Link
                    to="/cart"
                    className="btn bg-blue-600 btn-block text-white hover:bg-blue-500"
                  >
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/src/assets/user profile photo.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/user-profile" className="justify-between">Profile</Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="navbar-bottom-menu border-y border-gray-800">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="btn drawer-button">
              <HiMiniBars3BottomLeft className="text-4xl" />
            </label>
          </div>
          <div className="drawer-side z-10">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content mt-4">
              {/* Sidebar content here */}
              <li className="text-xl">
                <NavLink className="hover:text-gray-100" to="/">
                  Home
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink className="hover:text-gray-100" to="/shop">
                  Shop
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink className="hover:text-gray-100" to="/about-us">
                  About us
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink className="hover:text-gray-100" to="/contact">
                  Contact
                </NavLink>
              </li>
              {!isLoggedIn ? (
                <>
                  <li className="text-xl">
                    <NavLink className="hover:text-gray-100" to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li className="text-xl">
                    <NavLink className="hover:text-gray-100" to="/register">
                      Register
                    </NavLink>
                  </li>
                </>
              ) : (
                <li className="text-xl">
                  <NavLink className="hover:text-gray-100" to="/login">
                    Logout
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="container text-2xl navlinks-container">
          <NavLink className="hover:text-gray-100" to="/">
            Home
          </NavLink>
          <NavLink className="hover:text-gray-100" to="/shop">
            Shop
          </NavLink>
          <NavLink className="hover:text-gray-100" to="/about-us">
            About us
          </NavLink>
          <NavLink className="hover:text-gray-100" to="/contact">
            Contact
          </NavLink>
          {!isLoggedIn ? (
            <>
            <NavLink className="hover:text-gray-100" to="/login">
            Login
          </NavLink>
          <NavLink className="hover:text-gray-100" to="/register">
            Register
          </NavLink>
            </>
          ) : (<NavLink className="hover:text-gray-100" to="/login">
          Logout
        </NavLink>)}
          
        </div>
      </div>
    </>
  );
};

export default Header;
