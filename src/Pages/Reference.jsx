import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";

const Reference = () => {
  const [menus, setMenus] = useState([]); // Define menus state variable here

  const getMenus = () => {
    axios
      .get(`https://api.mudoapi.tech/menus?perPage=12`)
      .then((res) => {
        const data = res?.data?.data?.Data;
        setMenus(data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getMenus();
  }, []);

  return (
    <>
      <Navbar />
      <section className="bg-white font-poppins ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl my-5">
              Welcome to Our World of{" "}
              <label className="text-primary">Flavors</label>{" "}
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-lg ">
              'Welcome to Our World of Flavors,' encapsulates our commitment to
              providing a diverse and exciting culinary experience. At our
              restaurant, we invite you to embark on a flavorful journey where
              each dish tells a unique story. Explore the vibrant and diverse
              tastes that make up our world of flavors, and let your taste buds
              travel to new and exciting destinations with every bite. We take
              pride in offering a rich and unforgettable dining adventure that
              celebrates the art of food and the joy it brings to all who join
              us."
            </p>
            
            <a
              href="#"
              className="inline-flex bg-primary items-center justify-center px-5 py-3 text-base font-semibold text-center text-white border border-gray-300 rounded-lg hover:bg-red-600 focus:ring-4 focus:ring-gray-100 "
            >
              Get the food
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://img.freepik.com/free-photo/delicious-food-black-board_144627-34729.jpg?w=1380&t=st=1694332949~exp=1694333549~hmac=beb92ad1231ed8e39dfe2d9ba6af385c19c1251059495d8376034ff67384452f"
              alt="mockup"
            />
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:mx-20 mx-2 grid-rows-1 gap-5">
      {menus.map((item, key) => (
        <div className="w-screen max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
          <a href="#">
            <img
              className="p-8 w-96 h-60 rounded-t-lg"
              src={item.imageUrl}
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
              <h5 className="text-md h-40 font-normal tracking-tight text-gray-500 ">
                {item.description}
              </h5>
            <div className="flex items-center mt-2.5 mb-5">
              <svg
                className="w-4 h-4 text-yellow-300 mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                5.0
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${item.price}
              </span>
              <a
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      ))} 
      </div>
      </div>
    </>
  );
};

export default Reference;
