import { Nav, NavLink, Bars, NavMenu, NavOptionGroup } from "./NavBarStyles";

type NavBarPropsType = {
  navButtons: any;
};

const Navbar = (props: NavBarPropsType) => {
  const { navButtons } = props;

  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src="logo192.png" height={80} alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </NavMenu>
        <NavOptionGroup>{navButtons}</NavOptionGroup>
      </Nav>
    </>
  );
};

export default Navbar;
