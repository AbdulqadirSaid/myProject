import React from 'react';
import  LargeImage  from '../images/mezan10.jpg';
const Home = () => {
  const bigImage ='../images/mezan10.jpg';
  const smallImages = [
    '..//images/mezani10b.jpg',
    './images/mezani3.jpg',
    './images/mezani5.jpg',
    './images/mezani5.jpg',
    './images/mezani5.jpg',
    './images/mezani .jpg',
    './images/mezan6.jpg',
    './images/mezan7.jpg',
    './images/mezan8.jpg',
    './images/mezan9.jpg',
    './images/mezan10b.jpg',
  ];

  return (
    <div className="home">
      <div className="content">
        <h1>Welcome to Our Online Food Ordering System</h1>
        <div className="image-grid">
          <img src={LargeImage} alt="Big Delicious Food" className="big-image" />
          {smallImages.map((image, index) => (
            <img key={index} src={image} alt={`Delicious Food ${index + 1}`} className="small-image" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;