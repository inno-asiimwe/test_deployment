import React from 'react';
import DashboardTable from '../../components/DashboardTable';
import fellows from '../../__mocks__/fellows';

const DashboardPage = () => (
  <div style={{ backgroundColor: '#F4F8F9' }}>
    <DashboardTable fellows={fellows} />
  </div>
);

export default DashboardPage;
