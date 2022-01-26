import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
    outline: 0;
    font-family: ui-serif;
    
  ::-webkit-scrollbar{
    display: none;
  }
}

:root {
    //Colors Variables
}

body {
    margin: 0;
}

button {
    cursor: pointer;
}

a {
    text-decoration: none;
}

`;

export default GlobalStyle;
