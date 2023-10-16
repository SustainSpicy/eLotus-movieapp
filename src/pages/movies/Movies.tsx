import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllMoviesByGenre } from "../../api";
import { Movie } from "../../constants/types";
import MovieCard from "../../components/utils/MovieCard";
import "./Movies.scss";
import Navbar from "../../components/navbar/Navbar";

const Movies = () => {
  const { id, genre } = useParams();
  const [movies, setMovies] = useState<Movie[]>();

  useEffect(() => {
    const fetchData = async (id: number) => {
      try {
        const moviesData = await getAllMoviesByGenre(id);

        setMovies(moviesData);
      } catch (error) {
        console.log(error);
      }
    };
    if (id) fetchData(parseInt(id));
  }, []);

  return (
    <div className="movies-list_wrapper wrapper">
      <Navbar />
      <h1 className="sleek movie-list_title">{genre}</h1>
      <div className="sleek movies-list">
        {movies?.map((item, index) => {
          return (
            <Link key={index} to={`/movie/${item.id}/details`}>
              <MovieCard
                index={index}
                imgPath={`${process.env.REACT_APP_IMG_PATH}${item.poster_path}`}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
