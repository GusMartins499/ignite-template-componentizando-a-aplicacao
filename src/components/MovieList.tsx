import { MovieCard } from "./MovieCard";

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface MovieArray {
  movies: Array<MovieProps>
}

import "../styles/movieList.scss";

export function MovieList({ movies }: MovieArray) {
  return (
    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            runtime={movie.Runtime}
            rating={movie.Ratings[0].Value}
          />
        ))}
      </div>
    </main>
  );
}