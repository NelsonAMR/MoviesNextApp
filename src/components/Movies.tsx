import { getMovies } from "@/helpers";
import { MovieCard } from "@/components";
import React from "react";

export async function Movies() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard {...movie} key={movie.id} />
      ))}
    </div>
  );
}
