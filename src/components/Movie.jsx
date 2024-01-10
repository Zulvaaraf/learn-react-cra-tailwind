import { useEffect, useState } from 'react';
import { getMovie } from '../api/apimovie';

export default function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovie().then((result) => {
      setMovies(result);
    });
  }, []);

  return (
    <>
      {movies.map((movie) => {
        return (
          <a href="/" key={movie.id} className="flex flex-col w-32 m-[10px] lg:w-56 items-center">
            <img className="w-full h-auto rounded-md mb-3" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt={movie.title} />
            <div>
              <h2 className="text-slate-300 text-sm overflow-hidden">{movie.title}</h2>
            </div>
          </a>
        );
      })}
    </>
  );
}
