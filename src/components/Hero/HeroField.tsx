import Navbar from "../navbar/Navbar";
import "./HeroField.scss";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const HeroField = () => {
  return (
    <div className="hero wrapper">
      <Navbar />
      <img
        className="hero_background"
        alt="hero_background"
        src="https://c.animaapp.com/FexQVYB4/img/rectangle-1.png"
      />

      <div className="heroDetail_wrapper">
        <img
          className="heroMovie_banner"
          alt="banner"
          src="https://c.animaapp.com/FexQVYB4/img/spiderman@2x.png"
        />
        <div className="heroMovie_tags">
          <span className="tag">Action</span>
          <div className="dot" />
          <span className="tag">Adventure</span>
          <div className="dot" />
          <span className="tag" style={{ color: "#d9d9d9cc" }}>
            2h 28m
          </span>
        </div>
        <p className="heroMovie_description">
          When a spell goes wrong, dangerous foes from other worlds start to
          appear, forcing Peter to discover what it truly means to be
          Spider-Man.
        </p>
        <div className="heroMovie_actionBtn">
          <button type="button">
            <AiFillPlayCircle color="" />
            Watch Now
          </button>
          <button type="button">
            <IoIosArrowDroprightCircle color="white" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroField;
