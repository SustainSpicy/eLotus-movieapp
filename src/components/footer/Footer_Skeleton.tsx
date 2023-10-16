import Skeleton from "../skeleton/Skeleton";
import "./Footer.scss";

const Footer_Skeleton = () => {
  return (
    <footer className="footer wrapper sleek">
      <div className="footer-details">
        <Skeleton type="title1" />
        <Skeleton type="title1" />
        <Skeleton type="title1" />
        <Skeleton type="title1" />
      </div>
    </footer>
  );
};

export default Footer_Skeleton;
