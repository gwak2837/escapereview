import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from 'assets/image/logo.png';
import 'css/Navigation.css';
import UserContext from 'context/userContext';

const Nav = styled.div`
  background-color: #282c34;
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: calc(10px + 2.5vmin);
  color: white;
  padding: 10px;
  margin-bottom: 20px;
  align-items: center;
`;

function Navigation() {
  const [searchWord, setSearchWord] = useState('');

  const handleChange = e => {
    setSearchWord(e.target.value);
  };

  return (
    <Nav>
      <Link to="/">
        <img className="logo" src={logo} alt="logo" title="Room Escape Cafe" />
      </Link>
      <div className="main-menu-container">
        <Link to="/cafe" className="main-menu">
          카페
        </Link>
        <Link to="/theme" className="main-menu">
          테마
        </Link>
        <Link to="/nearby" className="main-menu">
          근처
        </Link>
        <Link to="/review" className="main-menu">
          리뷰
        </Link>
      </div>
      <input
        type="text"
        name="방탈출카페 통합검색"
        className="escape-cafe-search"
        placeholder="방탈출카페 통합검색"
        onChange={handleChange}
      ></input>

      <div className="header-util-container">
        <UserContext.Consumer>
          {({ user }) =>
            user?.token ? (
              <>
                <Link to="/logout">로그아웃</Link>{' '}
                <Link to={`/user/${user.ID}`}>마이페이지</Link>
              </>
            ) : (
              <>
                <Link to="/login">로그인</Link>{' '}
                <Link to="/signup">회원가입</Link>
              </>
            )
          }
        </UserContext.Consumer>
      </div>
    </Nav>
  );
}

export default Navigation;
