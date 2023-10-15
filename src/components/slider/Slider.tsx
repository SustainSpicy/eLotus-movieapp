import { MdOutlineNavigateNext } from "react-icons/md";
import "./Slider.scss";
import Slider from "react-slick";
import { Movie } from "../../constants/types";
import { Link } from "react-router-dom";
import MovieCard from "../utils/MovieCard";

const SliderComponent = ({
  list,
  title,
  id,
  isTrending,
}: {
  title: string;
  list: Movie[];
  id?: number;
  isTrending?: boolean;
}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: list.length < 5 ? list.length : 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className={
        isTrending
          ? " sleek slider-container blur2 "
          : "sleek slider-container "
      }
    >
      <div className="slider-header ">
        <span className="slider_title">{title}</span>
        {!isTrending && (
          <Link to={`/movies/${id}/${title}`}>
            <button type="button">
              View more
              <MdOutlineNavigateNext color="white" />
            </button>
          </Link>
        )}
      </div>

      <Slider {...settings} className="slider-rail ">
        {list.map((movie, index) => (
          <Link key={index} to={`/movie/${movie.id}/details`}>
            {/* <div className="slider-item ">
              {isTrending && (
                <h1 className="slider-item_number">{index + 1}</h1>
              )}
              <img
                className={isTrending ? "isTrending" : ""}
                alt="movie"
                src={`${imgPath}${movie.poster_path}`}
              />
            </div> */}
            <MovieCard
              isTrending={isTrending}
              index={index}
              imgPath={`${process.env.REACT_APP_IMG_PATH}${movie.poster_path}`}
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
