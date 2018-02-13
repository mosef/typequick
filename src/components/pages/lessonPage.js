import React from 'react';
import Card from '../account-ui/card';
import Sidebar from '../account-ui/sidebar';

const lessonPage = () => (
  <div className="container">
    <section>
      <Sidebar />
    </section>
    <main>
      <Card />
      <Card />
      <Card />
    </main>
  </div>
);

export default lessonPage;
