import { IMovie } from "@/helpers";
import Image from "next/image";

export function MovieCard(movie: IMovie) {
  const image = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

  const date = new Date(movie.release_date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const color: string =
    movie.vote_average >= 7.5
      ? "green"
      : movie.vote_average >= 5
      ? "yellow"
      : "red";

  return (
    <div className="rounded-lg overflow-hidden shadow-md shadow-gray-300 w-[210px] h-[435px]">
      <Image
        src={image}
        alt={movie.title}
        width={0}
        height={0}
        sizes="100%"
        className="w-full h-auto object-cover"
        priority
      />
      <div className="relative mt-7 px-4">
        <span
          className={`absolute -top-12 left-3 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-solid border-4 border-${color}-600`}
        >
          {movie.vote_average * 10}
        </span>
        <h3 className="font-bold">{movie.title}</h3>
        <p className="text-gray-500 ">{date}</p>
      </div>
    </div>
  );
}
