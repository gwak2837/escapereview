import React, { useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import UserContext from 'context/userContext';

const LOGOUT = gql`
  mutation {
    logout
  }
`;

function Logout({ history }) {
  const [logout, { data }] = useMutation(LOGOUT);

  useEffect(() => {
    if (data?.logout) alert('로그아웃에 성공했습니다');
    else if (data?.logout === null) alert('로그아웃에 실패했습니다');
  }, [data]); //DEBUG

  return (
    <UserContext.Consumer>
      {({ user, setUser }) => {
        if (!user) history.replace('/');
        return (
          <button
            type="button"
            onClick={() => {
              logout().then(({ data }) => {
                if (data?.logout) {
                  setUser(null);
                  localStorage.removeItem('token');
                  history.replace('/');
                } else alert('로그아웃 실패');
              });
            }}
          >
            로그아웃
          </button>
        );
      }}
    </UserContext.Consumer>
  );
}

export default Logout;
