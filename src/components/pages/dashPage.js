import React from 'react';
import Navbar from '../dash-ui/navbar';
import Chart from '../dash-ui/Chart';
import '../../css/accountpage.css';

const DashPage = () => (
  <div className="dash-container">
    <section>
      <Navbar />
    </section>
    <main>
      <Chart />
    </main>
  </div>
);

export default DashPage;
