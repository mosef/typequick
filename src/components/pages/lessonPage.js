import React from 'react';
import CardList from '../account-ui/cardlist';
import Sidebar from '../account-ui/sidebar';

const lessonPage = () => (
  <div className="container">
    <section>
      <Sidebar />
    </section>
    <main>
      <CardList />
    </main>
  </div>
);

export default lessonPage;
