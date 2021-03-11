import React from 'react';
import stories from './stories.json';
import Story from './Story';
import './StoryFeed.css';
function StoryFeed() {
  return (
    <div className='storyFeed'>
      {stories.map((story, i) => (
        <Story
          key={i}
          avatar={story.avatar}
          title={story.title}
          backgroundImage={story.backgroundImage}
        />
      ))}
    </div>
  );
}

export default StoryFeed;
