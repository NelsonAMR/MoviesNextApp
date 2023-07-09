import { IMovie } from "./types";

export async function getMovies(querys?: string) {
  const { API_URL, API_KEY } = process.env;
  const response = await fetch(
    `${API_URL}/discover/movie?api_key=${API_KEY}&${querys}`
  );
  const { results }: { results: IMovie[] } = await response.json();

  return results;
}
