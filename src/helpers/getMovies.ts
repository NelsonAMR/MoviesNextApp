import { IMovie } from "./types";

interface IAPIResults {
  results: IMovie[];
}

export async function getMovies(sort: string) {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const key = process.env.NEXT_PUBLIC_API_KEY;

  const response = await fetch(
    `${url}/discover/movie?api_key=${key}&sort_by=${sort}.desc`
  );

  const { results }: IAPIResults = await response.json();

  return results;
}
