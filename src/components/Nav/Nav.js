import "./Nav.css";
import logo from "../../images/logo.svg";
const Nav = () => {
  return (
    <nav className="top-nav">
      <div className="logo-container">
        <img src={logo} alt="Shortly logo" />
      </div>
      <ul className="nav-bar">
        <li className="nav-elements">Features</li>
        <li className="nav-elements">Pricing</li>
        <li className="nav-elements">Resources</li>
      </ul>
      <ul className="sign-in-container">
        <li className="btn-login">Login</li>
        <li className="btn-signup">Sign Up</li>
      </ul>
    </nav>
  );
};
export default Nav;
