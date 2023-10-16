import { useEffect, useState } from "react";
import "./Footer.scss";
import Footer_Skeleton from "./Footer_Skeleton";

const Footer = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) {
    return <Footer_Skeleton />;
  }
  return (
    <footer className="footer wrapper sleek">
      <div className="footer-details">
        <p className="">© 2023 STREAM X. All Rights Reserved.</p>
        <p className="">Terms Of Use</p>
        <p className="">Privacy Policy</p>
        <p className="">FAQ</p>
      </div>
      <div className="logo_img">
        <img
          alt="Logo"
          src="https://c.animaapp.com/FexQVYB4/img/frame-31-1.svg"
        />
      </div>
    </footer>
  );
};

export default Footer;
