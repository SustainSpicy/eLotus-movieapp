import React, { useEffect, useState } from "react";

import "./Home.scss";
import HeroField from "../../components/hero/HeroField";
import SliderComponent from "../../components/slider/Slider";
import { getAllComedyMovies, getTrendingMovies } from "../../api";
import { Movie } from "../../constants/types";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [comedyMovies, setComedyMovies] = useState<Movie[]>([]);
  useEffect(() => {
    getTrendingMovies()
      .then((data) => {
        setTrendingMovies(data);
      })
      .catch((error) => {
        console.log(error);
      });
    getAllComedyMovies()
      .then((data) => {
        setComedyMovies(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <HeroField movie={trendingMovies[0]} />
      <div className="main wrapper">
        {/* <SliderComponent
          title={"Latest & Trending"}
          list={trendingMovies}
          isTrending={true}
        /> */}

        {/* <SliderComponent title={"Comedy"} list={comedyMovies} /> */}
        {/* <SliderComponent title={"Animation"} list={trendingMovies} /> */}
      </div>
    </>
  );
};

export default Home;
