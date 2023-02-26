import { GithubRepoInterface } from '../../@types/GithubRepoInterface';
import { Container, RepoInfo, Title } from './styles';

import { format } from 'date-fns';

import { AiOutlineLink, AiOutlineStar } from 'react-icons/ai';

export default function GithubRepoData({description, language, created_at, full_name, html_url, name}: GithubRepoInterface) {
  const rawConverted = new Date(created_at);
  const date = format(rawConverted, 'dd/MM/yyyy');

  return (
    <Container>
      <header>
        <Title>{name}</Title>
        <span>{full_name}</span>
        <p>{description}</p>
      </header>

      <RepoInfo>
        <li>
          <strong>Language:</strong>
          <span>{language}</span>
        </li>

        <li title='Repo created at'>
          <AiOutlineStar size={24} color='#FFF' />
          <span>{date}</span>
        </li>

        <li title='Open repo'>
          <a href={html_url} target='_blank' rel='noopener noreferrer'>
            <AiOutlineLink size={24} color='#FFF' />
          </a>
        </li>
      </RepoInfo>
    </Container>
  );
}
