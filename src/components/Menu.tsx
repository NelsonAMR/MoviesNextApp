import React from "react";
import { Filters, Sorter } from ".";

export function Menu() {
  return (
    <div className="w-[300px] flex flex-col gap-3">
      <Sorter />
      <Filters />
    </div>
  );
}
