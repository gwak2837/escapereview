/* 루트 컴포넌트로서 사용자 로그인 정보를 가지고 있고, Router.js에서 정의한 컴포넌트 라우팅을 화면에 보여준다.
 * 초기 시작 url이 / 라서 Home 컴포넌트가 화면에 렌더링될 것이다.
 * 사용자 로그인 정보는 React Context API를 활용해 모든 컴포넌트에서 (props 상속 없이) 공유할 수 있게 했다.
 * props 상속으로 컴포넌트 간 데이터를 공유하려면 나중에 유지보수가 어렵고 컴포넌트 재사용이 어려워지기 때문에 Context API를 활용했다.
 * App 컴포넌트는 useState()를 통해 함수 자체에 사용자 정보를 저장할 수 있다.(클래스 멤버 변수와 비슷한 방식)
 * App 컴포넌트는 첫 시작 시 1번만 렌더링된다.(새로고침 할 때마다 렌더링 됨)
 * 즉, 매 새로고침 시 서버로 토큰을 전송하고 서버로부터 사용자 정보를 받아, 새로그침을 해도 로그인 상태를 유지할 수 있게 했다. (원래는 로그인 상태가 초기화 됨)
 * useQuery()로 서버에 쿼리를 요청하면 useQuery()에 응답(사용자 정보)이 반환된다.
 * 그리고 서버로부터 응답을 받을 때마다({ data } 값이 변경될 때마다) useEffect() 함수가 호출되어 useState()를 통해 App 컴포넌트에 사용자 정보가 저장된다.
 * 이 사용자 정보와 이를 변경할 수 있는 함수를 Context Provider의 value값에 넣어주면 하위 컴포넌트와 데이터를 공유할 수 있다.
 * ApolloProvider와 비슷하게 Context Provider를 가장 상위 컴포넌트에 감싸준다. 이러면 그 하위 컴포넌트라면 어디에서든지 useContext()를 통해 Context에 접근할 수 있다.
 * Context Provider는 상황에 따라 App 컴포넌트를 감싸도 되고 Router 컴포넌트 전체를 감싸도 된다. 
 * 여기선 Navigation 컴포넌트와 Route 컴포넌트에서 Context에 접근하기 때문에 <HashRouter> 아래에 설정했다. 
 * Context Provider 밖에선 Context에 접근할 수 없다는 점만 주의해서 Context Provider 정의 위치를 정하면 된다.
 * Context Provider의 value prop엔 Context를 정의할 때 사용한 이름(user, setUser)을 그대로 사용해야 한다.
*/

import React, { useState, useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import UserContext from 'context/userContext';
import Router from 'Router';
import 'css/App.css';

const ME = gql`
  {
    me {
      ID
      name
      token
    }
  }
`;

function App() {
  const [user, setUser] = useState(null);
  const { data } = useQuery(ME);

  useEffect(() => {
    if (data?.me) setUser(data.me);
  }, [data]);

  useEffect(() => {
    console.log(user);
    console.log(localStorage.getItem('token'));
  }, [user]); //DEBUG

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router />
    </UserContext.Provider>
  );
}

export default App;
