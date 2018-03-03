import React from 'react';
import Sidebar from '../account-ui/sidebar';
import Chart from '../account-ui/Chart';
import '../../css/accountpage.css';

const DashPage = () => (
  <div className="container">
    <section>
      <Sidebar />
    </section>
    <main>
      <Chart />
    </main>
  </div>
);

export default DashPage;
