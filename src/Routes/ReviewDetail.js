import React from 'react';
//import Review from '../components/Review.js';

function ReviewDetail(props) {
  const { state } = props.location;

  if (state === undefined) props.history.push('/');

  if (!state) return null;

  return <span>{state.name}</span>;
}

export default ReviewDetail;
