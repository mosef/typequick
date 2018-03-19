import React from 'react';
import Lessons from '../lesson-ui/Lessons';
import Navbar from '../dash-ui/navbar';
import '../../css/lessonPage.css';

const lessonPage = () => (
  <div className="lesson-container">
    <section>
      <Navbar />
    </section>
    <main>
      <Lessons />
    </main>
  </div>
);

export default lessonPage;
