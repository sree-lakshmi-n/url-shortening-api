import "./NavElement.css";
const NavElement = (props) => {
  return (
    <li className={`nav-element ${props.className || ""}`}>{props.feature}</li>
  );
};
export default NavElement;
