import React from 'react';

const MovieReviews = props => (
  <div className='review-list'>
    {props.reviews.map(review => {
      return <div className='review'>{review.display_title}</div>
    })}
  </div>
)

export default MovieReviews

