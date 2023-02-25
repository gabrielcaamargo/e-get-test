import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
  }

  body {
    max-width: 650px;
    width: 100%;
    margin: auto;
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme.textColor};
  }

  button {
    cursor: pointer;
  }
`;
