import React from 'react';
import ReactStars from 'react-rating-stars-component';

function Star(props) {
  const star = Math.round(props.rating);

  return (
    <>
      <ReactStars 
         count={5}
         size={20}
         value = {star}
         activeColor="#ffd700"
      />
    </>
  )
}




export default Star;