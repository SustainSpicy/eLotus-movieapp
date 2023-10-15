import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer wrapper">
      <div className="footer-details">
        <p className="text-wrapper-8">© 2023 STREAM X. All Rights Reserved.</p>
        <div className="text-wrapper-8">Terms Of Use</div>
        <div className="text-wrapper-8">Privacy Policy</div>
        <div className="text-wrapper-8">FAQ</div>
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
