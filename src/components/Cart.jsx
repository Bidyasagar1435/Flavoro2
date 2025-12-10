import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import ItemCard from "./ItemCard";

const Cart = () => {
  //  const [activeCart, setActiveCart] = useState(true)
 
  return (
    <>
      <div className="fixed right-0 top-0 w-full h-full lg:w-[20vw] bg-white px-6">
        <div className="flex justify-between items-center mt-5">
          <h2 className="text-2xl text-black font-bold">My Order</h2>
          <MdCancel onClick={(()=>setActiveCart(!activeCart))} className="border p-1 text-xl rounded-md hover:text-red-500 hover:cursor-pointer" />
        </div>
        <h2 className="text-center text-black font-bold text-xl mt-2">
          Your Cart is Empty
        </h2>
        <ItemCard />
        <ItemCard />

        <div className="absolute bottom-4 ">
          <h2 className="text-xl font-bold text-gray-700">Items: 0</h2>
          <h2 className="text-xl font-bold text-gray-700">Total Amount: 0</h2>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button className="w-[90vw] lg:w-[18vw] px-3 py-2 bg-green-500 my-2 text-black font-bold text-xl rounded-md hover:text-white hover:bg-green-600">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
