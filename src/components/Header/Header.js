import "./Header.css";
import headerImg from "../../images/illustration-working.svg";
const Header = () => {
  return (
    <div className="header">
      <div className="header-textbox">
        <h1 className="header-title">More than just shorter links</h1>
        <p className="header-content">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="btn btn-signup btn-cta">Get Started</button>
      </div>
      <div className="header-imagebox">
        <img
          src={headerImg}
          alt="An illustration depicting a person sitting in front of a laptop"
        />
      </div>
    </div>
  );
};
export default Header;
