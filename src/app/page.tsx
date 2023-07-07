import { Filters, Movies } from "@/components";
import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <h2>Popular Movies</h2>
      <div className="flex gap-4">
        <Filters />
        <Movies />
      </div>
    </Fragment>
  );
}
