import Skeleton from "../skeleton/Skeleton";
import "./Navbar.scss";

const Navbar_Skeleton = () => {
  return (
    <div className="navbar wrapper sleek ">
      <div className="leftNav">
        <Skeleton type="thumbnail" />

        <div className="navItem_wrapper">
          {[1, 2, 4].map((item, index) => (
            <Skeleton type="thumbnail" key={index} />
          ))}
        </div>
      </div>
      <div className="rightNav">
        <Skeleton type="input" />
        <Skeleton type="avatar" />
      </div>
    </div>
  );
};

export default Navbar_Skeleton;
