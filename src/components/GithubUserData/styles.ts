import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({theme}) => theme.main};
  padding: 20px;

  span {
    display: block;
    color: rgba(255, 255, 255, 0.5);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    button {
      background: none;
      border: none;
      outline: none;
    }
  }

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

  animation: showUp 0.4s ease-in 1;
`;

export const Title = styled.strong`
  font-family: 'Josefin Sans', sans-serif;
  color: #FFF;
  font-size: 24px;
`;

export const UserInfo = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 32px;
  gap: 16px;


  li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 2px;
    font-weight: 700;

    a {
      text-decoration: none;
      color: inherit;
    }

    small {
      color: #FFF;
      font-size: 14px;
    }
  }
`;
