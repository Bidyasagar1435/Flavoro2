import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-col lg:flex-row justify-between px-6 py-2">
      <div>
        <h3 className="text-xl text-gray-600 font-bold">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-xl text-black font-bold">FLAVORO FOOD</h1>
      </div>
      <div>
        <input
          type="search"
          name="search"
          placeholder="Search here"
          required
          className="border border-gray-400 p-3 rounded-md w-full lg:w-[25vw] mt-2"
        />
      </div>
    </nav>
  );
};

export default Navbar;
