import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import "./Navbar.scss";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import Navbar_Skeleton from "./Navbar_Skeleton";
import { useNavigate } from "react-router-dom";

const navItem = [
  {
    name: "Movies",
    url: "/",
  },
  {
    name: "Series",
    url: "/",
  },
  {
    name: "Trending",
    url: "/",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleInputChange = (event: any) => {
    setQuery(event.target.value);
  };

  const handleEnterPress = (event: any) => {
    if (event.key === "Enter") {
      navigate(`/search?q=${query}`);
    }
  };

  if (!loaded) {
    return <Navbar_Skeleton />;
  }
  return (
    <div className="navbar wrapper sleek ">
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
            <Link to={item.url} key={index}>
              <NavItem text={item.name} />
            </Link>
          ))}
        </div>
      </div>
      <div className="rightNav">
        <div className="searchbar_wrapper">
          <input
            className="overlap-group-7"
            placeholder="Search Movies, Series..."
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleEnterPress}
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
