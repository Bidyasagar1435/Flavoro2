import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, img, name, price, desc, rating }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-white w-[250px] p-6 ml-6 rounded-md">
        <img
          src={img}
          alt=""
          className="w-[210px] h-[100px] hover:scale-110 transition-all duration-400 ease-in-out hover:cursor-grab"
        />
        <div className="flex justify-between my-2">
          <h2 className="text-black font-2xl font-semibold">{name}</h2>
          <span className="text-green-500 font-bold text-xl">₹{price}</span>
        </div>
        <div className="">
          <p className="text-sm text-gray-500 font-semibold mb-2">
            {desc.slice(0, 50)}...
          </p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400 text-xl" />
            <span className="text-md text-black font-bold">{rating}</span>
          </div>
          <button
            onClick={() => {
              dispatch(addToCart({ id, name, img, price, rating, qty: 1 }));
            }}
            className="bg-green-500 text-white font-bold px-2 py-1 rounded-md text-center hover:bg-green-600 hover:cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
