import styled from 'styled-components';

export const Container =  styled.header`
  margin-top: 72px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ThemeSwitcher = styled.button`
  border: none;
  outline: none;
  background: none;
  align-self: flex-end;

  img {
    width: 32px;
  }
`;

export const Title = styled.h1`
  font-family: 'Josefin Sans';
  font-size: 36px;
  color: ${({theme}) => theme.textColor};
  span {
    color: ${({theme}) => theme.highlight};
  }
`;
