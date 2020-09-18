import React from 'react';
import './rating.css';

interface IProps {
  rating: number;
}

const Rating = (props: IProps) => {
  let rating = [];
  for(let i=0; i<props.rating; i++) {
    rating.push(<p key={i}>*</p>);
  }
  return (
    <> 
      {rating}
    </>
  );
}

export default Rating;

