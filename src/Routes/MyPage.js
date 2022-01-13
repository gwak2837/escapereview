import React from 'react';
import UserContext from 'context/userContext';

function MyPage({ history }) {
  return (
    <UserContext.Consumer>
      {({ user }) => {
        if (!user) {
          alert('로그인 페이지로 이동합니다.');
          history.push('/login');
        }

        return (
          <div>
            <h1>MyPage</h1>
            <h2>ID</h2>
            <h4>{user?.ID}</h4>
            <h2>Token</h2>
            <h4>{user?.token}</h4>
            <h2>Name</h2>
            <h4>{user?.name}</h4>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}

export default MyPage;
