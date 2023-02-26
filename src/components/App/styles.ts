import styled from 'styled-components';

export const Container = styled.div`
  max-width: 650px;
  width: 100%;
  margin: auto;
  background-color: ${({theme}) => theme.background};
  color: ${({theme}) => theme.textColor};

  @media screen and (max-width: 720px) {
    width: 90vw;
  }
`;
