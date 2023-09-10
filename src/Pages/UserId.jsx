import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../component/Navbar";

const UserId = () => {
  const param = useParams();
  const [menu, setMenu] = useState({});

  console.log(param.id);

  const getMenu = () => {
    axios
      .get(`https://api.mudoapi.tech/menu/${param?.userId}`)
      .then((res) => {
        console.log(res);
        setMenu(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center mt-20 w-screen p-14 ">
        <div className="grid grid-cols-2 ">
          <div>
            <img
              className="md:w-3/4 h-[550px] ml-24 rounded-full hover:scale-105 shadow-2xl "
              src={menu?.imageUrl}
            />
          </div>
          <div className="">
            <h2>{param.UserId}</h2>
            <h2 className="text-6xl font-poppins font-bold text-justify text-primary">
              {menu?.name}
            </h2>
            <h2 className="font-poppins mt-12 w-4/5">"{menu?.description}"</h2>
            <h2 className="mt-20 font-poppins text-slate-400 w-4/5">
              Elevate takes immense pride in its products, and there are several
              key details that set our offerings apart. First and foremost is
              our commitment to using premium ingredients. We meticulously
              source only the finest, locally-sourced, and globally-inspired
              ingredients. From organic produce to sustainably-sourced seafood
              and ethically-raised meats, we spare no effort to ensure the
              quality of our ingredients is exceptional. What truly
              distinguishes Elevate is the exquisite culinary artistry that goes
              into every dish. Our culinary team consists of world-class chefs
              who infuse creativity and passion into every creation. They not
              only prepare dishes that tantalize the taste buds but also
              transform each plate into a work of art. The presentation of our
              dishes is a testament to their dedication to elevating the dining
              experience to a visual and gastronomic delight. Furthermore, our
              menu offers a diverse selection of dishes, catering to a wide
              range of tastes and dietary preferences. Whether you're a fan of
              contemporary fusion cuisine that blends global flavors or you
              prefer the comfort of classic dishes prepared with a modern twist,
              Elevate has something to offer every palate. This commitment to
              variety ensures that our patrons can always expect a memorable and
              satisfying dining experience with us.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserId;
