import "./Navbar.scss";

const NavItem = ({ text }: { text: string }) => {
  return <div className="navItem">{text}</div>;
};

export default NavItem;
