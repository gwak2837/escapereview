/* Apollo Server로 직접 쿼리를 보내는 Apollo Client다.
 * uri 항목으로 Apollo Server Endpoint를 지정한다. GraphQL에선 Endpoint가 1개뿐이라 이렇게 설정해준다.
 * request 항목은 Apollo Client가 Server로 쿼리를 보낼 때마다 실행된다.
 * 서버로 요청을 보낼 때마다 local storage에서 토큰 항목을 가져와서 HTTP headers의 authorization 항목에 저장하고 쿼리와 같이 보낸다.
 */

import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  request: operation => {
    const token = localStorage.getItem('token');
    console.log(token);
    operation.setContext({
      headers: {
        authorization: token ? `${token}` : ''
      }
    });
  }
});

export default client;
