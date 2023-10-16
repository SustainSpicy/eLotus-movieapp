import { useEffect, useState } from "react";
import Skeleton from "../skeleton/Skeleton";
import "./utils.scss";
import Card_Skeleton from "./Card_Skeleton";

const MovieCard = ({
  isTrending,
  index,
  imgPath,
}: {
  isTrending?: boolean;
  index: number;
  imgPath: string;
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  useEffect(() => {
    const img = new Image();
    img.src = imgPath;
    img.onload = handleImageLoad;
    img.onerror = handleImageError;
  }, [imgPath]);

  if (imageError) {
    console.error("Error loading image:", imgPath);
    return null;
  }

  if (!imageLoaded) {
    return <Card_Skeleton />;
  }
  return (
    <div className="movie-card_wrapper">
      {isTrending && <h1 className="movie-card_number">{index + 1}</h1>}

      <img
        className={isTrending ? "isTrending fade-in " : "fade-in "}
        alt="movie"
        src={imgPath}
        loading="lazy"
      />
    </div>
  );
};

export default MovieCard;
