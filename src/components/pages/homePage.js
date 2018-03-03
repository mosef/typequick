import React from 'react';
import Header from '../home-ui/header';
import Content from '../home-ui/content';
import '../../css/homepage.css';

const HomePage = () => (
  <div className="home-container" >
    <Header />
    <main>
      <Content />
    </main>
  </div>
);

export default HomePage;
