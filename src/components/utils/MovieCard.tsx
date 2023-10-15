import "./utils.scss";

const MovieCard = ({
  isTrending,
  index,
  imgPath,
}: {
  isTrending?: boolean;
  index: number;
  imgPath: string;
}) => {
  return (
    <div className="movie-card_wrapper">
      {isTrending && <h1 className="movie-card_number">{index + 1}</h1>}

      <img
        className={isTrending ? "isTrending" : ""}
        alt="movie"
        src={imgPath}
      />
    </div>
  );
};

export default MovieCard;
