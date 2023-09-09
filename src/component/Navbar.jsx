import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Navbar({search ,handleChangeSearch, handleSearch,searchQuery}) { //passing the params 
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleSearchClick = () => {
    handleSearch(searchQuery)
  }

  return (
    <div className="py-3 px-2 sticky top-0 z-50 bg-white">
      <div className="container mx-auto">
        <div className="flex md:justify-between justify-around">
          <div className="flex items-center font-bold">
            <Link to={"/"}>
              <div className="flex items-center">
                <img className="w-8 " src="/src/assets/image/E.png" alt="" />
                <h2 className="font-mono md:block hidden">levate</h2>
              </div>
            </Link>
          </div>

          <div className="flex relative justify-center items-center">
            <input
              onChange={handleChangeSearch}  // Use handleChangeSearch to update search query
              value={search} // Bind the input value to the search state
              type="text"
              id="floating_outlined"
              className="md:w-72 hidden md:block w-32 h-10 px-2.5 pb-2.5 pt-4 text-sm text-gray-600 bg-transparent border rounded-tl-lg rounded-bl-lg border-1 border-red-500 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
            />
            <label
              for="floating_outlined"
              className="hidden md:block absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-transparent px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              <img className="w-6" src="/src/images/icons8-search.gif" alt="" />
            </label>
            <button onClick={handleSearchClick}  value={searchQuery} className=" md:block hidden px-5 border p-2 bg-primary hover:bg-red-600 font-medium text-white md:rounded-none rounded-md md:rounded-tr-md md:rounded-br-md md:mr-5  ">
              Search
            </button>
            <img
              className="w-4 md:w-4 mx-3"
              src="https://img.icons8.com/?size=512&id=89278&format=png"
              alt=""
            />
            <h2
              onClick={handleLogout}
              className="ml-2 cursor-pointer text-xs md:text-xs text-gray-500 font-semibold font-poppins"
            >
              Log.out
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
