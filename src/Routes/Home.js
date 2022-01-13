/* / url로 접속했을 때 화면에 보여질 컴포넌트다.
 * 기존 css 방식를 사용해도 되고, 아래와 같이 styled components 방식을 사용해도 된다.
 * 여기선 useQuery()를 통해 서버에 카페 리스트 정보를 요청한다.
 * 그리고 로딩이 완료되면 카페 리스트 각 항목 데이터를 Cafe 컴포넌트 props에 전달해서 화면에 보여준다.
 */

import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
//import './Home.css';
import Cafe from 'Components/Cafe';

const GET_MOVIES = gql`
  {
    escapeCafes {
      id
      name
      cover_image
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  font-size: 35px;
`;

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const Cafes = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;
`;

export const Footer = styled.div``;

//Home화면에 CafeList 표시
const Home = () => {
  const { loading, data } = useQuery(GET_MOVIES);
  return (
    <Container>
      <Header>
        <Title>Room EscapeCafe Review</Title>
        <Subtitle>I love EscapeCafe</Subtitle>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      <Cafes>
        {data?.escapeCafes?.map(cafe => (
          <Cafe key={cafe.id} id={cafe.id} bg={cafe.cover_image} />
        ))}
      </Cafes>
      <Footer />
    </Container>
  );
};

export default Home;
