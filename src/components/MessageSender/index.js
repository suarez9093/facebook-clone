import { Avatar } from '@material-ui/core';
import MoodIcon from '@material-ui/icons/Mood';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideocamIcon from '@material-ui/icons/Videocam';
import React, { useContext } from 'react';
import { context } from '../../context/context';
import './MessageSender.css';

function MessageSender() {
  const { handleSubmit, message, handleChange, imageURL } = useContext(context);
  return (
    <div className='messageSender'>
      <div className='messageSender__top'>
        <Avatar />
        <form>
          <input
            name='message'
            value={message}
            onChange={handleChange}
            className='messageSender__input'
            type='text'
            placeholder="What's on your mind?"
          />
          <input
            name='imageURL'
            type='text'
            value={imageURL}
            onChange={handleChange}
            placeholder='image URL (Optional)'
          />
          <button type='submit' onClick={handleSubmit}>
            Hidden
          </button>
        </form>
      </div>
      <div className='messageSender__bottom'>
        <div className='messageSender__option'>
          <VideocamIcon style={{ color: 'red' }} />
          <h3>Live Video</h3>
        </div>
        <div className='messageSender__option'>
          <PhotoLibraryIcon style={{ color: 'green' }} />
          <h3>Photo/Video</h3>
        </div>
        <div className='messageSender__option'>
          <MoodIcon style={{ color: 'orange' }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
