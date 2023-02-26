import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
  }

  body {
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme.textColor};
    width: 100vw;
    overflow-x: hidden;
    @media screen and (max-width: 720px) {
      width: 90vw;
    }
  }

  button {
    cursor: pointer;
  }
`;
