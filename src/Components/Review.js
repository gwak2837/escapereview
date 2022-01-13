import React from "react";
import PropTypes from "prop-types";
import "css/Review.css";

function Review({ cover, date, title, summary }) {
  return (
    <div className="review">
      <img src={cover} alt={title} title={title} />
      <div className="review__data">
        <h3 className="review__title">{title}</h3>
        <h5 className="review__date">{date}</h5>
        <p className="review__summary">{summary}...</p>
      </div>
    </div>
  );
}

Review.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Review;
