import React from "react";
import { NavLink as RRNavLink } from 'react-router-dom';
import {Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap'

const Header = () => {
    const activeStyle = {color: "#F15B2A"};
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand tag={RRNavLink} to={'/'}>Courses Home</NavbarBrand>
            <Nav className="ml-auto">
                <NavItem>
                    <NavLink tag={RRNavLink}  activeStyle={activeStyle}  exact path="/" to="/">
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={RRNavLink} activeStyle={activeStyle} to="/courses">
                        Courses
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={RRNavLink} activeStyle={activeStyle} to="/about">
                        About
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Header;
