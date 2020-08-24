import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authAction";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarBrand>Todo Application</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink href="/dashboard">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/priority">Priority Assignments</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" onClick={(e) => dispatch(logout())}>
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
