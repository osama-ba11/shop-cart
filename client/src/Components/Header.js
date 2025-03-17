import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar className="header">
        <Nav className="nav">
          <NavItem className="nav-item">
            <Link to="/" className="nav-link">
              Shopping Cart
            </Link>
          </NavItem>

          <NavItem className="nav-item">
            <Link to="/manage" className="nav-link">
              Manage
            </Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link to="/update" className="nav-link">
              Update
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
