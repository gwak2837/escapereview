/* 컴포넌트 간 라우팅을 설정하는 부분이다.
 * 먼저 전체를 HashRouter로 감싸서 컴포넌트 간 라우팅이 가능하도록 한다.
 * 그리고 상단에 네비게이션 바를 넣어 컴포넌트 라우팅 링크를 제공한다.
 * <Switch> 항목은 Route path 중 처음으로 일치하는 컴포넌트만 화면에 보여주는 역할을 한다.
 * <Switch>가 없으면 Route path가 일치하는 모든 컴포넌트를 화면에 보여주기 때문에 필요하다.
 * <Route>를 통해 특정 url에 접속했을 때 화면에 보여줄(렌더링할) 컴포넌트를 설정할 수 있다.
 * 만약 Route path 중 일치하는 path가 하나도 없으면 /으로 리다이렉트 된다.
*/

import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navigation from 'Components/Navigation';
import Home from 'Routes/Home';
import Cafes from 'Routes/Cafes';
import CafeDetail from 'Routes/CafeDetail';
import Themes from 'Routes/Themes';
import ThemeDetail from 'Routes/ThemeDetail';
import Nearby from 'Routes/Nearby';
import Reviews from 'Routes/Reviews';
import ReviewDetail from 'Routes/ReviewDetail';
import Search from 'Routes/Search';
import Signup from 'Routes/Signup';
import Login from 'Routes/Login';
import Logout from 'Routes/Logout';
import MyPage from 'Routes/MyPage';
import Test from 'Routes/Test';

export default () => {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path="/cafe/:id" component={CafeDetail} />
        <Route path="/cafe" component={Cafes} />
        <Route path="/theme/:id" component={ThemeDetail} />
        <Route path="/theme" component={Themes} />
        <Route path="/nearby" component={Nearby} />
        <Route path="/review/:id" component={ReviewDetail} />
        <Route path="/review" component={Reviews} />
        <Route path="/search/" component={Search} />
        <Route path="/test" component={Test} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/logout" component={Logout} />
        <Route path="/user/:id" component={MyPage} />
        <Route path="/" component={Home} />
        <Redirect from="*" to="/" />
      </Switch>
    </HashRouter>
  );
};
