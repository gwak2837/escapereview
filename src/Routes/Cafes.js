import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import '../css/Cafes.css';
import Cafe from '../Components/Cafe';

const GET_CAFES = gql`
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

const SearchingOption = styled.div`
  background-image: linear-gradient(-45deg, #f794ab, #fd923a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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

export default () => {
  const { loading, data } = useQuery(GET_CAFES);
  return (
    <Container>
      <SearchingOption></SearchingOption>
      {loading && <Loading>Loading...</Loading>}
      <Cafes>
        {data?.escapeCafes?.map(cafe => (
          <Cafe key={cafe.id} id={cafe.id} bg={cafe.cover_image} />
        ))}
      </Cafes>
    </Container>
  );
};
