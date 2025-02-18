import { trendingRecipesData } from "@/app/constants/data";
import React from "react";
import { IoStar } from "react-icons/io5";

export default function TrendingRecipes() {
  return (
    <div className="bg-white py-8 px-12 space-y-16 rounded-xl">
      <div className="text-4xl font-semibold">
        Trending Recipes
      </div>
      <div className="h-[400px] flex flex-col justify-between space-y-2">
        <div className="grid grid-cols-4 px-3 font-semibold">
          <p>Name</p>
          <p>Ratings</p>
          <p>Reviews</p>
          <p>Shares</p>
        </div>
        {trendingRecipesData?.map((item) => (
          <div key={item.id} className="grid grid-cols-4 items-center border-2 rounded-3xl p-6">
            <div >{item.name}</div>
            <div className="flex items-center gap-2">
              <span>
              {item.Ratings}
              </span>
              <span>
                <IoStar />
              </span>
            </div>
            <div>{item.Reviews}</div>
            <div>{item.Shares}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
