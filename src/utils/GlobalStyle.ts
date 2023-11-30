import { createGlobalStyle } from "styled-components";
import "../assets/style/font.css";

const GlobalStyle = createGlobalStyle`
  body,html{
    background: #FBF5EF;
    color: #080808;
    padding: 0;
    margin: 0;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter-Regular";
  }
  ul,li,dl,dt,dd{
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
