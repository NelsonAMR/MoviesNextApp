import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export function SearchBar() {
  return (
    <div className="flex items-center w-full max-w-lg rounded overflow-hidden">
      <input
        type="text"
        className="p-1 pl-2 outline-none w-full"
        placeholder="Search a movie..."
      />
      <button className="bg-secondary text-white min-h-full p-1 hover:bg-secondary-dark transition-colors">
        <AiOutlineSearch className="text-2xl" />
      </button>
    </div>
  );
}
