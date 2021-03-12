import { Avatar } from '@material-ui/core';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ShareIcon from '@material-ui/icons/Share';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import moment from 'moment';
import React from 'react';
import './Post.css';
function Post({ profilePic, image, username, timestamp, message }) {
  let day;
  if (timestamp) {
    timestamp = timestamp.toDate();
    day = moment().utc(timestamp).format('dddd, MMMM Do YYYY, h:mm:ss a');
  }
  return (
    <div className='post'>
      <div className='post__top'>
        <Avatar src={profilePic} className='post__avatar' />
        <div className='post__topInfo'>
          <h3>{username}</h3>
          <p>{day ? day : ''}</p>
        </div>
      </div>
      <div className='post__bottom'>
        <p>{message}</p>
      </div>
      <div className='post__image'>
        <img src={image} alt='' />
      </div>

      <div className='post__options'>
        <div className='post__option'>
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className='post__option'>
          <ChatBubbleIcon />
          <p>Comment</p>
        </div>
        <div className='post__option'>
          <ShareIcon />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
