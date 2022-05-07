import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: ${props => props.theme.colors.main.nine};
  padding: 10px;
  color: #fff;
`;

type ContainerTypeProps = {
    children: any
}

export const Container = (props: ContainerTypeProps) => {
    const {children} = props;
    
    return (
        <StyledContainer>
			{children}
		</StyledContainer>
    )
}