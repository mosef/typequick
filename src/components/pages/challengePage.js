import React from 'react';
import Navbar from '../dash-ui/navbar';
import Challenge from '../challenge-ui/challenge';

const challengePage = () => (
  <div className="challenge-container">
    <section>
      <Navbar />
    </section>
    <main>
      <Challenge />
    </main>
  </div>
);

export default challengePage;
