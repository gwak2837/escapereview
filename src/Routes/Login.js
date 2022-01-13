import React, { useState, useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import UserContext from 'context/userContext';
import Loading from 'Components/Loading';

const LOGIN = gql`
  mutation login($ID: String!, $password: String!) {
    login(ID: $ID, password: $password) {
      ID
      name
      role
      token
    }
  }
`;

function Login({ history }) {
  const [ID, setID] = useState('');
  const [password, setPassword] = useState('');
  const [login, { data, loading, error }] = useMutation(LOGIN);

  useEffect(() => {
    if (data?.login) alert('로그인에 성공했습니다');
    else if (data?.login === null) alert('로그인에 실패했습니다');
  }, [data]); //DEBUG

  if (loading) return <Loading />;
  if (error) return <p>An error occurred</p>;

  return (
    <UserContext.Consumer>
      {({ user, setUser }) => {
        if (user) history.replace('/');
        return (
          <div>
            <div>로그인</div>
            <form
              onSubmit={e => {
                e.preventDefault();
                login({ variables: { ID, password } }).then(({ data }) => {
                  if (data?.login) {
                    setUser(data.login);
                    localStorage.setItem('token', data.login.token);
                    history.replace('/');
                  } else alert('아이디 또는 비밀번호를 잘못 입력했습니다.');
                });
                setID('');
                setPassword('');
              }}
            >
              <input
                value={ID}
                onChange={e => setID(e.target.value)}
                type="text"
                placeholder="ID"
              />
              <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                placeholder="Choose a safe password"
              />
              <button type="submit">로그인</button>
            </form>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}

export default Login;
