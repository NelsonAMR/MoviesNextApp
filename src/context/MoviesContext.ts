import { createContext } from "react";

interface IMoviesContext {
  sortType: string;
  movieName: string;
  setSortType: (movies: string) => void;
  setMovieName: (movies: string) => void;
}

export const MoviesContext = createContext({} as IMoviesContext);
