import { getMovies } from "@/helpers";
import { MovieCard } from "@/components";

export async function Movies(props: any) {
  // const parsedUrl = queryString.parseUrl(params);
  // const searchParams = parsedUrl.query;
  console.log(props);

  const movies = await getMovies();
  return (
    <div className="flex flex-wrap justify-between gap-x-5 gap-y-10 w-full">
      {movies.map((movie) => (
        <MovieCard {...movie} key={movie.id} />
      ))}
    </div>
  );
}
