import React from 'react';
import MessageSender from '../MessageSender';
import Post from '../MessageSender/Post';
import data from '../MessageSender/Post/data.json';
import StoryFeed from '../StoryFeed';
import './Feed.css';
function Feed() {
  return (
    <div className='feed'>
      <StoryFeed />
      <MessageSender />
      {data.map((post, i) => (
        <Post
          key={i}
          profilePic={post.avatar}
          image={post.image}
          username={post.username}
          message={post.message}
          timestamp={post.createdAt}
        />
      ))}
    </div>
  );
}

export default Feed;
