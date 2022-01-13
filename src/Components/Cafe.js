import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 380px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  border-radius: 7px;
`;

const Poster = styled.div`
  background-image: url(${props => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
`;

export default ({ id, bg }) => (
  <Container>
    <Link to={`/cafe/${id}`}>
      <Poster bg={bg} />
    </Link>
  </Container>
);

/*

//import PropTypes from 'prop-types';
//import '../css/Cafe.css';

function Cafe({
  id,
  name,
  location,
  description,
  rating,
  review_count,
  cover_image
}) {
  return (
    <div className="cafe">
      <Link
        to={{
          pathname: `/cafe/${id}`,
          state: {
            cover_image,
            name,
            location,
            description,
            rating,
            review_count
          }
        }}
      >
        <img className="cafe__picture" src={cover_image} alt={name} title={name} />
        <div className="cafe_data">
          <div className="cafe__name">{name}</div>
          <div className="cafe__location">{location}</div>
          <div className="cafe__description">{description}</div>
          <div className="cafe__rating">{rating}</div>
          <div className="cafe__review_count">{review_count}</div>
        </div>
      </Link>
    </div>
  );
}




Cafe.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  review_count: PropTypes.number.isRequired,
  cover_image: PropTypes.string
};

export default Cafe;
*/
