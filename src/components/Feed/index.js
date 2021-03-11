import React from 'react';
import MessageSender from '../MessageSender';
import StoryFeed from '../StoryFeed';
import './Feed.css';

function Feed() {
  return (
    <div className='feed'>
      <StoryFeed />

      <MessageSender />
    </div>
  );
}

export default Feed;
