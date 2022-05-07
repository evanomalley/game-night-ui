import styled from "styled-components";
import { ThemeVars } from "../theme";

export const StyledButton = styled.button`
  border-radius: 4px;
  background: ${ThemeVars.colors.button.primary};
  padding: 10px 22px;
  color: #010606;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

type buttonProps = {
  children: any;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
};

export const PrimaryButton = (props: buttonProps) => {
  const { children, type, onClick } = props;

  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};
