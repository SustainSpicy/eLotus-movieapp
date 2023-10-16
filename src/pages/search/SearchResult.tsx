import { useEffect, useState } from "react";
import "./SearchResult.scss";
import { Link, useLocation } from "react-router-dom";
import { searchMovie } from "../../api";
import { Movie } from "../../constants/types";
import MovieCard from "../../components/utils/MovieCard";
import Navbar from "../../components/navbar/Navbar";

const SearchResult = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q");
  const [searchResults, setSearchResults] = useState<Movie[]>();

  useEffect(() => {
    console.log(query);
    const fetchData = async (query: string) => {
      try {
        const moviesData = await searchMovie(query);
        console.log(moviesData);

        setSearchResults(moviesData);
      } catch (error) {
        console.log(error);
      }
    };

    if (query) {
      fetchData(query);
    }
  }, [query]);
  return (
    <div className="search-movies-list_wrapper wrapper">
      <Navbar />
      <h2 className="sleek search-movie-list_title">
        Search Results for: {query}
      </h2>
      <div className="sleek search-movies-list">
        {searchResults?.map((item, index) => {
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

export default SearchResult;
