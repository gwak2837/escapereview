/** 
 * yarn start 시 프로그램이 처음으로 진입하는 지점이다.
 * 여기서 App 컴포넌트를 ApolloProvider로 감싸서 apollo.js에서 정의한 ApolloClient가 App 컴포넌트 어디든지 접근할 수 있도록 해준다.
 * 그리고 App 컴포넌트를 감싼 Apollo Provider의 내용을 public 폴더의 index.html의 root 항목 아래에 넣어 화면에 보여준다.(렌더링한다.)
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import App from 'App';
import client from 'apollo';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
