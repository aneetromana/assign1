import React from 'react';
import NewsStory from './NewsStory'; // Correct if NewsStory is in the same folder



const NewsFeed = () => {
  return (
    <div className="news-feed">
      <h1>My News Feed</h1>
      {newsData.map((story, index) => (
        <NewsStory key={index} story={story} />
      ))}
    </div>
  );
};

export default NewsFeed;
