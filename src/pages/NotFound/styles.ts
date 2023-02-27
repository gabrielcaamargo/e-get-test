import styled from 'styled-components';

export const Container = styled.main`
  margin: 72px 0;

  @keyframes showUp {
    from {
      opacity: 0;
      transform: translateY(70px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  animation: showUp 0.7s ease-in 1;

  a {
    color: ${({theme}) => theme.textColor};
    text-decoration: underline;
  }

  h1 {
    margin-top: 16px;
  }
`;

