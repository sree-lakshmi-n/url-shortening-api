import "./NavList.css";
const NavList = (props) => {
  return (
    <ul className={`nav-list ${props.className || ""}`}>{props.children}</ul>
  );
};
export default NavList;
