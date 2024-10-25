import React from "react";
import logo from "../assets/images/logo.svg";
// time taken 16M : 23sec
const Header = () => {
  return (
    <div className="flex justify-between">
      <img src={logo} alt="logo" className="mr-5" />
      <ul className="flex space-x-8">
        <li className="text-gray-500 hover:text-red-400">
          <h1>Home</h1>
        </li>
        <li className="text-gray-500 hover:text-red-400">
          <h1>New</h1>
        </li>
        <li className="text-gray-500 hover:text-red-400">
          <h1>Popular</h1>
        </li>
        <li className="text-gray-500 hover:text-red-400">
          <h1>Trending</h1>
        </li>
        <li className="text-gray-500 hover:text-red-400">
          <h1>Categories</h1>
        </li>
      </ul>
    </div>
  );
};

export default Header;
