import { MdOutlineNavigateNext } from "react-icons/md";
import "./Slider.scss";
import Slider from "react-slick";
import { Movie } from "../../constants/types";
import { Link } from "react-router-dom";

const imgPath = process.env.REACT_APP_IMG_PATH;

const SliderComponent = ({
  list,
  title,
  isTrending,
}: {
  title: string;
  list: Movie[];
  isTrending?: boolean;
}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: list.length < 5 ? list.length : 4,
    slidesToScroll: 3,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  console.log(list);

  return (
    <div
      className={isTrending ? " slider-container blur " : "slider-container "}
      style={{ padding: "1rem 0" }}
    >
      <div className="slider-header ">
        <span className="slider_title">{title}</span>
        {!isTrending && (
          <button type="button">
            View more
            <MdOutlineNavigateNext color="white" />
          </button>
        )}
      </div>

      <Slider {...settings} className="slider-rail ">
        {list.map((movie, index) => (
          <Link to={`/movie/${movie.id}/details`} key={movie.id}>
            <div key={index} className="slider-item ">
              {isTrending && (
                <h1 className="slider-item_number">{index + 1}</h1>
              )}
              <img
                className={isTrending ? "isTrending" : ""}
                alt="movie"
                src={`${imgPath}${movie.poster_path}`}
              />
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
