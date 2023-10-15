import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import "./Navbar.scss";
import { BsSearch } from "react-icons/bs";
const navItem = ["Movies", "Series", "Trending", "Categories"];

const Navbar = () => {
  return (
    <div className="navbar  ">
      <div className="leftNav">
        <div className="logo_img">
          <Link to={`/`}>
            <img
              alt="Logo"
              src="https://c.animaapp.com/FexQVYB4/img/frame-31-1.svg"
            />
          </Link>
        </div>
        <div className="navItem_wrapper">
          {navItem.map((item, index) => (
            <NavItem text={item} key={index} />
          ))}
        </div>
      </div>
      <div className="rightNav">
        <div className="searchbar_wrapper">
          <input
            className="overlap-group-7"
            placeholder="Search Movies, Series..."
          />
          <BsSearch color="white" />
        </div>
        <div className="avatar">
          {/* <img
            alt="avatar"
            src="https://c.animaapp.com/FexQVYB4/img/ellipse-14@2x.png"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
