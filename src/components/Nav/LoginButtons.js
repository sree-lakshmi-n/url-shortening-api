import "./LoginButtons.css";
import NavList from "../UI/NavList";
const LoginButtons = () => {
  return (
    <NavList className="nav-login">
      <li className="btn btn-login btn-login">Login</li>
      <li className="btn btn-login btn-signup">Sign Up</li>
    </NavList>
  );
};
export default LoginButtons;
