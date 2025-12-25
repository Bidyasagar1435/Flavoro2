import React from "react";
import { MdDelete } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa6";
import { removeFromCart } from "../redux/slices/CartSlice";
import { useDispatch } from "react-redux";

const ItemCard = ({ id, name, price, img, qty }) => {
  const dispatch = useDispatch()
  return (
    <>
      <div className="flex justify-between items-center mt-6 shadow-md p-2 rounded-md">
        <div className="">
          <img
            src={img}
            alt=""
            className="w-[50px] h-[50px]"
          />
        </div>
        <div className=" w-[70%] ">
          <div className="flex justify-between items-center">
            <h2>{name}</h2>
            <MdDelete onClick={()=>dispatch(removeFromCart({ id, name, price, qty }))}/>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-green-500 font-bold text-xl">₹{price}</span>
            <div className="flex justify-evenly items-center gap-2">
              <FaMinus className="border p-1 text-xl rounded-md"/>
              <span>{qty}</span>
              <FiPlus className="border p-1 text-xl rounded-md"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
