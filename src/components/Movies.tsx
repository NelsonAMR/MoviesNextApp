"use client";

import { IMovie, getMovies } from "@/helpers";
import { MovieCard } from "@/components";
import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "@/context/MoviesContext";

export function Movies() {
  const { sortType } = useContext(MoviesContext);
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    getMovies(sortType).then((data) => setMovies(data));
  }, [sortType]);

  console.log(sortType);
  return (
    <div className="flex flex-wrap justify-between gap-x-5 gap-y-10 w-full">
      {movies.map((movie) => (
        <MovieCard {...movie} key={movie.id} />
      ))}
    </div>
  );
}
