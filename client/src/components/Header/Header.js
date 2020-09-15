import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import logoSrc from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const FlexHeader = styled.header`
  display: flex;
  align-items: center;

  img {
    height: 3rem;
    margin-right: 1rem;
  }

  h1 {
    flex-grow: 1;
    font-size: 1.4rem;
    text-transform: uppercase;
  }
  ul {
    list-style: none;
    margin: 0;

    li {
      display: inline-block;
      margin-left: 1rem;
    }
  }
`;

const NavLink = styled(({ active, ...props }) => <Link {...props} />)`
  color: ${(props) => (props.active ? "var(--active-color)" : "inherit")};
`;

const Header = ({ loggedIn, ...props }) => {
  const location = useLocation();

  const navItems = loggedIn ? (
    <>
      <li>
        <NavLink to="/" active={location.pathname === "/"}>
          Logs
        </NavLink>
      </li>
      <li>
        <NavLink to="/apps" active={location.pathname === "/apps"}>
          Apps
        </NavLink>
      </li>
    </>
  ) : (
    <li>
      <NavLink to="/login" active>
        Login
      </NavLink>
    </li>
  );

  return (
    <FlexHeader {...props}>
      <img src={logoSrc} alt="Logo" />
      <h1>Logs</h1>
      <nav>
        <ul>{navItems}</ul>
      </nav>
    </FlexHeader>
  );
};

Header.propTypes = {
  loggedIn: PropTypes.bool,
};

export default Header;
