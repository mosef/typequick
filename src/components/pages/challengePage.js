import React from 'react';
import Navbar from '../dash-ui/navbar';
import Challenge from '../challenge-ui/challenge';
import ChallengeForm from '../challenge-ui/challengeForm';

const challengePage = () => (
  <div className="challenge-container">
    <section>
      <Navbar />
    </section>
    <main>
      <Challenge gameForm={<ChallengeForm />} />
    </main>
  </div>
);

export default challengePage;
