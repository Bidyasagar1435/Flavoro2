import React, { useState } from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData";


const FoodItems = () => {
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
   
    </>
  );
};

export default FoodItems;
