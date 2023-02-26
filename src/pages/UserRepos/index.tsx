import React from 'react';
import { GithubRepoInterface } from '../../@types/GithubRepoInterface';

import { connect, DispatchProp } from 'react-redux';
import userReducer from '../../redux/user/UserSlice';
import { AnyAction } from 'redux';

import { Container, Header, Title } from './styles';

import { Link } from 'react-router-dom';
import GithubRepoData from '../../components/GithubRepoData';
import { RepoList } from '../../components/GithubRepoData/styles';

interface UserReposProps {
  user?: AnyAction;
}

interface UserReposState {
  userRepos: GithubRepoInterface[]
}


class UserRepos<P> extends React.Component<UserReposProps & P & DispatchProp<AnyAction>, UserReposState> {
  constructor(props: UserReposProps & P & DispatchProp<AnyAction>) {
    super(props);

    this.state = {
      userRepos: []
    };
  }

  componentDidMount(): void {
    const getUserRepos = async () => {
      const data = await fetch(`https://api.github.com/users/${this.props.user?.userReducer.user}/repos`);
      console.log(this.props.user?.userReducer.user);
      const json = await data.json();
      this.setState({userRepos: json});
    };

    getUserRepos();
  }

  render() {
    const { user } = this.props;
    const { userRepos } = this.state;
    const userName = this.props.user?.userReducer.user;

    return(
      <Container>
        {userName !== '' ? (
          <>
            <Header>
              <Link to="/">
                    Back
              </Link>

              <Title>
                <span>{userName}'s </span>
                    repositories
              </Title>
            </Header>

            <RepoList>
              {userRepos.map(repo => (
                <GithubRepoData
                  name={repo.name}
                  key={Math.random()}
                  description={repo.description}
                  language={repo.language}
                  created_at={repo.created_at}
                  full_name={repo.full_name}
                  html_url={repo.html_url}
                />
              ))}
            </RepoList>
          </>
        ) : (
          <>
            <Header>
              <Link to="/">
                    Back
              </Link>

            </Header>

            <Title>
            You must search a user. Get back to home and search one
            </Title>
          </>
        )}
      </Container>
    );
  }
}

const userStateToProps = (state: { user: string }, ownProps: UserReposProps) => {
  return {
    user: userReducer(state, ownProps?.user ? ownProps.user : { type: 'gabrielcaamargo' })
  };
};


export default connect(userStateToProps)(UserRepos as React.ComponentType<{}>);
