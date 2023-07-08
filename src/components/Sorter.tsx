"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

export function Sorter() {
  const [sort, setSort] = useState("popularity");
  const searchParams = useSearchParams();

  const handleSort = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSort(e.target.id);
    console.log(sort);
    console.log(searchParams);
  };

  return (
    <div className="w-full min-h-14 shadow-md flex flex-col rounded p-3 cursor-pointer">
      <div className="flex items-center justify-between w-full">
        <h3 className="font-bold">Sort</h3>
        <p className="font-bold text-sm">&#10095;</p>
      </div>
      <div className="border-t-2 border-solid border-gray-300 mt-4 pt-3">
        <div className="flex items-center gap-2 mt-1 ">
          <input
            type="radio"
            name="sort"
            id="primary_release_date"
            checked={sort === "primary_release_date"}
            onChange={handleSort}
          />
          <label htmlFor="primary_release_date" className="text-gray-600">
            Upcoming
          </label>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <input
            type="radio"
            name="sort"
            id="popularity"
            checked={sort === "popularity"}
            onChange={handleSort}
          />
          <label htmlFor="popularity" className="text-gray-600">
            Popular
          </label>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <input
            type="radio"
            name="sort"
            id="vote_average"
            checked={sort === "vote_average"}
            onChange={handleSort}
          />
          <label htmlFor="vote_average" className="text-gray-600">
            Top Rated
          </label>
        </div>
      </div>
    </div>
  );
}
