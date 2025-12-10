import React from "react";
import { MdDelete } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa6";

const ItemCard = () => {
  return (
    <>
      <div className="flex justify-between items-center mt-6 shadow-md p-2 rounded-md">
        <div className="">
          <img
            src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
            alt=""
            className="w-[50px] h-[50px]"
          />
        </div>
        <div className=" w-[70%] ">
          <div className="flex justify-between items-center">
            <h2>Onion Pizza</h2>
            <MdDelete />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-green-500 font-bold text-xl">₹190</span>
            <div className="flex justify-evenly items-center gap-2">
              <FaMinus className="border p-1 text-xl rounded-md"/>
              <span>2</span>
              <FiPlus className="border p-1 text-xl rounded-md"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
