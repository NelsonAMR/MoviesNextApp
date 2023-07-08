import React from "react";

export function Sorter() {
  return (
    <div className="w-full min-h-14 shadow-md flex flex-col rounded p-3 cursor-pointer">
      <div className="flex items-center justify-between w-full">
        <h3 className="font-bold">Sort</h3>
        <p className="font-bold text-sm">&#10095;</p>
      </div>
      <div className="border-t-2 border-solid border-gray-300 mt-4 pt-3">
        <div className="flex items-center gap-2 mt-1 ">
          <input type="radio" name="sort" id="upcoming" />
          <label htmlFor="upcoming" className="text-gray-600">
            Upcoming
          </label>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <input type="radio" name="sort" id="popular" />
          <label htmlFor="popular" className="text-gray-600">
            Popular
          </label>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <input type="radio" name="sort" id="top-rated" />
          <label htmlFor="top-rated" className="text-gray-600">
            Top Rated
          </label>
        </div>
      </div>
    </div>
  );
}
