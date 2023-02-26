import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Container, ErrorMessage, Form } from './styles';
import { useForm } from 'react-hook-form';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GithubUserInterface } from '../../@types/GithubUserInterface';
import GithubUserData from '../GithubUserData';
import { loadUserData } from '../../redux/user/UserSlice';

interface Fields {
  username: string;
}

export default function Search() {
  const [userData, setUserData] = useState<GithubUserInterface>();
  const [hasUser, setHasUser] = useState(false);

  const dispatch = useDispatch();

  const handleSearchUser = useCallback((user:string) => {
    function getUserData() {
      fetch(`https://api.github.com/users/${user}`)
        .then(response => response.json())
        .then(response => {
          if(response.message === 'Not Found') {
            toast.error('User not found');
            setHasUser(false);
            return;
          }

          const {name, public_repos, login, html_url} = response;
          setHasUser(true);
          setUserData({name, public_repos, login, html_url});
          dispatch(loadUserData(login));
        });
    }

    getUserData();
  }, []);

  const { register, handleSubmit, formState: { errors } } = useForm<Fields>();

  function onSubmit(data: Fields) {
    localStorage.setItem('username', data.username);
    handleSearchUser(data.username);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder='Username'
            {...register('username', { required: true, minLength: 3 })}
            name='username'
            id='username'
          />

          {errors.username && <ErrorMessage>Username is required</ErrorMessage>}
        </div>
        <button type='submit'>Search</button>
      </Form>
      <ToastContainer />

      {hasUser && (
        <GithubUserData
          login={userData?.login}
          name={userData?.name}
          public_repos={userData?.public_repos}
          html_url={userData?.html_url}
        />
      )}
    </Container>
  );
}
