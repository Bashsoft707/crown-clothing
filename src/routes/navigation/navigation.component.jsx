import React, { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../context/userContext";

export const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span">SIGN OUT</NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
