import "./Slider.scss";
import Slider from "react-slick";

const SliderComponent = ({
  list,
  title,
  isTrending,
}: {
  title: string;
  list: string[];
  isTrending?: boolean;
}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: list.length < 5 ? list.length : 5,
    slidesToScroll: 3,
  };

  return (
    <div className="slider-container">
      <span className="slider_title">{title}</span>

      <Slider {...settings} className="slider-rail ">
        {list.map((item, index) => (
          <div key={index} className="slider-item ">
            {isTrending && <h1 className="slider-item_number">{index + 1}</h1>}
            <img
              className={isTrending ? "isTrending" : ""}
              alt="movie"
              src="https://c.animaapp.com/FexQVYB4/img/rectangle-4-9.svg"
            />
          </div>
        ))}
      </Slider>
      {/* </div> */}
    </div>
  );
};

export default SliderComponent;
