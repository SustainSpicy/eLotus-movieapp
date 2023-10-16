import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllMoviesByGenre } from "../../api";
import { Movie } from "../../constants/types";
import MovieCard from "../../components/utils/MovieCard";
import "./Movies.scss";
import Navbar from "../../components/navbar/Navbar";
import { useAlertContext } from "../../provider/alert";

const Movies = () => {
  const { id, genre } = useParams();
  const [movies, setMovies] = useState<Movie[]>();
  const [viewMode, setViewMode] = useState("grid");
  const [openAlertBar] = useAlertContext();

  useEffect(() => {
    const fetchData = async (id: number) => {
      try {
        const moviesData = await getAllMoviesByGenre(id);

        setMovies(moviesData);
      } catch (error: any) {
        openAlertBar({
          type: "error",
          msg: error.message || "An error occurred",
        });
      }
    };
    if (id) fetchData(parseInt(id));
  }, []);

  return (
    <div className="movies-list_wrapper wrapper">
      <Navbar />
      <h1 className="sleek movie-list_title">{genre}</h1>
      <div className="segmented-control">
        <button
          className={viewMode === "grid" ? "active" : ""}
          onClick={() => setViewMode("grid")}
        >
          Grid View
        </button>
        <button
          className={viewMode === "list" ? "active" : ""}
          onClick={() => setViewMode("list")}
        >
          List View
        </button>
      </div>
      <div className={`sleek movies-list ${viewMode}`}>
        {viewMode === "grid"
          ? movies?.map((item, index) => {
              return (
                <Link key={index} to={`/movie/${item.id}/details`}>
                  <MovieCard
                    index={index}
                    imgPath={`${process.env.REACT_APP_IMG_PATH}${item.poster_path}`}
                  />
                </Link>
              );
            })
          : movies?.map((item, index) => {
              return (
                <Link key={index} to={`/movie/${item.id}/details`}>
                  <div className="movie-list_column">
                    <span>
                      {index + 1}| Title: {item.title}
                    </span>

                    <span>Release date:{item.release_date}</span>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default Movies;
