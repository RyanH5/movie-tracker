import React from 'react';
import Story from './Story';
import './Stories.css';

const Stories = (props) => {
  const allStories = props.stories.map((story, index) => {
    return (
      <Story img={props.img}
         title={props.title}
         desc={props.desc} />
    );
  });

  return (
    <div className='Stories'>
      <div className='stories-header'>
        <h3>{props.storiesTitle}</h3>
        <a href='#'>See more</a>
      </div>
      <div className='stories-grid'>
        {allStories}
      </div>
    </div>
  );
};

export default Stories;