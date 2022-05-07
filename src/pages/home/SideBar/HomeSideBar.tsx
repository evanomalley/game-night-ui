import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { ThemeVars } from "../../../components/theme";
import { ROUTE_URLS } from "../../../routes/RouteURLS";
import { CgList } from "react-icons/cg";
import { SideNavData } from "./SideNavData";

const StyledContainer = styled.div`
  width: 240px !important;
  background: ${ThemeVars.colors.main.six};
  height: 100%;
  left: 0;
  @media (max-width: 767px) {
    position: absolute;
  }

  &.hidden {
    @media (max-width: 767px) {
      left: -100%;
    }
  }
  transition: all 0.75s ease-in-out;
`;

const StyledNavMenuList = styled.ul`
  width: 100%;
  padding: 0;
`;

const StyledMenuItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  list-style: none;
  height: 60px;
  :hover {
    background: ${ThemeVars.colors.main.five};
  }
  a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 16px;
    &.active {
      border-right: 5px solid ${ThemeVars.colors.button.primary};
    }
  }
  span {
    margin-left: 16px;
  }
`;

type HomeSideBarPropsType = {
  hidden?: boolean;
  children?: any;
};

const HomeSideBar = (props: HomeSideBarPropsType) => {
  const { children, hidden } = props;

  return (
    <StyledContainer className={hidden ? "" : "hidden"}>
      <div className="title-section">
        <h1>On Board</h1>
      </div>
      {children}
      <StyledNavMenuList>
        {SideNavData.map((item, index) => {
          return (
            <StyledMenuItem key={index}>
              <NavLink to={item.link}>
                {" "}
                {item.icon} <span>{item.text}</span>
              </NavLink>
            </StyledMenuItem>
          );
        })}
      </StyledNavMenuList>
    </StyledContainer>
  );
};

export default HomeSideBar;
