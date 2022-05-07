//@ts-nocheck
//slight hack to make the compiler be happy about using the style vars
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.colors.main.background};
    font-family: 'Source Sans Pro', sans-serif;
    box-sizing: border-box;
    overflow: hidden;
  }
`;
 
export default GlobalStyle;