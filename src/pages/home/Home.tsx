import React, { useEffect, useState } from "react";

import "./Home.scss";
import HeroField from "../../components/hero/HeroField";
import SliderComponent from "../../components/slider/Slider";
import { getAllMoviesByGenre, getTrendingMovies } from "../../api";
import { Movie } from "../../constants/types";
import { getRandomElementsFromArray } from "../../constants/util";
import { genres } from "../../constants";
import Skeleton from "../../components/skeleton/Skeleton";
interface MovieGenre {
  id: number;
  name: string;
  data: Movie[];
}

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [movieGenres, setMovieGenres] = useState<MovieGenre[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trendingData = await getTrendingMovies();
        setTrendingMovies(trendingData);
        const genresData = await Promise.all(
          getRandomElementsFromArray(genres).map(async (item) => {
            const moviesData = await getAllMoviesByGenre(item.id);
            return {
              id: item.id,
              name: item.name,
              data: moviesData.slice(0, 10),
            };
          })
        );
        const filteredGenres = genresData.slice(0, 3);
        setMovieGenres(filteredGenres);
        setLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };

    //to showcase the skeleton loader
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  return (
    <>
      <HeroField movie={trendingMovies[0]} />
      <div className="main wrapper ">
        <SliderComponent
          title={"Latest & Trending"}
          list={trendingMovies}
          isTrending={true}
        />
        {movieGenres.map((item) => {
          return (
            <SliderComponent
              key={item.id}
              title={item.name}
              id={item.id}
              list={item.data}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
