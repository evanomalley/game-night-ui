import styled from "styled-components";
import { ThemeVars } from "../theme";

const StyledHeader = styled.header`
  padding: 30px;
  height: 2vh;
  background: ${ThemeVars.colors.main.nine};
  color: white;
  svg {
    font-size: 40px;
    :hover {
      color: ${ThemeVars.colors.button.primary};
    }
  }
`;

type NavHeaderPropsType = {
  children: any;
};

export const NavHeader = (props: NavHeaderPropsType) => {
  const { children } = props;
  return <StyledHeader>{children}</StyledHeader>;
};
