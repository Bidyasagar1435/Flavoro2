import React, { useState } from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData";
import { IoMdCart } from "react-icons/io";


const FoodItems = () => {
  // const [activeCart, setActiveCart] = useState(false)
  return (
    <>
    <div className="flex justify-center lg:justify-start  flex-wrap gap-4 mt-6">
      {FoodData.map((food) => (
        <FoodCard
          key={food.id}
          id={food.id}
          img={food.img}
          name={food.name}
          price={food.price}
          desc={food.desc}
          rating={food.rating}
        />
      ))}

      
    </div>
    <div className="p-3 bg-gray-200 rounded-full fixed bottom-1 right-4">
        <IoMdCart onClick={(()=>setCart(!setActiveCart))} className="text-3xl"/>

      </div>
    </>
  );
};

export default FoodItems;
