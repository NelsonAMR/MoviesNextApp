"use client";

import { useState } from "react";
import { MoviesContext } from "./MoviesContext";

interface IMoviesProviderProps {
  children: React.ReactNode;
}

const MoviesProvider = ({ children }: IMoviesProviderProps) => {
  const [sortType, setSortType] = useState("popularity");
  const [movieName, setMovieName] = useState("");

  return (
    <MoviesContext.Provider
      value={{ sortType, setSortType, movieName, setMovieName }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
