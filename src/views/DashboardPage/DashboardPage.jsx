import React from 'react';
import Header from '../../components/Header';
import DashboardTable from '../../components/DashboardTable';
import fellows from '../../__mocks__/fellows';
import Filters from '../../components/Filters/Filters';

const DashboardPage = () => (
  <div style={{ backgroundColor: '#F4F8F9' }}>
    <Header />
    <Filters />
    <DashboardTable fellows={fellows} />
  </div>
);

export default DashboardPage;
