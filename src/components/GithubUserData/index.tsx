import { Container, Title, UserInfo } from './styles';
import { Link } from 'react-router-dom';
import { AiOutlineFolderOpen, AiOutlineLink } from 'react-icons/ai';

import { GithubUserInterface } from '../../@types/GithubUserInterface';

export default function GithubUserData({ name, public_repos, login, html_url }: GithubUserInterface) {
  return (
    <Container>
      <header>
        <div>
          <Title>{name}</Title>
          <span>/{login}</span>
        </div>
      </header>

      <UserInfo>
        <li title='Repos'>
          <AiOutlineFolderOpen size={24} color='#FFF' />
          <Link to="/repos">
            <small>{public_repos}</small>
          </Link>
        </li>

        <li title={`Open ${name}'s profile`}>
          <a href={html_url} target='_blank' rel='noopener noreferrer'>
            <AiOutlineLink size={24} color='#FFF' />
          </a>
        </li>
      </UserInfo>
    </Container>
  );
}
