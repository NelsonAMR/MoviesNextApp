import { getMovies } from "@/helpers";
import { MovieCard } from "@/components";
import React from "react";

export async function Movies() {
  const movies = await getMovies();
  return (
    <div className="flex flex-wrap justify-between gap-x-5 gap-y-10 w-full">
      {movies.map((movie) => (
        <MovieCard {...movie} key={movie.id} />
      ))}
    </div>
  );
}
