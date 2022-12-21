import NavList from "../UI/NavList";
import NavElement from "../UI/NavElement";
const FeatureNav = () => {
  const navBarFeatures = ["Features", "Pricing", "Resources"];
  return (
    <NavList>
      {navBarFeatures.map((feature, index) => (
        <NavElement key={index} feature={feature} />
      ))}
    </NavList>
  );
};
export default FeatureNav;
