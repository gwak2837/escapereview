/* 사용자 정보와 그 정보를 변경할 수 있는 함수를 공유하는 React Context를 생성한다. 
 * 즉, 이 Context는 user라는 변수와 setUser라는 함수를 가지고 있다.
 * user에 사용자 정보를 저장하고, 하위 컴포넌트에서 user 정보를 변경할 수 있도록 setUser 함수도 제공한다.
*/

import React from 'react';

const UserContext = React.createContext({ user: {}, setUser: () => {} });

export default UserContext;
