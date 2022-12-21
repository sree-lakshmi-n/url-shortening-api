import "./TopNav.css";
import Nav from "../UI/Nav";
import Logo from "./Logo";
import FeatureNav from "./FeatureNav";
import LoginButtons from "./LoginButtons";

const TopNav = () => {
  return (
    <Nav className="top-nav">
      <Logo />
      <FeatureNav />
      <LoginButtons />
    </Nav>
  );
};
export default TopNav;
