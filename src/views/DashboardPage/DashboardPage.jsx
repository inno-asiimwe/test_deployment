import React from 'react';
import Header from '../../components/Header';
import DashboardTable from '../../components/DashboardTable';
import fellows from '../../__mocks__/fellows';

const DashboardPage = () => (
  <div style={{ backgroundColor: '#F4F8F9' }}>
    <Header />
    <DashboardTable fellows={fellows} />
  </div>
);

export default DashboardPage;
