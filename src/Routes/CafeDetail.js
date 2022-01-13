import React from 'react';
import { useParams } from 'react-router-dom';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import Theme from 'Components/Theme';

const GET_CAFE = gql`
  query getCafe($id: [Int!]!) {
    escapeCafe(id: $id) {
      name
      location
      rating
      review_count
      cover_image
      themes {
        id
        name
        genre
        rating
        review_count
        cover_image
      }
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

const Themes = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;
`;

export default () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_CAFE, {
    variables: { id: Number(id) }
  });
  return (
    <>
      <Container>
        <Column>
          <Title>{loading ? 'Loading...' : data?.escapeCafe[0]?.name}</Title>
          <Subtitle>
            {data?.escapeCafe[0]?.review_count} · {data?.escapeCafe[0]?.rating}
          </Subtitle>
          <Description>{data?.escapeCafe[0]?.location}</Description>
        </Column>
        <Poster bg={data?.escapeCafe[0]?.cover_image}></Poster>
      </Container>
      <Themes>
        {data?.escapeCafe[0]?.themes?.map(theme => (
          <Theme key={theme.id} id={theme.id} bg={theme.cover_image} />
        ))}
      </Themes>
    </>
  );
};
