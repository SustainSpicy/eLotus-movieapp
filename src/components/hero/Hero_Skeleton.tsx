import Navbar from "../navbar/Navbar";
import Skeleton from "../skeleton/Skeleton";
import "./HeroField.scss";

const Hero_Skeleton = () => {
  return (
    <div className="hero wrapper">
      <Navbar />
      <Skeleton type="overlay" />

      <div className="hero-detail_wrapper ">
        <Skeleton type="title" />
        <div className="hero-movie_tags">
          <Skeleton type="thumbnail" />.
          <Skeleton type="thumbnail" />.
          <Skeleton type="thumbnail" />
        </div>
        {/* <Skeleton type="text" /> */}
        <div className="hero-movie_actionBtn">
          <Skeleton type="button" />
          <Skeleton type="button" />
        </div>
      </div>
    </div>
  );
};

export default Hero_Skeleton;
