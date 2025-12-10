import React from "react";

const CatagoryMenu = () => {
  return (
    <>
      <div className="ml-6 mt-10">
        <h3 className="font-semibold text-black text-xl">Find The Best Food</h3>
        <div className="my-3 flex gap-4 overflow-scroll lg:overflow-x-hidden lg:overflow-y-hidden scroll-smooth">
          <button className="px-3 py-2 font-bold text-md hover:bg-green-500 hover:text-white rounded-lg bg-gray-200">
            All
          </button>
          <button className="px-3 py-2 font-bold text-md hover:bg-green-500 hover:text-white rounded-lg bg-gray-200">
            Snacks
          </button>
          <button className="px-3 py-2 font-bold text-md hover:bg-green-500 hover:text-white rounded-lg bg-gray-200">
            Breakfast
          </button>
          <button className="px-3 py-2 font-bold text-md hover:bg-green-500 hover:text-white rounded-lg bg-gray-200">
            Lunch
          </button>
          <button className="px-3 py-2 font-bold text-md hover:bg-green-500 hover:text-white rounded-lg bg-gray-200">
            Dinner
          </button>
        </div>
      </div>
    </>
  );
};

export default CatagoryMenu;
