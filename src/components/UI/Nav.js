import "./Nav.css";
const Nav = (props) => {
  return <nav className={`nav ${props.className}`}>{props.children}</nav>;
};
export default Nav;
