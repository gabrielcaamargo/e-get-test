import styled from 'styled-components';

export const Container = styled.div`
  margin: 72px 0;

  @keyframes showUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  animation: showUp 0.5s ease-in 1;
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
