
import React from 'react';
import './App.css';

const placeholderImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP-SXMQNLlnJgStJGO1Mmuw_gsQ1Fg3nmbqMVdwe_P-Q&s'; 

const stories = [
  {
    image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEemjBQ1nOE2Qmlmd3sxL_YVmbsAPEa7YFnC0jC_l2iA&s',
    link: 'https://example.com/story1',
    author: 'John Doe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEemjBQ1nOE2Qmlmd3sxL_YVmbsAPEa7YFnC0jC_l2iA&s',
    link: 'https://example.com/story2',
    author: 'Jane Smith',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image_url: 'https://example.com/image3.jpg',
    link: 'https://example.com/story3',
    author: 'Alice Johnson',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    image_url: 'https://via.placeholder.com/150',
    link: 'https://example.com/story4',
    author: 'Bob Williams',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    image_url: 'https://example.com/image5.jpg',
    link: 'https://example.com/story5',
    author: 'Eve Brown',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  // Add more stories here
];

const Story = ({ image_url, link, author, description }) => (
  <div className="story">
    <img src={image_url || placeholderImage} alt="Story" />
    <div className="info">
      <h3><a href={link} target="_blank" rel="noopener noreferrer">{description}</a></h3>
      <p>By {author}</p>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="app">
      <h1>News Feed</h1>
      <div className="news-feed">
        {stories.map((story, index) => (
          <Story key={index} {...story} />
        ))}
      </div>
    </div>
  );
}

export default App;
