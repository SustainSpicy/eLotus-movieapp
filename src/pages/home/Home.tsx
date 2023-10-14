import React from "react";

import "./Home.scss";
import HeroField from "../../components/hero/HeroField";
import SliderComponent from "../../components/slider/Slider";

const Home = () => {
  return (
    <>
      <HeroField />
      <div className="main wrapper">
        <SliderComponent
          title={"Latest & Trending"}
          list={["1", "2", "3", "4", "5", "6", "7", "8"]}
          isTrending={true}
        />

        <SliderComponent
          title={"Action"}
          list={["1", "2", "3", "6", "7", "8"]}
        />
        <SliderComponent title={"Comedy"} list={["4", "8"]} />
      </div>
    </>
  );
};

export default Home;
