import React from 'react';
import Sidebar from '../account-ui/sidebar';
import StartButton from '../challenge-ui/startbutton';

const challengePage = () => (
  <div className="container">
    <section>
      <Sidebar />
    </section>
    <main>
      <StartButton />
    </main>
  </div>
);

export default challengePage;
