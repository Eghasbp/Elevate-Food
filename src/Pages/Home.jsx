import axios from "axios";
<<<<<<< HEAD
import React, { Link, useEffect, useState } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> 25ae726c98674c04e814a9523fa929e7c1d77df9
import { useNavigate } from "react-router";
import Navbar from "../component/Navbar";
import ProductionHouse from "../component/ProductionHouse";
import ShuffleHero from "../component/Shuffle";
import ShiftingCountdown from "../component/ShiftingCountdown";
import SlideInNotifications from "./SlideInNotifications";


const Home = () => {
  const [detail, setDetail] = useState([]);
  const navigate = useNavigate();
  const [search, SetSearch] = useState("");
  const [currentPage,setCurrentPage] = useState(1)

  const getDetail = () => {
    axios
      .get(`https://api.mudoapi.tech/menus?perPage=8&page=${currentPage}&name=${search} `) // buat disini untuk passing
      // https://reqres.in/api/users?per_page=6page=1
      .then((res) => {
        const data = res?.data?.data?.Data;
        setDetail(data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getDetail();
  }, [search,currentPage]);

  const handleDetail = (id) => {
    console.log(id);
    navigate(`/detail/${id}`);
  };

  // handle search buat set searchnya
  const handleChangeSearch =(e) => {
    SetSearch(e.target.value)
  }

  const handlePagination = () => {
    if(!search){

    }
  }
<<<<<<< HEAD

  const handleReference = () => {
    navigate('/reference')
  }
=======
>>>>>>> 25ae726c98674c04e814a9523fa929e7c1d77df9
     // confused
   // Handle the search and navigate to the detail page based on the search query
   const handleSearch = (searchQuery) => {
    // Perform the search and navigation logic based on the searchQuery
    // For example, you can fetch data and navigate based on the search query here
    // For now, let's navigate to a sample detail page using a placeholder ID
    
    if(searchQuery =='ketoprak'){
        navigate(`/detail/3`)
    } else if (searchQuery == 'iced coconut water'){
        navigate(`/detail/1`)
    } else if (searchQuery == 'fried rice'){
      navigate(`/detail/2`)
    } else if (searchQuery == 'satay'){
      navigate(`/detail/4`)
    }  else if (searchQuery == 'iced tea'){
      navigate(`/detail/5`)
    }  else if (searchQuery == 'tongseng belanda'){
      navigate(`/detail/6`)
    }  else if (searchQuery == 'cumi bakar'){
      navigate(`/detail/7`)
    }  else if (searchQuery == 'gudeg'){
      navigate(`/detail/8`)
    } else if (searchQuery == 'kepiting asam manis'){
      navigate(`/detail/9`)
    }  else if (searchQuery == 'fish and chips'){
      navigate(`/detail/10`)
    }  else if (searchQuery == 'red velvet'){
      navigate(`/detail/11`)
    }  else if (searchQuery == 'nasi lemak'){
      navigate(`/detail/12`)
    }  else if (searchQuery.length <= 4){
      navigate(`/`)
    }
    
    // Replace with actual logic to determine the menu item ID
   
    // navigate(`/detail/${placeholderId}`);
}

  return (
    <>
      <div className="">
      {/*  Pass the handleChangeSearch function as a prop to Navbar */}
        <Navbar search={search} handleChangeSearch={handleChangeSearch}  handleSearch={handleSearch} // Pass the handleSearch function as a prop
          searchQuery={search} />  
          {/* Pass the search query as a prop  */}
        <div className="mt-10 min-h-screen bg-cover font-sans bg-no-repeat relative z-0 bg-center ">
          <div className="mt-2 md:mt-40 flex justify-center items-center">
            <div
              className="lg:w-[700px] md:w-[400px] md:block hidden bg-contain bg-clip-content bg-origin-content bg-no-repeat h-[600px] "
              style={{
                backgroundImage: `url("/src/images/fresh-vegetables-white.jpg")`,
              }}
            ></div>
            <div className="md:p-10">
              <h2 className="font-poppins font-bold lg:text-5xl md:text-3xl text-2xl">
                Food is our common <br />
                ground, a universal <br />
                <h2 className="text-primary">experience</h2>
              </h2>
              <p className=" mt-5 font-poppins font-regular text-xs md:text-sm w-96 md:w-96 text-gray-400">
                "Discover a culinary journey like no other on our website, where
                we pride ourselves on offering the epitome of quality dining.
                Our expert chefs meticulously craft each dish with the finest
                ingredients, ensuring every bite is a symphony of flavors and
                textures."
              </p>
              <div className="flex">
                <div className="">
<<<<<<< HEAD
                  <button onClick={handleReference} className="md:mt-10 mt-5 bg-primary  hover:bg-red-600 text-white font-medium rounded-xl p-2 md:p-3 ">
=======
                  <button className="md:mt-10 mt-5 bg-primary  hover:bg-red-600 text-white font-medium rounded-xl p-2 md:p-3 ">
>>>>>>> 25ae726c98674c04e814a9523fa929e7c1d77df9
                    Get Started
                  </button>
                  <div className="flex">
                  <img className="md:hidden w-32 mt-20 mx-10" src="/src/images/fresh-vegetables-white.jpg" alt="" />
                  <img className="md:hidden w-32 mt-20 rotate-180" src="/src/images/fresh-vegetables-white.jpg" alt="" />
                  </div>
                </div >
              </div>
            </div>
          </div>

          {/* NEW STAGE */}
          <ShuffleHero/>

          {/* NEW STAGE */}
          <div className="flex justify-center items-center mt-10 md:mt-52">
            <h2 className="font-poppins font-extrabold text-4xl text-primary">
              Flash Sale!
            </h2>
          </div>
          <ShiftingCountdown />

          <div className="flex justify-center items-center">
            <h2 className="font-poppins text-sm py-10 px-10 font-light md:w-2/4 text-justify text-slate-400">
              "Introducing a freshly prepared, nutritious dish that is not only
              delicious but also promotes good health. This wholesome meal is
              thoughtfully crafted with a blend of nutritious ingredients,
              carefully selected to provide essential vitamins, minerals, and a
              balanced combination of proteins, carbohydrates, and healthy fats.
              With a focus on promoting well-being, this healthy option is sure
              to satisfy your taste buds while nourishing your body. Made from
              high-quality, selected ingredients"
            </h2>
          </div>
          <div className="md:hidden flex justify-center items-center">
              <input onChange={handleChangeSearch} value={search} className="border border-black/30 w-60 rounded-lg p-2" placeholder="Search here" type="text" />
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 lg:grid-cols-4 lg:mx-20 mx-2 grid-rows-1 gap-5">
              {detail.map((item, key) => (
                <div key={key} >
                  <div className=" py-5 group shadow-lg rounded-xl relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className=" md:h-80 md:w-96 h-40 w-auto bg-transparent border rounded-lg">
                      <img
                        className="h-full w-full rounded-lg object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                        src={item.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h4 className="text-2xl font-bold font-poppins text-white lg:mt-[-30px]  mt-30">
                        {item.name}
                      </h4>
                      <p className="my-3 text-xs font-light font-poppins italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {item.description}
                      </p>
                      <button
                        onClick={() => handleDetail(item.id)}
                        className="rounded-full font-poppins bg-primary py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/20"
                      >
                        See More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center mt-10">
            <button onClick={() => setCurrentPage(currentPage-1)} className="px-3 h-8 mr-3 text-sm font-medium text-gray-500 bg-white border border-primary rounded-lg hover:bg-gray-100 hover:text-gray-700 ">← Previous</button>
            <button onClick={() => setCurrentPage(currentPage+1)} className="px-3 h-8 mr-3 text-sm font-medium text-gray-500 bg-white border border-primary rounded-lg hover:bg-gray-100 hover:text-gray-700 ">Next →</button>
          </div>

          {/* NEW STAGE */}

          {/* NEW STAGE */}
          <div className="">
            <div className="flex justify-center md:mt-52 mt-10">
              <h1 className="font-poppins md:font-extrabold font-bold text-4xl md:text-6xl text-black underline underline-offset-4 hover:underline-offset-8">
                Media Testimonial
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <h2 className="md:w-3/5 font-poppins text-sm font-extralight text-slate-400 p-10 pt-5 md:pt-20 px-10">
                "Elevate's culinary delights have garnered widespread attention
                and acclaim across various media outlets. With a fusion of
                exquisite flavors and innovative presentations, Elevate's dishes
                have become a focal point of culinary conversations. Renowned
                publications and television programs have featured Elevate's
                culinary creations, recognizing their exceptional quality and
                artistry. As a dining destination that transcends the ordinary,
                Elevate continues to captivate audiences and set new standards
                in the culinary world, captivating both seasoned food critics
                and curious gourmands alike."
              </h2>
            </div>
            <ProductionHouse />
          </div>
          <SlideInNotifications />
        </div>
      </div>

      {/* NEW STAGE */}
      
<<<<<<< HEAD
<footer className="shadow scale-105 md:bg-gray-800 bg-white font-poppins md:mt-[100px] mt-[800px]">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="" className="flex items-center mb-4 sm:mb-0">
                <img src="/src/assets/image/E.png" className="h-8 w-10 mr-3" alt="Flowbite Logo" />
                <span className="self-center text-xl font-poppins font-medium whitespace-nowrap md:text-white text-black">levate</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gra y-400">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Elevate</a>. All Rights Reserved.</span>
=======
<footer class="shadow scale-105 md:bg-gray-800 bg-white font-poppins md:mt-[100px] mt-[800px]">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="" class="flex items-center mb-4 sm:mb-0">
                <img src="/src/assets/image/E.png" class="h-8 w-10 mr-3" alt="Flowbite Logo" />
                <span class="self-center text-xl font-poppins font-medium whitespace-nowrap md:text-white text-black">levate</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gra y-400">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Elevate</a>. All Rights Reserved.</span>
>>>>>>> 25ae726c98674c04e814a9523fa929e7c1d77df9
    </div>
</footer>


    </>
  );
};

export default Home;

{
  /* <h3>{item.first_name} {item.last_name}</h3>
                            <h3>{item.email}</h3> */
}
