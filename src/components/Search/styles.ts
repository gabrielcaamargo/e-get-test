import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 72px;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-bottom: 48px;
  input {
    font-size: 16px;
    outline: none;
    border: 2px solid transparent;
    padding: 16px;
    height: 48px;
    width: 100%;
    box-shadow: 0px 2px 4px ${({theme}) => theme.boxShadow};
    transition: all 0.2s ease-in-out;

    &:focus {
      border: 2px solid ${({theme}) => theme.highlight};
    }
  }

  button {
    width: 100%;
    font-size: 16px;
    color: #FFF;
    transition: all 0.2s ease-in-out;
    font-weight: 700;
    font-family: 'Josefin Sans', sans-serif;
    background-color: ${({theme}) => theme.highlight};
    border: none;
    outline: none;
    font-size: 16px;
    height: 48px;
    box-shadow: 0px 2px 4px ${({theme}) => theme.boxShadow};

    &:hover {
      filter: brightness(0.9);
    }

    &:active {
      filter: brightness(1.1);
    }
  }
`;

export const ErrorMessage = styled.span`
  font-size: 14px;
  margin-top: 12px;
  color: #C21000;
`;
