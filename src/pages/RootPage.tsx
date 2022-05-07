import { FunctionComponent } from "react";
import styled from "styled-components";
import { Container, PrimaryButton } from "../components";

import Navbar from "../components/navBar/NavBar";
import { NavBtn, NavBtnLink, NavLink } from "../components/navBar/NavBarStyles";
import { useAuth } from "../hooks/UseAuth";
import { useLogOut } from "../hooks/useLogout";

const StyledDiv = styled.div`
  margin: 20px;
  div {
    margin-bottom: 20px;
  }
`;

export const RootPage: FunctionComponent = () => {
  const isAuth = useAuth().authData?.accessToken;
  const logout = useLogOut();

  const signOut = async () => {
    await logout();
  };

  return (
    <div>
      <Navbar
        navButtons={
          isAuth ? (
            <NavBtn>
              <PrimaryButton onClick={signOut}>Log Out</PrimaryButton>
            </NavBtn>
          ) : (
            <>
              <NavLink to="/register">Sign Up</NavLink>
              <NavBtn>
                <NavBtnLink to="/login">Sign In</NavBtnLink>
              </NavBtn>
            </>
          )
        }
      />
      <StyledDiv>
        <Container>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Container>
        <Container>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Container>
      </StyledDiv>
    </div>
  );
};
