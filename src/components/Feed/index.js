import React, { useContext, useEffect } from 'react';
import { context } from '../../context/context';
import db from '../../firebase';
import MessageSender from '../MessageSender';
import Post from '../MessageSender/Post';
import StoryFeed from '../StoryFeed';
import './Feed.css';
function Feed() {
  const { setPosts, posts } = useContext(context);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
  return (
    <div className='feed'>
      <StoryFeed />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          image={post.data.image}
          username={post.data.username}
          message={post.data.message}
          timestamp={post.data.timestamp}
        />
      ))}
    </div>
  );
}

export default Feed;
