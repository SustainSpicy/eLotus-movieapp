import Skeleton from "../skeleton/Skeleton";
import Card_Skeleton from "../utils/Card_Skeleton";
import "./Slider.scss";

const Slide_Skeleton = () => {
  return (
    <div className="sleek slider-container ">
      <div className="slider-header ">
        <Skeleton type="title1" />
        <Skeleton type="button" />
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem" }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((movie, index) => (
          <Card_Skeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default Slide_Skeleton;
