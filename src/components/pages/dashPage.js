import React from 'react';
import Sidebar from '../account-ui/sidebar';
import '../../css/accountpage.css';

const DashPage = () => (
  <div className="container">
    <section>
      <Sidebar />
    </section>
    <main>
      <h1>Dash Info Here</h1>

    </main>
  </div>
);

export default DashPage;
