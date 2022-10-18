import React from 'react';
import Star from './Star.jsx';

export default function Stars() {
  // on component mount, should dsplay 5 empty stars
  // each star should have state and event listener
  // clicked event, will light up up to the clicked star
  // hover or mouse enter, mouse leave event for dynamic filling
  //

  return (
    <div className='Stars'>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
}

// Empty star: <FontAwesomeIcon icon="fa-regular fa-star" />

// Full Star: <FontAwesomeIcon icon="fa-solid fa-star" />

// Half Star: <FontAwesomeIcon icon="fa-solid fa-star-half-stroke" />
