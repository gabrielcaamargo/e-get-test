import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({theme}) => theme.main};
  padding: 20px;
  display: flex;
  flex-direction: column;

  span {
    display: block;
    color: rgba(255, 255, 255, 0.5);
  }

  header {
    display: flex;
    flex-direction: column;

    p {
      margin-top: 12px;
    }
  }
`;

export const Title = styled.strong`
  font-family: 'Josefin Sans', sans-serif;
  color: #FFF;
  font-size: 24px;
`;

export const RepoInfo = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 32px;
  gap: 16px;
  flex-wrap: wrap;
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

export const RepoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 48px;
`;

