import React from 'react';
import { useParams } from 'react-router-dom';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

const GET_THEME = gql`
  query getTheme($id: [Int!]!) {
    theme(id: $id) {
      name
      genre
      rating
      review_count
      cover_image
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
`;

const Poster = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
`;

export default () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_THEME, {
    variables: { id: Number(id) }
  });

  return (
    <Container>
      <Column>
        <Title>{loading ? 'Loading...' : data?.theme[0]?.name}</Title>
        <Subtitle>
          {data?.theme[0]?.review_count} · {data?.theme[0]?.rating}
        </Subtitle>
        <Description>{data?.theme[0]?.genre}</Description>
      </Column>
      <Poster bg={data?.theme[0]?.cover_image}></Poster>
    </Container>
  );
};
