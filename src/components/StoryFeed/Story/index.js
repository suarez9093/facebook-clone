import { Avatar } from '@material-ui/core';
import React from 'react';
import './Story.css';

function Story({ avatar, backgroundImage, title }) {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className='story'
    >
      <Avatar className='story__avatar' src={avatar} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
