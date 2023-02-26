import styled from 'styled-components';

export const Container = styled.div`
  margin: 72px 0;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
  a {
    font-size: 16px;
    color: ${({theme}) => theme.textColor};
    text-decoration: underline;
  }
`;

export const Title = styled.h1`
  span {
    color: ${({theme}) => theme.highlight};
  }
`;
